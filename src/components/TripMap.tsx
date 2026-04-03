"use client";

import { useEffect, useState } from "react";
import { tripDays, type Stop } from "@/lib/trip-data";

const driveTypes = new Set(["start", "fuel", "food", "rest", "overnight", "toll-decision", "destination"]);

const stopColors: Record<string, string> = {
  start: "#22c55e",
  fuel: "#f59e0b",
  food: "#f97316",
  rest: "#3b82f6",
  overnight: "#8b5cf6",
  "toll-decision": "#ef4444",
  destination: "#ec4899",
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

    const driveDays = tripDays.filter((d) => d.totalMiles > 0);
    const driveStops = driveDays.flatMap((day) =>
      day.stops.filter((s) => driveTypes.has(s.type))
    );

    const seen = new Set<string>();
    const uniqueStops = driveStops.filter((s) => {
      const key = `${s.lat.toFixed(2)},${s.lng.toFixed(2)}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    const routeCoords = uniqueStops.map((s) => [s.lat, s.lng] as [number, number]);

    L.polyline(routeCoords, {
      color: "#3b82f6",
      weight: 2.5,
      opacity: 0.6,
      dashArray: "6, 6",
    }).addTo(map);

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

    const bounds = L.latLngBounds(routeCoords);
    map.fitBounds(bounds, { padding: [20, 20] });

    return () => {
      map.remove();
    };
  }, [mounted]);

  if (!mounted) {
    return <div className="w-full h-48 bg-gray-100 rounded-lg animate-pulse" />;
  }

  return (
    <div className="w-full h-48 md:h-64 rounded-lg overflow-hidden shadow-sm border border-gray-200">
      <div id="trip-map" className="h-full w-full" />
    </div>
  );
}
