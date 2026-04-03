"use client";

import { type Stop } from "@/lib/trip-data";

const typeStyles: Record<Stop["type"], { bg: string; border: string; icon: string; label: string }> = {
  start: { bg: "bg-green-50", border: "border-green-300", icon: "🟢", label: "Start" },
  fuel: { bg: "bg-amber-50", border: "border-amber-300", icon: "⛽", label: "Fuel" },
  food: { bg: "bg-orange-50", border: "border-orange-300", icon: "🍔", label: "Food" },
  rest: { bg: "bg-blue-50", border: "border-blue-300", icon: "🅿️", label: "Rest" },
  overnight: { bg: "bg-purple-50", border: "border-purple-300", icon: "🏨", label: "Overnight" },
  "toll-decision": { bg: "bg-red-50", border: "border-red-300", icon: "🛣️", label: "Toll Decision" },
  destination: { bg: "bg-pink-50", border: "border-pink-300", icon: "🏰", label: "Destination" },
};

interface StopCardProps {
  stop: Stop;
  checked: boolean;
  onToggle: () => void;
}

export default function StopCard({ stop, checked, onToggle }: StopCardProps) {
  const style = typeStyles[stop.type];

  return (
    <div
      className={`relative border-l-4 ${style.border} ${style.bg} rounded-lg p-4 ${
        checked ? "opacity-60" : ""
      } transition-opacity`}
    >
      <div className="flex items-start gap-3">
        <button
          onClick={onToggle}
          className="mt-1 flex-shrink-0 w-6 h-6 rounded border-2 border-gray-300 flex items-center justify-center bg-white"
          aria-label={checked ? "Uncheck stop" : "Check stop"}
        >
          {checked && <span className="text-green-600 text-sm font-bold">✓</span>}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-lg">{style.icon}</span>
            <h3 className={`font-semibold text-gray-900 ${checked ? "line-through" : ""}`}>
              {stop.name}
            </h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/70 text-gray-600 border border-gray-200">
              {style.label}
            </span>
          </div>

          <div className="mt-1 flex items-center gap-3 text-sm text-gray-500">
            <span>Mile {stop.mile}</span>
            <span>ETA: {stop.eta}</span>
          </div>

          <p className="mt-2 text-sm text-gray-700">{stop.description}</p>

          {stop.tips && (
            <p className="mt-2 text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded px-2 py-1">
              💡 {stop.tips}
            </p>
          )}

          {stop.address && (
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(stop.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
            >
              📍 Navigate
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
