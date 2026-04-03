"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { tripDays } from "@/lib/trip-data";
import DaySection from "@/components/DaySection";
import TollInfo from "@/components/TollInfo";

const TripMap = dynamic(() => import("@/components/TripMap"), { ssr: false });

const STORAGE_KEY = "disney-trip-checked";

function loadChecked(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

const dayGroups = [
  { label: "Drive Down", days: [1, 2] },
  { label: "Disney", days: [3, 4, 5, 6] },
  { label: "Drive Home", days: [7, 8] },
];

export default function Home() {
  const [checkedStops, setCheckedStops] = useState<Record<string, boolean>>({});
  const [activeDay, setActiveDay] = useState(1);

  useEffect(() => {
    setCheckedStops(loadChecked());
  }, []);

  function toggleStop(id: string) {
    setCheckedStops((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }

  const totalStops = tripDays.reduce((sum, d) => sum + d.stops.length, 0);
  const checkedCount = Object.values(checkedStops).filter(Boolean).length;
  const activeGroup = dayGroups.find((g) => g.days.includes(activeDay));

  return (
    <main className="max-w-lg mx-auto px-4 py-5 pb-20">
      {/* Header */}
      <header className="text-center mb-5">
        <h1 className="text-xl font-bold text-gray-900">Disney Trip Tracker</h1>
        <p className="text-xs text-gray-400 mt-0.5">
          Winfield, MO → Fort Wilderness → Home &middot; Apr 4-11
        </p>
      </header>

      {/* Progress */}
      <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 mb-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-gray-600">Trip Progress</span>
          <span className="text-xs text-gray-400">{checkedCount}/{totalStops}</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${totalStops > 0 ? Math.round((checkedCount / totalStops) * 100) : 0}%` }}
          />
        </div>
        {checkedCount === totalStops && totalStops > 0 && (
          <p className="mt-1.5 text-center text-green-600 font-medium text-xs">
            Trip complete! Welcome home!
          </p>
        )}
      </div>

      {/* Map */}
      <div className="mb-3">
        <TripMap />
      </div>

      {/* Toll Info */}
      <div className="mb-3">
        <TollInfo />
      </div>

      {/* Phase Tabs */}
      <div className="flex gap-1.5 mb-2">
        {dayGroups.map((group) => (
          <button
            key={group.label}
            onClick={() => setActiveDay(group.days[0])}
            className={`flex-1 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeGroup?.label === group.label
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-500 border border-gray-200"
            }`}
          >
            {group.label}
          </button>
        ))}
      </div>

      {/* Day Tabs within group */}
      {activeGroup && (
        <div className="flex gap-1 mb-3">
          {activeGroup.days.map((dayNum) => {
            const day = tripDays.find((d) => d.day === dayNum);
            if (!day) return null;
            const shortDate = day.date.split(", ")[1]?.replace("April ", "4/") ?? "";
            return (
              <button
                key={dayNum}
                onClick={() => setActiveDay(dayNum)}
                className={`flex-1 py-1.5 px-1 rounded text-[11px] font-medium transition-colors ${
                  activeDay === dayNum
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {shortDate}
              </button>
            );
          })}
        </div>
      )}

      {/* Day Itinerary */}
      {tripDays
        .filter((d) => d.day === activeDay)
        .map((day) => (
          <DaySection
            key={day.day}
            day={day}
            checkedStops={checkedStops}
            onToggleStop={toggleStop}
          />
        ))}

      {/* Quick Reference */}
      <div className="mt-6 bg-white rounded-lg p-3 shadow-sm border border-gray-200">
        <h3 className="font-semibold text-gray-900 text-sm mb-2">Quick Reference</h3>
        <div className="space-y-1.5 text-xs text-gray-600">
          <div><span className="font-medium text-gray-800">Route:</span> I-64 → I-57 → I-24 → I-75 → FL Turnpike</div>
          <div><span className="font-medium text-gray-800">Night 1:</span> Best Western, McDonough, GA</div>
          <div><span className="font-medium text-gray-800">Camp:</span> Fort Wilderness, 4510 Fort Wilderness Trail, Orlando, FL</div>
          <div><span className="font-medium text-gray-800">Night 7:</span> Best Western, Murfreesboro, TN</div>
          <div><span className="font-medium text-gray-800">Vehicles:</span> RV + 1 Car</div>
        </div>
      </div>

      {/* Reservations */}
      <div className="mt-3 bg-rose-50 rounded-lg p-3 shadow-sm border border-rose-200">
        <h3 className="font-semibold text-rose-900 text-sm mb-2">Dining Reservations</h3>
        <div className="space-y-1.5 text-xs text-rose-800">
          <div><span className="font-medium">Sun 4/6, 4:20 PM:</span> Coral Reef Restaurant (EPCOT)</div>
          <div><span className="font-medium">Tue 4/8, 4:45 PM:</span> Oga&apos;s Cantina (Hollywood Studios)</div>
        </div>
      </div>

      {/* RV Warnings */}
      <div className="mt-3 bg-amber-50 rounded-lg p-3 shadow-sm border border-amber-200">
        <h3 className="font-semibold text-amber-900 text-sm mb-2">RV Alerts</h3>
        <ul className="space-y-1.5 text-xs text-amber-800">
          <li><strong>Monteagle (I-24):</strong> 6% grade descent. GEAR DOWN.</li>
          <li><strong>Atlanta (return):</strong> Unavoidable. Aim 10 AM-2 PM or after 7 PM.</li>
          <li><strong>South GA:</strong> Long gaps between exits. Keep fuel up.</li>
          <li><strong>Orlando:</strong> Take the Turnpike, skip I-4.</li>
          <li><strong>Hotels:</strong> Call both Best Westerns about RV parking.</li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="mt-6 text-center text-[10px] text-gray-300 pb-2">
        Tap checkboxes as you go
      </footer>
    </main>
  );
}
