"use client";

import React, { useState } from "react";
import Column from "./Column";
import { columnsData, Task } from "../../data/columnsData";

const BoardView: React.FC = () => {
  const [columns, setColumns] = useState(columnsData);

  const handleAddTask = (columnId: string, newTask: any) => {
    setColumns((prevColumns) =>
      prevColumns.map((col) =>
        col.id === columnId ? { ...col, tasks: [...col.tasks, newTask] } : col
      )
    );
  };
  //DND start
  const handleDragStart = (e: React.DragEvent, taskId: string, sourceColumnId: string) => {
    e.dataTransfer.setData("taskId", taskId);
    e.dataTransfer.setData("sourceColumnId", sourceColumnId);
  };
  //DND Over
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  //DND Drop
  const handleDrop = (e: React.DragEvent, targetColumnId: string) => {
    e.preventDefault();

    const taskId = e.dataTransfer.getData("taskId");
    const sourceColumnId = e.dataTransfer.getData("sourceColumnId");

    if (!taskId || !sourceColumnId || sourceColumnId === targetColumnId) return;

    setColumns((prevColumns) => {
      let taskToMove: Task | undefined;
      const updatedColumns = prevColumns.map((column) => {
        if (column.id === sourceColumnId) {
          taskToMove = column.tasks.find((task) => task.id === taskId);
          return { ...column, tasks: column.tasks.filter((task) => task.id !== taskId) };
        }
        return column;
      });

      if (taskToMove) {
        return updatedColumns.map((column) => {
          if (column.id === targetColumnId) {
            return { ...column, tasks: [...column.tasks, taskToMove!] };
          }
          return column;
        });
      }

      return prevColumns;
    });
  };

  return (
    <div className="w-full flex items-start overflow-x-auto space-x-6 p-4 ">
      {columns.map((column) => (
        <Column key={column.id} column={column}
          onAddTask={handleAddTask}
          onDragStart={handleDragStart}
          onDrop={handleDrop}
        />
      ))}
    </div>
  );
};

export default BoardView;


