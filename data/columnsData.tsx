export interface Task {
    id: string;
    title: string;
    description: string;
    assignee: string;
    priority: "Low" | "Medium" | "High";
    dueDate: string;
    status: "Not Started" | "In Progress" | "Completed";
  }

interface Column {
  id: string;
  title: string;
  color: string;
  tasks: Task[];
}
export const columnsData: Column[] = [
  {
    id: "todo",
    title: "To - Do List",
    color: "text-yellow-400",
    tasks: [
      {
        id: "1",
        title: "Construction Tender 1",
        description: "Review contract terms and update requirements.",
        assignee: "John Doe",
        priority: "High",
        dueDate: "22 Dec 24",
        status: "Not Started",
      },
    ],
  },
  {
    id: "progress",
    title: "In Progress",
    color: "text-blue-400",
    tasks: [
      {
        id: "2",
        title: "Construction Tender 2",
        description: "Coordinate with vendors for pricing.",
        assignee: "Jane Smith",
        priority: "Medium",
        dueDate: "24 Dec 24",
        status: "In Progress",
      },
    ],
  },
  {
    id: "notStarted",
    title: "Not Started",
    color: "text-orange-400",
    tasks: [
      {
        id: "3",
        title: "Construction Tender 3",
        description: "Finalize materials procurement plan.",
        assignee: "Alice Johnson",
        priority: "Low",
        dueDate: "25 Dec 24",
        status: "Not Started",
      },
    ],
  },
  {
    id: "done",
    title: "Done",
    color: "text-green-400", 
    tasks: [
      {
        id: "4",
        title: "Construction Tender 4",
        description: "Completed review of materials procurement.",
        assignee: "Bob Williams",
        priority: "Low",
        dueDate: "20 Dec 24",
        status: "Completed",
      },
    ],
  },
];

// export const columnsData: Column[] = [
//   {
//     id: "todo",
//     title: "To - Do List",
//     color: "text-yellow-400",
//     tasks: [
//       {
//         id: "1",
//         title: "Construction Tender 1",
//         description: "Review contract terms and update requirements.",
//         assignee: "John Doe",
//         priority: "High",
//         dueDate: "22 Dec 24",
//         status: "Not Started",
//       },
//     ],
//   },
//   {
//     id: "progress",
//     title: "In Progress",
//     color: "text-blue-400",
//     tasks: [
//       {
//         id: "2",
//         title: "Construction Tender 2",
//         description: "Coordinate with vendors for pricing.",
//         assignee: "Jane Smith",
//         priority: "Medium",
//         dueDate: "24 Dec 24",
//         status: "In Progress",
//       },
//     ],
//   },
//   {
//     id: "notStarted",
//     title: "Not Started",
//     color: "text-orange-400",
//     tasks: [
//       {
//         id: "3",
//         title: "Construction Tender 3",
//         description: "Finalize materials procurement plan.",
//         assignee: "Alice Johnson",
//         priority: "Low",
//         dueDate: "25 Dec 24",
//         status: "Not Started",
//       },
//     ],
//   },
// ];
