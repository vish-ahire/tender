"use client";

import React, { useState } from "react";
import Column from "./Column";
import { columnsData } from "../../data/columnsData";

const BoardView: React.FC = () => {
  const [columns, setColumns] = useState(columnsData);

  const handleAddTask = (columnId: string, newTask: any) => {
    setColumns((prevColumns) =>
      prevColumns.map((col) =>
        col.id === columnId ? { ...col, tasks: [...col.tasks, newTask] } : col
      )
    );
  };

  return (
    <div className="w-full flex items-start overflow-x-auto space-x-6 p-4 ">
      {columns.map((column) => (
        <Column key={column.id} column={column} onAddTask={handleAddTask}/>
      ))}
    </div>
  );
};

export default BoardView;
