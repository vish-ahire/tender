import React from 'react';
import { FaRegCommentAlt } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import { Task } from '@/data/columnsData';

interface CardProps {
    task: Task;
}

const Card: React.FC<CardProps> = ({ task }) => {

    const statusColors: Record<Task["status"], string> = {
        "Not Started": "text-orange-400",
        "In Progress": "text-blue-400",
        "Completed": "text-green-400",
    };

    const priorityColors: Record<Task["priority"], string> = {
        Low: "bg-green-600",
        Medium: "bg-yellow-500",
        High: "bg-red-600",
    };

    return (
        <div className="bg-[#2e2f35] p-4 rounded-lg shadow-md 
                transition-all duration-300 ease-in-out 
                hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] hover:scale-[1.02] 
                hover:ring-2 hover:ring-white w-full"
            
        >
            {/* Status Label */}
            <span className={`text-sm font-medium ${statusColors[task.status]}`}>
                {task.status}
            </span>

            {/* Task Details */}
            <h3 className="text-white font-semibold">{task.title}</h3>
            <p className="text-gray-400 text-sm line-clamp-1">{task.description}</p>
            <p className="text-gray-50 text-xs">{task.assignee}</p>
            {/* Footer */}
            <div className="flex justify-between items-center mt-3">
                <span className="text-xs text-gray-400">📅 {task.dueDate}</span>
                <span className={`text-xs px-2 py-1 rounded-full opacity-80 ${priorityColors[task.priority]}`}>
                    {task.priority}
                </span>
            </div>
            <hr className='my-2' />
            <div className="flex items-center text-gray-400 text-[10px] space-x-4">
                <p className="flex items-center space-x-1">
                    <FaRegCommentAlt className="text-[10px]" />
                    <span>12 Comments</span>
                </p>
                <p className="flex items-center space-x-1">
                    <GrAttachment className="text-[10px]" />
                    <span>3 Attachments</span>
                </p>
            </div>
        </div>
    );
};

export default Card;