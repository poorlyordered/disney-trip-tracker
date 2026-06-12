"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import DaySection from "@/components/DaySection";
import TollInfo from "@/components/TollInfo";
import {
  checklistGroups,
  radioRegions,
  reservations,
  routeNotes,
  tripDays,
  tripSummary,
  type ChecklistItem,
} from "@/lib/trip-data";

const TripMap = dynamic(() => import("@/components/TripMap"), { ssr: false });

const STORAGE_KEY = "vacation-planner-checked";
const dayGroups = [
  { label: "Outbound", days: [1, 2] },
  { label: "Springfield", days: [3, 4, 5, 6, 7] },
  { label: "Return", days: [8, 9] },
];

type PlannerTab = "today" | "itinerary" | "prep" | "info";

function loadChecked(): Record<string, boolean> {
  if (typeof window === "undefined") return {};

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function getSuggestedDay() {
  const today = new Date();
  const month = today.getMonth();
  const date = today.getDate();

  if (today.getFullYear() === 2026 && month === 5 && date >= 13 && date <= 21) {
    return date - 12;
  }

  return 1;
}

function ItemCheckbox({
  item,
  checked,
  onToggle,
}: {
  item: ChecklistItem;
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`flex w-full items-start gap-3 rounded-md border px-3 py-2 text-left transition ${
        checked
          ? "border-emerald-200 bg-emerald-50 text-emerald-950"
          : "border-gray-200 bg-white text-gray-800"
      }`}
    >
      <span
        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs font-bold ${
          checked ? "border-emerald-500 bg-emerald-500 text-white" : "border-gray-300 bg-white"
        }`}
      >
        {checked ? "✓" : ""}
      </span>
      <span className="min-w-0">
        <span className={`block text-sm font-medium ${checked ? "line-through" : ""}`}>
          {item.label}
        </span>
        {item.detail && <span className="mt-0.5 block text-xs text-gray-500">{item.detail}</span>}
      </span>
    </button>
  );
}

export default function Home() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [activeDay, setActiveDay] = useState(getSuggestedDay);
  const [tab, setTab] = useState<PlannerTab>("today");

  useEffect(() => {
    setCheckedItems(loadChecked());
  }, []);

  function toggleItem(id: string) {
    setCheckedItems((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }

  const activeGroup = dayGroups.find((group) => group.days.includes(activeDay)) ?? dayGroups[0];
  const activeTripDay = tripDays.find((day) => day.day === activeDay) ?? tripDays[0];
  const allChecklistItems = checklistGroups.flatMap((group) => group.items);
  const totalItems = tripDays.reduce((sum, day) => sum + day.stops.length, 0) + allChecklistItems.length;
  const completedItems = useMemo(
    () => Object.entries(checkedItems).filter(([, checked]) => checked).length,
    [checkedItems],
  );
  const completion = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4 py-4 pb-10">
      <header className="mb-4 border-b border-gray-200 pb-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">
              {tripSummary.dates}
            </p>
            <h1 className="mt-1 text-3xl font-bold text-gray-950">{tripSummary.title}</h1>
            <p className="mt-1 text-sm text-gray-600">
              {tripSummary.subtitle} · {tripSummary.party}
            </p>
          </div>
          <div className="rounded-md border border-gray-200 bg-white px-3 py-2 shadow-sm">
            <div className="flex items-center justify-between gap-8 text-xs text-gray-500">
              <span>Progress</span>
              <span className="font-semibold text-gray-900">
                {completedItems}/{totalItems}
              </span>
            </div>
            <div className="mt-2 h-2 w-44 rounded-full bg-gray-100">
              <div
                className="h-2 rounded-full bg-emerald-500 transition-all duration-500"
                style={{ width: `${completion}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      <section className="mb-4 grid gap-3 lg:grid-cols-[1.35fr_0.9fr]">
        <TripMap />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-gray-950">Today</h2>
            <p className="mt-1 text-lg font-bold text-gray-900">{activeTripDay.date}</p>
            <p className="mt-1 text-sm text-gray-600">{activeTripDay.focus}</p>
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-md bg-gray-50 p-2">
                <span className="block text-gray-500">Route</span>
                <span className="font-semibold text-gray-900">
                  {activeTripDay.from} to {activeTripDay.to}
                </span>
              </div>
              <div className="rounded-md bg-gray-50 p-2">
                <span className="block text-gray-500">Drive</span>
                <span className="font-semibold text-gray-900">{activeTripDay.driveTime}</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-gray-950">Hotel Reservations</h2>
            <div className="mt-3 space-y-2">
              {reservations.map((reservation) => (
                <div key={reservation.id} className="border-l-2 border-rose-300 pl-3">
                  <p className="text-xs font-semibold text-rose-700">{reservation.when}</p>
                  <p className="text-sm font-semibold text-gray-950">{reservation.title}</p>
                  <p className="text-xs text-gray-500">
                    {reservation.location}
                    {reservation.note ? ` · ${reservation.note}` : ""}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <nav className="sticky top-0 z-20 mb-4 grid grid-cols-4 gap-1 rounded-lg border border-gray-200 bg-white p-1 shadow-sm">
        {[
          ["today", "Today"],
          ["itinerary", "Itinerary"],
          ["prep", "Prep"],
          ["info", "Info"],
        ].map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id as PlannerTab)}
            className={`rounded-md px-2 py-2 text-xs font-semibold transition ${
              tab === id ? "bg-gray-950 text-white" : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            {label}
          </button>
        ))}
      </nav>

      {tab === "today" && (
        <section>
          <DaySection day={activeTripDay} checkedStops={checkedItems} onToggleStop={toggleItem} />
        </section>
      )}

      {tab === "itinerary" && (
        <section>
          <div className="mb-3 flex gap-1.5">
            {dayGroups.map((group) => (
              <button
                key={group.label}
                type="button"
                onClick={() => setActiveDay(group.days[0])}
                className={`flex-1 rounded-lg py-2 text-xs font-semibold transition ${
                  activeGroup.label === group.label
                    ? "bg-sky-700 text-white"
                    : "border border-gray-200 bg-white text-gray-600"
                }`}
              >
                {group.label}
              </button>
            ))}
          </div>
          <div className="mb-4 grid grid-cols-2 gap-1 sm:grid-cols-5">
            {activeGroup.days.map((dayNum) => {
              const day = tripDays.find((candidate) => candidate.day === dayNum);
              if (!day) return null;

              return (
                <button
                  key={day.day}
                  type="button"
                  onClick={() => setActiveDay(day.day)}
                  className={`rounded-md px-2 py-2 text-left text-xs transition ${
                    activeDay === day.day
                      ? "bg-gray-950 text-white"
                      : "border border-gray-200 bg-white text-gray-600"
                  }`}
                >
                  <span className="block font-semibold">{day.date.replace(", June", " Jun")}</span>
                  <span className="block opacity-80">{day.label}</span>
                </button>
              );
            })}
          </div>
          <DaySection day={activeTripDay} checkedStops={checkedItems} onToggleStop={toggleItem} />
        </section>
      )}

      {tab === "prep" && (
        <section className="grid gap-3 md:grid-cols-2">
          {checklistGroups.map((group) => (
            <div key={group.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <h2 className="text-sm font-semibold text-gray-950">{group.title}</h2>
              <div className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <ItemCheckbox
                    key={item.id}
                    item={item}
                    checked={!!checkedItems[item.id]}
                    onToggle={() => toggleItem(item.id)}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {tab === "info" && (
        <section className="grid gap-3 lg:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-gray-950">Route Notes</h2>
            <dl className="mt-3 space-y-2 text-sm">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Home base
                </dt>
                <dd className="text-gray-900">{tripSummary.homeBase}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Main route
                </dt>
                <dd className="text-gray-900">{tripSummary.route}</dd>
              </div>
            </dl>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {routeNotes.map((note) => (
                <li key={note} className="rounded-md bg-gray-50 px-3 py-2">
                  {note}
                </li>
              ))}
            </ul>
          </div>
          <TollInfo />
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm lg:col-span-2">
            <h2 className="text-sm font-semibold text-gray-950">K-LOVE / Air1 Radio</h2>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {radioRegions.map((region) => (
                <div key={region.id} className="rounded-md border border-gray-200 bg-gray-50 p-3">
                  <h3 className="text-sm font-semibold text-gray-900">{region.area}</h3>
                  <div className="mt-2 grid gap-2 text-xs text-gray-700 sm:grid-cols-2">
                    <div>
                      <p className="font-semibold text-gray-950">K-LOVE</p>
                      <ul className="mt-1 space-y-1">
                        {region.klove.map((station) => (
                          <li key={station}>{station}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-950">Air1</p>
                      <ul className="mt-1 space-y-1">
                        {region.air1.map((station) => (
                          <li key={station}>{station}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {region.note && <p className="mt-2 text-xs text-gray-500">{region.note}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
