"use client";

import { type Stop } from "@/lib/trip-data";

const typeStyles: Record<Stop["type"], { bg: string; border: string; icon: string; label: string }> = {
  start: { bg: "bg-green-50", border: "border-green-400", icon: "🟢", label: "Start" },
  fuel: { bg: "bg-amber-50", border: "border-amber-400", icon: "⛽", label: "Fuel" },
  food: { bg: "bg-orange-50", border: "border-orange-400", icon: "🍽", label: "Food" },
  rest: { bg: "bg-blue-50", border: "border-blue-400", icon: "☕", label: "Rest" },
  overnight: { bg: "bg-purple-50", border: "border-purple-400", icon: "🏨", label: "Overnight" },
  destination: { bg: "bg-emerald-50", border: "border-emerald-400", icon: "🏁", label: "Destination" },
  hotel: { bg: "bg-violet-50", border: "border-violet-400", icon: "🏨", label: "Hotel" },
  activity: { bg: "bg-sky-50", border: "border-sky-400", icon: "★", label: "Activity" },
  radio: { bg: "bg-cyan-50", border: "border-cyan-400", icon: "♪", label: "Radio" },
  pet: { bg: "bg-lime-50", border: "border-lime-400", icon: "🐾", label: "Dog Break" },
  errand: { bg: "bg-slate-50", border: "border-slate-400", icon: "✓", label: "Task" },
};

interface StopCardProps {
  stop: Stop;
  checked: boolean;
  onToggle: () => void;
}

export default function StopCard({ stop, checked, onToggle }: StopCardProps) {
  const style = typeStyles[stop.type];
  const isDriveStop = stop.mile > 0;
  const isSuggested = stop.suggested;

  return (
    <div
      className={`border-l-4 ${isSuggested ? "border-dashed border-gray-300" : style.border} ${
        isSuggested ? "bg-gray-50/50" : style.bg
      } rounded-lg p-3 ${checked ? "opacity-50" : ""} transition-opacity`}
    >
      <div className="flex items-start gap-2.5">
        <button
          onClick={onToggle}
          className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
            checked ? "bg-green-500 border-green-500" : "bg-white border-gray-300"
          }`}
          aria-label={checked ? "Uncheck stop" : "Check stop"}
        >
          {checked && <span className="text-white text-xs font-bold">✓</span>}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-base">{style.icon}</span>
            <h3 className={`font-semibold text-sm ${isSuggested ? "text-gray-500" : "text-gray-900"} ${checked ? "line-through" : ""}`}>
              {stop.name}
            </h3>
            {(stop.type === "hotel" || stop.type === "overnight") && (
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-rose-100 text-rose-700 font-medium">
                RESERVED HOTEL
              </span>
            )}
            {isSuggested && (
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-500 font-medium italic">
                suggestion
              </span>
            )}
          </div>

          <div className="mt-0.5 flex items-center gap-2 text-xs text-gray-500">
            {isDriveStop && <span>Mile {stop.mile}</span>}
            <span>{stop.eta}</span>
          </div>

          <p className={`mt-1.5 text-xs leading-relaxed ${isSuggested ? "text-gray-500" : "text-gray-600"}`}>
            {stop.description}
          </p>

          {stop.tips && (
            <p className={`mt-1.5 text-xs rounded px-2 py-1 ${
              stop.type === "pet"
                ? "text-lime-800 bg-lime-50/80"
                : "text-amber-700 bg-amber-50/80"
            }`}>
              {stop.tips}
            </p>
          )}

          {stop.address && (
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(stop.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1.5 inline-flex items-center gap-1 text-xs text-blue-600 font-medium"
            >
              Navigate →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
