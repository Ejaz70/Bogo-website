import React from "react";
import { Switch } from "@headlessui/react";

const tasks = [
  { id: 1, xp: 100, text: "Invite 10 friends and win 100 XP" },
  { id: 2, xp: 50, text: "Share the advertisement and win 50 XP" },
  { id: 3, xp: 50, text: "Invite a friend to go out and win 50 XP" },
  { id: 4, xp: 50, text: "Open the app daily for 15 days and win 50 XP" },
  { id: 5, xp: 50, text: "Invite a friend to the game and win 50 XP" },
  { id: 6, xp: 50, text: "Follow 10 friends and win 50 XP" },
  { id: 7, xp: 50, text: "Rate the app and win 50 XP" },
  { id: 8, xp: 50, text: "Complete 3 bookings and win 50 XP" },
  { id: 9, xp: 200, text: "Visit the suggested offers and win 200 XP" },
  { id: 10, xp: 50, text: "Complete loyalty and win 50 XP" },
];

export default function AdsManagement() {
  const [enabled, setEnabled] = React.useState(true);
  const [activeTasks, setActiveTasks] = React.useState(
    tasks.map((t) => ({ ...t, active: true }))
  );

  const toggleTask = (id) => {
    setActiveTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, active: !task.active } : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-[#1a1a1a] rounded-2xl p-6 shadow-lg text-white">
        {/* Global Toggle */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Activate All Tasks</h2>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
              enabled ? "bg-green-500" : "bg-gray-600"
            } relative inline-flex h-6 w-11 items-center rounded-full transition`}
          >
            <span
              className={`${
                enabled ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </div>

        {/* Tasks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {activeTasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between bg-[#2a2a2a] rounded-xl p-4 shadow-md"
            >
              <div className="flex items-center gap-3">
                {/* XP Badge */}
                <div className="bg-[#3b3b3b] text-yellow-400 text-xs px-3 py-1 rounded-full font-semibold">
                  {task.xp} XP
                </div>
                <p className="text-sm">{task.text}</p>
              </div>

              {/* Toggle Switch */}
              <Switch
                checked={task.active}
                onChange={() => toggleTask(task.id)}
                className={`${
                  task.active ? "bg-green-500" : "bg-gray-600"
                } relative inline-flex h-5 w-10 items-center rounded-full transition`}
              >
                <span
                  className={`${
                    task.active ? "translate-x-5" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


