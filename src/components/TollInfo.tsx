"use client";

import { tollInfo } from "@/lib/trip-data";
import { useState } from "react";

export default function TollInfo() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-3 py-2 flex items-center justify-between text-left"
      >
        <span className="text-xs font-medium text-gray-700">Toll Road Info</span>
        <span className="text-gray-300 text-sm">{expanded ? "−" : "+"}</span>
      </button>

      {expanded && (
        <div className="px-3 pb-3 border-t border-gray-100">
          <p className="mt-2 text-xs text-gray-500">{tollInfo.description}</p>

          <div className="mt-2 space-y-2">
            {tollInfo.options.map((option) => (
              <div key={option.name} className="border border-gray-100 rounded p-2 bg-gray-50">
                <div className="text-xs font-medium text-gray-900">{option.name}</div>
                <div className="text-[11px] text-gray-500 mt-0.5">{option.cost}</div>
                <div className="mt-1 text-[11px]">
                  <span className="text-green-700">+ {option.pros}</span>
                  {" / "}
                  <span className="text-red-700">- {option.cons}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-2 text-[10px] text-gray-400">{tollInfo.note}</p>
        </div>
      )}
    </div>
  );
}
