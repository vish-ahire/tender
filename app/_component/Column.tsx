import React, { useState } from "react";
import Card from './Card';
import { FiMoreVertical, FiPlus } from 'react-icons/fi';
import TaskModal from "./TaskModal";
import { Task } from "@/data/columnsData";

interface ColumnProps {
  column: {
    id: string;
    title: string;
    color: string;
    tasks: Task[];
  };
  onAddTask: (columnId: string, newTask: Task) => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, taskId: string, sourceColumnId: string) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>, targetColumnId: string) => void;

}
const Column: React.FC<ColumnProps> = ({ column, onDragStart, onDrop, onAddTask }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"add" | "view">("add");
  const [selectedTask, setSelectedTask] = useState<Task | undefined>(undefined);

  const [newTask, setNewTask] = useState<{
    title: string;
    description: string;
    assignee: string;
    priority: "Low" | "Medium" | "High";
    dueDate: string;
  }>({
    title: "",
    description: "",
    assignee: "",
    priority: "Medium",
    dueDate: "",
  });

  const handleAddTask = () => {
    if (!newTask.title.trim()) return;

    const task: Task = {
      id: crypto.randomUUID(),
      ...newTask,
      status: column.title as Task["status"],
    };
    onAddTask(column.id, task);
    setNewTask({ title: "", description: "", assignee: "", priority: "Medium", dueDate: "" });
    setShowModal(false);
  };


  return (
    <div className="w-1/3 md:w-2/3 bg-[#000000] p-4 rounded-lg shadow-lg min-h-0 "
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => onDrop(e, column.id)}
    >
      {/* Column Header */}
      <div className="flex justify-between items-center border-b border-gray-700 pb-2 mb-4">
        <h2 className={`text-lg font-semibold ${column.color}`}>{column.title}
          <span className="text-sm text-black font-bold bg-sky-700 mx-2 px-2 py-1 rounded-full ">{column.tasks.length}</span>
        </h2>
        <div className="flex items-center space-x-2">
          <FiPlus className="cursor-pointer text-gray-400 hover:text-white" onClick={() => {
            setModalType("add");
            setShowModal(true);
          }} />
          <FiMoreVertical className="cursor-pointer text-gray-400 hover:text-white" />
        </div>
      </div>

      {/* Task List */}
      <div className="space-y-4 ">
        {column.tasks.map((task) => (
          <div key={task.id}
            draggable
            onDragStart={(e) => onDragStart(e, task.id, column.id)}
            onClick={() => {
              setSelectedTask(task);
              setModalType("view");
              setShowModal(true);
            }}>
            <Card key={task.id} task={task} />
          </div>

        ))}
      </div>
      <TaskModal
        isOpen={showModal}
        type={modalType}
        task={selectedTask}
        newTask={newTask}
        onClose={() => setShowModal(false)}
        onSave={handleAddTask}
        setNewTask={setNewTask}
      />
    </div >
  );
};

export default Column;