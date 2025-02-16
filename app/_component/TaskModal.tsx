import React, { useEffect, useState } from "react";
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
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => setShow(true), 10); // Delay for transition
        } else {
            setShow(false);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className={`fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center transition-opacity duration-300 ${show ? "opacity-100" : "opacity-0"}`}
            onClick={onClose}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-[#1E1E1E]  p-6 rounded-xl shadow-xl w-96 transform transition-all duration-300 ${show ? "scale-100 translate-y-0 opacity-100" : "scale-90 translate-y-5 opacity-0"}`}
            >
                <h2 className="text-white text-xl font-bold mb-4">{type === "add" ? "Add New Task" : "Task Details"}</h2>

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
                ) :
                task && (
                    <div className="bg-[#2A2A2A] p-4 rounded-lg text-white">
                      <h3 className="text-lg font-semibold text-center mb-3">{task.title}</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <p className="text-gray-400">📌 <span className="text-white font-medium">Description:</span></p>
                        <p className="text-gray-300">{task.description}</p>
                  
                        <p className="text-gray-400">👤 <span className="text-white font-medium">Assignee:</span></p>
                        <p className="text-gray-300">{task.assignee}</p>
                  
                        <p className="text-gray-400">⚡ <span className="text-white font-medium">Priority:</span></p>
                        <p className={`font-medium ${task.priority === "High" ? "text-red-500" : task.priority === "Medium" ? "text-yellow-500" : "text-green-500"}`}>
                          {task.priority}
                        </p>
                  
                        <p className="text-gray-400">📅 <span className="text-white font-medium">Due Date:</span></p>
                        <p className="text-gray-300">{task.dueDate}</p>
                  
                        <p className="text-gray-400">🚀 <span className="text-white font-medium">Status:</span></p>
                        <p className="text-gray-300">{task.status}</p>
                      </div>
                    </div>
                  ) 
                // (
                //     task && (
                //         <div className="text-white space-y-2">
                //             <p><strong>Title:</strong> {task.title}</p>
                //             <p><strong>Description:</strong> {task.description}</p>
                //             <p><strong>Assignee:</strong> {task.assignee}</p>
                //             <p><strong>Priority:</strong> {task.priority}</p>
                //             <p><strong>Due Date:</strong> {task.dueDate}</p>
                //             <p><strong>Status:</strong> {task.status}</p>
                //         </div>
                //     )
                // )
                }

                <div className="flex justify-end space-x-3 mt-4">
                    <button
                        className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 transition-transform duration-200 hover:scale-105"
                        onClick={onClose}
                    >
                        Close
                    </button>
                    {type === "add" && onSave && (
                        <button
                            className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600 transition-transform duration-200 hover:scale-105"
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
