"use client";

import { useEffect, useState } from "react";
import { tripDays, type Stop } from "@/lib/trip-data";

const stopColors: Record<Stop["type"], string> = {
  start: "#22c55e",
  fuel: "#f59e0b",
  food: "#f97316",
  rest: "#3b82f6",
  overnight: "#8b5cf6",
  "toll-decision": "#ef4444",
  destination: "#ec4899",
};

const stopEmoji: Record<Stop["type"], string> = {
  start: "🟢",
  fuel: "⛽",
  food: "🍔",
  rest: "🅿️",
  overnight: "🏨",
  "toll-decision": "🛣️",
  destination: "🏰",
};

export default function TripMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const L = require("leaflet");

    const map = L.map("trip-map").setView([33.5, -86.0], 6);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    const allStops = tripDays.flatMap((day) => day.stops);
    const routeCoords = allStops.map((stop) => [stop.lat, stop.lng] as [number, number]);

    L.polyline(routeCoords, {
      color: "#3b82f6",
      weight: 3,
      opacity: 0.7,
      dashArray: "8, 8",
    }).addTo(map);

    allStops.forEach((stop) => {
      const color = stopColors[stop.type];
      const emoji = stopEmoji[stop.type];

      const icon = L.divIcon({
        html: `<div style="
          background: ${color};
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        ">${emoji}</div>`,
        className: "",
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      });

      L.marker([stop.lat, stop.lng], { icon })
        .addTo(map)
        .bindPopup(
          `<div style="min-width: 200px;">
            <strong>${stop.name}</strong><br/>
            <span style="color: #666; font-size: 12px;">${stop.description}</span>
            ${stop.tips ? `<br/><br/><em style="color: #b45309; font-size: 12px;">💡 ${stop.tips}</em>` : ""}
            ${stop.address ? `<br/><br/><a href="https://maps.google.com/?q=${encodeURIComponent(stop.address)}" target="_blank" rel="noopener" style="color: #2563eb; font-size: 12px;">📍 Navigate here</a>` : ""}
          </div>`
        );
    });

    const bounds = L.latLngBounds(routeCoords);
    map.fitBounds(bounds, { padding: [30, 30] });

    return () => {
      map.remove();
    };
  }, [mounted]);

  if (!mounted) {
    return (
      <div className="w-full h-64 md:h-80 bg-gray-200 rounded-xl flex items-center justify-center">
        Loading map...
      </div>
    );
  }

  return (
    <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
      <div id="trip-map" className="h-full w-full" />
    </div>
  );
}
