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
    <div className="px-5 w-full bg-teal-100 flex flex-col">
      <div className="" >
        {
          todos.map( (todo, index) => (
            <TodoItem item={todo} />
          ))
        }
      </div>
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


  return (
    <div className="flex flex-row gap-2" onClick={handleToggle}>
      <p className={`${checked? "line-through" : ""}`}>{item.title}</p>
      <p className="" >{item.description}</p>
      <p className="" >{item.priority}</p>
      <p className="" >{item.dueDate}</p>
    </div>
  );
}