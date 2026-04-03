"use client";

import { type Stop } from "@/lib/trip-data";

const typeStyles: Record<Stop["type"], { bg: string; border: string; icon: string; label: string }> = {
  start: { bg: "bg-green-50", border: "border-green-400", icon: "🟢", label: "Start" },
  fuel: { bg: "bg-amber-50", border: "border-amber-400", icon: "⛽", label: "Fuel" },
  food: { bg: "bg-orange-50", border: "border-orange-400", icon: "🍽", label: "Food" },
  rest: { bg: "bg-blue-50", border: "border-blue-400", icon: "☕", label: "Rest" },
  overnight: { bg: "bg-purple-50", border: "border-purple-400", icon: "🏨", label: "Overnight" },
  "toll-decision": { bg: "bg-red-50", border: "border-red-400", icon: "🛣", label: "Toll" },
  destination: { bg: "bg-pink-50", border: "border-pink-400", icon: "🏰", label: "Destination" },
  park: { bg: "bg-sky-50", border: "border-sky-400", icon: "🎢", label: "Park" },
  dining: { bg: "bg-rose-50", border: "border-rose-400", icon: "🍷", label: "Reservation" },
  attraction: { bg: "bg-indigo-50", border: "border-indigo-400", icon: "✨", label: "Attraction" },
};

interface StopCardProps {
  stop: Stop;
  checked: boolean;
  onToggle: () => void;
}

export default function StopCard({ stop, checked, onToggle }: StopCardProps) {
  const style = typeStyles[stop.type];
  const isDriveStop = stop.mile > 0;

  return (
    <div
      className={`border-l-4 ${style.border} ${style.bg} rounded-lg p-3 ${
        checked ? "opacity-50" : ""
      } transition-opacity`}
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
            <h3 className={`font-semibold text-sm text-gray-900 ${checked ? "line-through" : ""}`}>
              {stop.name}
            </h3>
            {stop.type === "dining" && (
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-rose-100 text-rose-700 font-medium">
                RESERVED
              </span>
            )}
          </div>

          <div className="mt-0.5 flex items-center gap-2 text-xs text-gray-500">
            {isDriveStop && <span>Mile {stop.mile}</span>}
            <span>{stop.eta}</span>
          </div>

          <p className="mt-1.5 text-xs text-gray-600 leading-relaxed">{stop.description}</p>

          {stop.tips && (
            <p className="mt-1.5 text-xs text-amber-700 bg-amber-50/80 rounded px-2 py-1">
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
