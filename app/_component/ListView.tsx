import React, { useState } from "react";
import { columnsData, Task } from "@/data/columnsData";
import TaskModal from "./TaskModal";

const ListView: React.FC = () => {
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);

    return (
        <div className="bg-[#1E1E1E] p-4 rounded-lg shadow-md w-full">
            <h2 className="text-white text-lg font-semibold mb-4">Task List</h2>

            {columnsData.map((column) => (
                <div key={column.id} className="mb-6">
                    <h3 className={`text-md font-semibold mb-2 ${column.color}`}>
                        {column.title}
                    </h3>

                    <div className="space-y-2">
                        {column.tasks.length > 0 ? (
                            column.tasks.map((task) => (
                                <div
                                    key={task.id}
                                    className="flex items-center justify-between bg-[#2A2A2A] p-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#333] hover:shadow-lg"
                                    onClick={() => setSelectedTask(task)} 

                                >
                                    <div className="flex flex-col">
                                        <span className="text-white font-medium">{task.title}</span>
                                        <span className="text-gray-400 text-sm">{task.assignee}</span>
                                    </div>

                                    <span
                                        className={`text-sm px-3 py-1 rounded-full font-semibold ${task.priority === "High"
                                            ? "bg-red-500 text-white"
                                            : task.priority === "Medium"
                                                ? "bg-yellow-500 text-black"
                                                : "bg-green-500 text-black"
                                            }`}
                                    >
                                        {task.priority}
                                    </span>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-400 text-center">No tasks available.</p>
                        )}
                    </div>
                </div>
            ))}

            {/* Task Modal */}
            {selectedTask && (
                <TaskModal
                    isOpen={true}
                    type="view"
                    task={selectedTask}
                    onClose={() => setSelectedTask(null)}
                />
            )}
        </div>
    );
};

export default ListView;
