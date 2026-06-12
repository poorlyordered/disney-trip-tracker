"use client";

import { useEffect, useState } from "react";
import { tripDays, type Stop } from "@/lib/trip-data";

const driveTypes = new Set(["start", "fuel", "food", "rest", "overnight", "destination", "hotel", "pet"]);

const routeGroups = [
  { label: "Outbound", days: new Set([1, 2]), color: "#2563eb" },
  { label: "Return", days: new Set([8, 9]), color: "#16a34a" },
];

const stopColors: Record<string, string> = {
  start: "#22c55e",
  fuel: "#f59e0b",
  food: "#f97316",
  rest: "#3b82f6",
  overnight: "#8b5cf6",
  destination: "#ec4899",
  hotel: "#8b5cf6",
  pet: "#65a30d",
};

export default function TripMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const L = require("leaflet");

    const map = L.map("trip-map", {
      zoomControl: false,
      attributionControl: false,
    }).setView([33.5, -86.0], 6);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

    const seen = new Set<string>();
    const driveStops = tripDays
      .filter((day) => day.totalMiles > 0)
      .flatMap((day) => day.stops.filter((stop) => driveTypes.has(stop.type)));

    const uniqueStops = driveStops.filter((s) => {
      const key = `${s.lat.toFixed(2)},${s.lng.toFixed(2)}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    const allRouteCoords = uniqueStops.map((s) => [s.lat, s.lng] as [number, number]);

    routeGroups.forEach((group) => {
      const groupStops = tripDays
        .filter((day) => group.days.has(day.day))
        .flatMap((day) => day.stops.filter((stop) => driveTypes.has(stop.type)));
      const routeCoords = groupStops.map((s) => [s.lat, s.lng] as [number, number]);

      if (routeCoords.length < 2) return;

      L.polyline(routeCoords, {
        color: group.color,
        weight: 3,
        opacity: 0.72,
        dashArray: group.label === "Return" ? "8, 8" : undefined,
      }).addTo(map);
    });

    uniqueStops.forEach((stop) => {
      const color = stopColors[stop.type] ?? "#6b7280";
      const size = stop.type === "overnight" || stop.type === "destination" ? 10 : 7;

      const icon = L.divIcon({
        html: `<div style="
          background:${color};
          width:${size}px;height:${size}px;
          border-radius:50%;
          border:1.5px solid white;
          box-shadow:0 1px 2px rgba(0,0,0,.3);
        "></div>`,
        className: "",
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
      });

      L.marker([stop.lat, stop.lng], { icon })
        .addTo(map)
        .bindPopup(
          `<div style="font-size:12px;max-width:180px;">
            <strong>${stop.name}</strong>
            ${stop.address ? `<br/><a href="https://maps.google.com/?q=${encodeURIComponent(stop.address)}" target="_blank" rel="noopener" style="color:#2563eb;">Navigate</a>` : ""}
          </div>`
        );
    });

    const bounds = L.latLngBounds(allRouteCoords);
    map.fitBounds(bounds, { padding: [20, 20] });

    return () => {
      map.remove();
    };
  }, [mounted]);

  if (!mounted) {
    return <div className="w-full h-48 bg-gray-100 rounded-lg animate-pulse" />;
  }

  return (
    <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden shadow-sm border border-gray-200">
      <div id="trip-map" className="h-full w-full" />
      <div className="pointer-events-none absolute left-2 top-2 flex gap-2 rounded bg-white/90 px-2 py-1 text-[10px] font-semibold text-gray-700 shadow-sm">
        <span className="flex items-center gap-1">
          <span className="h-0.5 w-4 rounded bg-blue-600" />
          Outbound
        </span>
        <span className="flex items-center gap-1">
          <span className="h-0.5 w-4 rounded border-t-2 border-dashed border-green-600" />
          Return
        </span>
      </div>
    </div>
  );
}
