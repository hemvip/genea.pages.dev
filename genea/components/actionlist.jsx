import React from "react"

export default function ActionList({ actions }) {
  return (
    <div className="flex gap-2 max-w-96 px-2 py-1 overflow-x-auto flex-wrap items-center">
      {actions.map((action, index) => (
        <button
          title={action}
          className="border text-xs border-gray-500 bg-gray-400 px-2 py-0 rounded-lg text-center text-nowrap"
          key={index}
        >
          {action}
        </button>
      ))}
    </div>
  )
}
