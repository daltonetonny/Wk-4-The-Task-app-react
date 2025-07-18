import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "./Button";

function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask, done: false }]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.done;
    if (filter === "completed") return task.done;
    return true;
  });

  return (
    <div className="max-w-xl mx-auto p-4 bg-white dark:bg-gray-700 rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Task Manager</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task"
          className="flex-1 px-3 py-2 border rounded dark:bg-gray-800 dark:text-white"
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      <div className="flex gap-2 mb-4">
        {["all", "active", "completed"].map((type) => (
          <Button
            key={type}
            variant={filter === type ? "primary" : "secondary"}
            onClick={() => setFilter(type)}
          >
            {type}
          </Button>
        ))}
      </div>

      <ul className="space-y-2">
        {filteredTasks.map(task => (
          <li
            key={task.id}
            className="flex justify-between items-center p-2 border rounded dark:border-gray-600"
          >
            <span
              className={`flex-1 cursor-pointer ${task.done ? "line-through text-gray-400" : ""}`}
              onClick={() => toggleTask(task.id)}
            >
              {task.text}
            </span>
            <Button variant="danger" onClick={() => deleteTask(task.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
