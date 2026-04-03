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

  return (
    <section className="mb-8">
      <div className="sticky top-0 z-10 bg-gray-50/95 backdrop-blur-sm pb-3 pt-2">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {day.label}: {day.date}
            </h2>
            <p className="text-sm text-gray-500">
              {day.from} → {day.to} &middot; {day.totalMiles} mi &middot; {day.driveTime}
            </p>
          </div>
          <div className="text-right">
            <span className="text-sm font-medium text-gray-600">
              {completedCount}/{day.stops.length}
            </span>
          </div>
        </div>

        <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mt-4 space-y-3">
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
