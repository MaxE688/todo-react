
import './App.css';
import Navigation from "./components/navigation";
import { TodoList } from "./components/todo";

function App() {

  //if local storage exists then use that data

  const pages: string[] =  [ "All", "Today", "Week" ];
  const todos = [
    {
      page: "",
      title: "Brush Teeth",
      priority: "high",
      dueDate: "",
      description: "ahhhhh",
      isChecked: true
    },
    {
      page: "",
      title: "sleep",
      priority: "high",
      dueDate: "",
      description: "ahhhhh",
      isChecked: true
    },
    {
      page: "",
      title: "Drink",
      priority: "high",
      dueDate: "",
      description: "ahhhhh",
      isChecked: true
    },
    {
      page: "",
      title: "Eat",
      priority: "high",
      dueDate: "",
      description: "ahhhhh",
      isChecked: true
    },
  ]

  const gotoPage = (page: string) => {
    console.log(page);
  }

  return (
    <div className="">
      <header className="py-5 px-10 bg-emerald-300 flex flex-row items-center">
        <p className="px-3 text-2xl">
          Todo
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>:
      </header>
      <div className=" flex flex-row" >
        <Navigation navItems={pages} gotoPage={gotoPage}/>
        <TodoList todos={todos} />
      </div>

    </div>
  );
}

export default App;
