import React, { useState } from "react";

export type Todo = {
  page: string;
  title: string;
  priority: string;
  dueDate: string;
  description: string;
  isChecked: boolean;
}

interface Props {
  todos: Todo[];
}

export function TodoList({ todos }: Props){

  return (
    <div className=" w-full bg-teal-100 flex flex-col">
      <table className="px-5" >
        <thead >
          <tr className="bg-teal-300">
            <th>Status</th>
            <th>Task</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Due by</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {
          todos.map( (todo, index) => (
            <TodoItem key={index} item={todo} />
            ))
        }
        </tbody>
      </table>
    </div>
  );
}



interface Item {
  item: Todo;
}

export function TodoItem({ item }: Item){

  const [checked, setChecked] = useState(item.isChecked)
  
  const handleToggle = () => {
    item.isChecked = !checked;
    setChecked(item.isChecked);
  }

  const handleDelete = (item: Todo) => {
    console.log("Delete:", item.title);    
  }
  const handleEdit = (item: Todo) => {
    console.log("Edit:", item.title);
  }


  return (
    // <div className="flex flex-row gap-2" onClick={handleToggle}>
    <tr className="hover:bg-teal-200">
      <td onClick={handleToggle} className="text-center">
        <input type="checkbox" checked={checked}></input>
      </td>
      <td onClick={handleToggle} className="text-center">
        <p className={`${checked? "line-through" : ""}`}>{item.title}</p>
      </td>
      <td onClick={handleToggle} className="text-center">
        <p className={`${checked? "line-through" : ""}`} >{item.description}</p>
      </td>
      <td onClick={handleToggle} className="text-center">
        <p className={`${checked? "line-through" : ""}`} >{item.priority}</p>
      </td>
      <td onClick={handleToggle} className="text-center">
        <p className={`${checked? "line-through" : ""}`} >{item.dueDate}</p>
      </td>
      <td className="text-center">
        <button 
          onClick={() => handleEdit(item)}
          className="m-1 bg-emerald-400 hover:bg-emerald-300 rounded-lg p-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
          </svg>
        </button>
        <button 
          onClick={() => handleDelete(item)}
          className="m-1 bg-emerald-400 hover:bg-emerald-300 rounded-lg p-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
        </button>
      </td>
    </tr>
    // </div>
  );
}