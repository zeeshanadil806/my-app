"use client";
import { useState } from "react";
import React from "react";
import { Button } from "./ui/button";

type ArrayItem = {
  id: number;
  title: string;
  task: string;
};

export default function TodoList() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoTask, setTodoTask] = useState("");
  const [itemsList, setItemsList] = useState<ArrayItem[]>([]);

  function handleAddTodo() {
    if (todoTask.trim() !== "" && todoTitle.trim() !== "") {
      const obj = { id: itemsList.length + 1, title: todoTitle, task: todoTask };
      setItemsList([...itemsList, obj]);
      setTodoTask("");
      setTodoTitle("");
    }
  }

  const handleRemoveItem = (idToRemove: number) => {
    const updatedItems = itemsList.filter((item) => item.id !== idToRemove);
    setItemsList(updatedItems);
  };
  const handleMarkAsDone = (taskToMark: number) => {
    const updatedItems = itemsList.filter((item) => item.id === taskToMark);
    // setItemsList(updatedItems);
    return(
      <p>Done</p>
    )
  };

  return (
    <div>
      <div className="flex flex-col w-max border border-gray-900 rounded-lg px-6 py-12 space-y-4 m-auto mt-20">
        <h1 className="text-3xl text-center font-semibold">Add Todos</h1>
        <input
          type="text"
          placeholder="Enter Title"
          className="border border-gray-700 rounded-md p-2"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <textarea
          cols={20}
          rows={4}
          placeholder="Enter Task"
          className="border border-gray-700 rounded-md p-2"
          value={todoTask}
          onChange={(e) => setTodoTask(e.target.value)}
        ></textarea>
        <Button onClick={handleAddTodo}>Add Item</Button>
      </div>
      <h1 className="text-4xl font-semibold text-center py-6 border border-gray-800 border-x-0 border-t-0 mx-[38vw]">Todo Tasks Below</h1>
      <div>
        <table className="m-auto">
          <thead>
            <tr className="border border-x-0 border-t-0 border-gray-700">
              <th className="w-[4vw] text-left">S. No</th>
              <th className="w-[14vw] text-left">Task Title</th>
              <th className="w-[20vw] text-left">Task Description</th>
              <th className="w-[4vw] text-left">Update</th>
            </tr>
          </thead>
          <tbody>
            {itemsList.map((object) => (
              <tr key={object.id} className="border border-x-0 border-t-0 border-gray-700">
                <td className="w-[4vw] text-left">{object.id}</td>
                <td className="w-[14vw] text-left">{object.title}</td>
                <td className="w-[20vw] text-left">{object.task}</td>
                <td className="w-[4vw] text-left"><Button onClick={() => handleRemoveItem(object.id)}>Delete</Button></td>
                <td className="w-[4vw] text-left"><Button onClick={() => handleMarkAsDone(object.id)}>Mark as Done</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
