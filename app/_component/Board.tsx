"use client";

import React, { useState } from "react";
import Column from "./Column";
import { columnsData } from "../../data/columnsData";

const BoardView: React.FC = () => {
  const [columns, setColumns] = useState(columnsData);

  return (
    <div className="w-full flex items-start overflow-x-auto space-x-6 p-4 ">
      {columns.map((column) => (
        <Column key={column.id} column={column} />
      ))}
    </div>
  );
};

export default BoardView;
