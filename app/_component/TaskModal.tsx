import React from "react";
import { Task } from "@/data/columnsData";


interface TaskModalProps {
  isOpen: boolean;
  type: "add" | "view";
  task?: Task;
  newTask?: {
    title: string;
    description: string;
    assignee: string;
    priority: "Low" | "Medium" | "High";
    dueDate: string;
  };
  onClose: () => void;
  onSave?: () => void;
  setNewTask?: (task: any) => void;
}

const TaskModal: React.FC<TaskModalProps> = ({
  isOpen,
  type,
  task,
  newTask,
  onClose,
  onSave,
  setNewTask,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-white text-lg font-semibold mb-4">
          {type === "add" ? "Add New Task" : "Task Details"}
        </h2>

        {type === "add" && newTask && setNewTask ? (
          <>
            <input
              type="text"
              placeholder="Task Title"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              className="w-full bg-[#333] text-white p-2 rounded mb-2 focus:outline-none"
            />
            <textarea
              placeholder="Task Description"
              value={newTask.description}
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
              className="w-full bg-[#333] text-white p-2 rounded mb-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Assignee"
              value={newTask.assignee}
              onChange={(e) =>
                setNewTask({ ...newTask, assignee: e.target.value })
              }
              className="w-full bg-[#333] text-white p-2 rounded mb-2 focus:outline-none"
            />
            <select
              value={newTask.priority}
              onChange={(e) =>
                setNewTask({ ...newTask, priority: e.target.value as Task["priority"] })
              }
              className="w-full bg-[#333] text-white p-2 rounded mb-2 focus:outline-none"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <input
              type="date"
              value={newTask.dueDate}
              onChange={(e) =>
                setNewTask({ ...newTask, dueDate: e.target.value })
              }
              className="w-full bg-[#333] text-white p-2 rounded mb-2 focus:outline-none"
            />
          </>
        ) : (
          task && (
            <div className="text-white space-y-2">
              <p><strong>Title:</strong> {task.title}</p>
              <p><strong>Description:</strong> {task.description}</p>
              <p><strong>Assignee:</strong> {task.assignee}</p>
              <p><strong>Priority:</strong> {task.priority}</p>
              <p><strong>Due Date:</strong> {task.dueDate}</p>
              <p><strong>Status:</strong> {task.status}</p>
            </div>
          )
        )}

        <div className="flex justify-end space-x-3 mt-4">
          <button
            className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
            onClick={onClose}
          >
            Close
          </button>
          {type === "add" && onSave && (
            <button
              className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600"
              onClick={onSave}
            >
              Add Task
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
