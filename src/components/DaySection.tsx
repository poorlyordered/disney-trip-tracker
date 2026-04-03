"use client";

import { type TripDay } from "@/lib/trip-data";
import StopCard from "./StopCard";

interface DaySectionProps {
  day: TripDay;
  checkedStops: Record<string, boolean>;
  onToggleStop: (id: string) => void;
}

export default function DaySection({ day, checkedStops, onToggleStop }: DaySectionProps) {
  const completedCount = day.stops.filter((s) => checkedStops[s.id]).length;
  const progress = Math.round((completedCount / day.stops.length) * 100);
  const isDriveDay = day.totalMiles > 0;

  return (
    <section className="mb-6">
      <div className="sticky top-0 z-10 bg-gray-50/95 backdrop-blur-sm pb-2 pt-1">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-900">{day.date}</h2>
            <p className="text-xs text-gray-500">
              {isDriveDay
                ? `${day.from} → ${day.to} · ${day.totalMiles} mi · ${day.driveTime}`
                : `${day.from} · ${day.driveTime}`}
            </p>
          </div>
          <span className="text-xs font-medium text-gray-400">
            {completedCount}/{day.stops.length}
          </span>
        </div>

        <div className="mt-1.5 w-full bg-gray-200 rounded-full h-1.5">
          <div
            className="bg-green-500 h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mt-3 space-y-2">
        {day.stops.map((stop) => (
          <StopCard
            key={stop.id}
            stop={stop}
            checked={!!checkedStops[stop.id]}
            onToggle={() => onToggleStop(stop.id)}
          />
        ))}
      </div>
    </section>
  );
}
