import React from 'react';
import Card from './Card';
import { FiMoreVertical, FiPlus } from 'react-icons/fi';

interface Task {
    id: string;
    title: string;
    description: string;
    assignee: string;
    priority: "Low" | "Medium" | "High";
    dueDate: string;
    status: "Not Started" | "In Progress" | "Completed";
}

interface ColumnProps {
    column: {
        id: string;
        title: string;
        color: string;
        tasks: Task[];
    };
}
const Column: React.FC<ColumnProps> = ({ column }) => {
    return (
        <div className="w-1/3 bg-[#000000] p-4 rounded-lg shadow-lg min-h-0 ">
            {/* Column Header */}
            <div className="flex justify-between items-center border-b border-gray-700 pb-2 mb-4">
                <h2 className={`text-lg font-semibold ${column.color}`}>{column.title}
                    <span className="text-sm text-black font-bold bg-sky-700 mx-2 px-2 py-1 rounded-full ">{column.tasks.length}</span>
                </h2>
                <div className="flex items-center space-x-2">
                    <FiPlus className="cursor-pointer text-gray-400 hover:text-white" />
                    <FiMoreVertical className="cursor-pointer text-gray-400 hover:text-white" />
                </div>
            </div>

            {/* Task List */}
            <div className="space-y-4 ">
                {column.tasks.map((task) => (
                    <Card key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default Column;