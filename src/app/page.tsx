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

  return (
    <main className="max-w-lg mx-auto px-4 py-6 pb-24">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Disney Trip Tracker
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Winfield, MO → Fort Wilderness
        </p>
        <p className="text-xs text-gray-400">
          April 4-11, 2026 &middot; RV + 1 Car &middot; ~2,130 miles round trip
        </p>
      </header>

      {/* Overall Progress */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Trip Progress</span>
          <span className="text-sm text-gray-500">{checkedCount}/{totalStops} stops</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${totalStops > 0 ? Math.round((checkedCount / totalStops) * 100) : 0}%` }}
          />
        </div>
        {checkedCount === totalStops && totalStops > 0 && (
          <p className="mt-2 text-center text-green-600 font-semibold text-sm">
            You made it to Disney!
          </p>
        )}
      </div>

      {/* Map */}
      <div className="mb-4">
        <TripMap />
      </div>

      {/* Toll Info */}
      <div className="mb-4">
        <TollInfo />
      </div>

      {/* Day Tabs */}
      <div className="flex gap-2 mb-4">
        {tripDays.map((day) => (
          <button
            key={day.day}
            onClick={() => setActiveDay(day.day)}
            className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
              activeDay === day.day
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            <div>{day.label}</div>
            <div className="text-xs opacity-75">{day.date.split(", ")[0]}</div>
          </button>
        ))}
      </div>

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
      <div className="mt-8 bg-white rounded-xl p-4 shadow-sm border border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-3">Quick Reference</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-start gap-2">
            <span className="font-medium text-gray-800 w-20 flex-shrink-0">Overnight:</span>
            <span>Best Western, McDonough, GA (I-75, exits 216-218)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-medium text-gray-800 w-20 flex-shrink-0">Destination:</span>
            <span>Fort Wilderness, 4510 Fort Wilderness Trail, Orlando, FL 32836</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-medium text-gray-800 w-20 flex-shrink-0">Route:</span>
            <span>I-64 → I-57 → I-24 → I-75 → FL Turnpike</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-medium text-gray-800 w-20 flex-shrink-0">Vehicles:</span>
            <span>RV + 1 Car</span>
          </div>
        </div>
      </div>

      {/* RV Warnings */}
      <div className="mt-4 bg-amber-50 rounded-xl p-4 shadow-sm border border-amber-200">
        <h3 className="font-semibold text-amber-900 mb-3">RV Alerts</h3>
        <ul className="space-y-2 text-sm text-amber-800">
          <li><strong>Monteagle Mountain (I-24, mile ~480):</strong> 6% grade, 4-mile descent. GEAR DOWN. Do not ride brakes.</li>
          <li><strong>Atlanta bypass (outbound):</strong> You skip it by staying at McDonough — already south of it on Day 2.</li>
          <li><strong>Atlanta (return):</strong> You MUST pass through on Day 3. Aim for 10 AM-2 PM or after 7 PM. Use I-285 West bypass to avoid downtown.</li>
          <li><strong>South GA on I-75:</strong> Long stretches between exits. Don&apos;t let the tank get low.</li>
          <li><strong>I-4 Orlando:</strong> Take the Turnpike instead. Way easier in an RV.</li>
          <li><strong>Best Western parking:</strong> Call ahead to confirm they can fit the RV overnight.</li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center text-xs text-gray-400 pb-4">
        <p>Safe travels!</p>
        <p className="mt-1">Tap checkboxes as you pass each stop</p>
      </footer>
    </main>
  );
}
