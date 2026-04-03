"use client";

import { tollInfo } from "@/lib/trip-data";
import { useState } from "react";

export default function TollInfo() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white border border-red-200 rounded-xl overflow-hidden shadow-sm">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-4 py-3 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-2">
          <span className="text-lg">🛣️</span>
          <span className="font-semibold text-gray-900">{tollInfo.title}</span>
        </div>
        <span className="text-gray-400 text-xl">{expanded ? "−" : "+"}</span>
      </button>

      {expanded && (
        <div className="px-4 pb-4 border-t border-red-100">
          <p className="mt-3 text-sm text-gray-600">{tollInfo.description}</p>

          <div className="mt-4 space-y-3">
            {tollInfo.options.map((option) => (
              <div
                key={option.name}
                className="border border-gray-200 rounded-lg p-3 bg-gray-50"
              >
                <h4 className="font-medium text-gray-900">{option.name}</h4>
                <p className="text-sm text-gray-500 mt-1">Cost: {option.cost}</p>
                <div className="mt-2 text-sm">
                  <p className="text-green-700">✅ {option.pros}</p>
                  <p className="text-red-700">⚠️ {option.cons}</p>
                </div>
                <p className="mt-2 text-xs text-gray-500">{option.details}</p>
              </div>
            ))}
          </div>

          <p className="mt-3 text-xs text-gray-500 bg-yellow-50 border border-yellow-200 rounded p-2">
            💡 {tollInfo.note}
          </p>
        </div>
      )}
    </div>
  );
}
