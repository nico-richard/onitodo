import "./App.sass";
import { HeaderButton } from "./components/button";
import { TodoItem, TodoItemProps } from "./components/todoItem";

function App() {
  const todoItems: TodoItemProps[] = [
    { title: "Todo 1", description: "lorem lorem lorem lorem lorem lorem " },
    { title: "Todo 2", description: "lorem lorem lorem lorem lorem lorem " },
    { title: "Todo 3", description: "lorem lorem lorem lorem lorem lorem " },
    { title: "Todo 4", description: "lorem lorem lorem lorem lorem lorem " },
    { title: "Todo 5", description: "lorem lorem lorem lorem lorem lorem " },
    { title: "Todo 6", description: "lorem lorem lorem lorem lorem lorem " },
    { title: "Todo 7", description: "lorem lorem lorem lorem lorem lorem " },
    { title: "Todo 8", description: "lorem lorem lorem lorem lorem lorem " },
    { title: "Todo 9", description: "lorem lorem lorem lorem lorem lorem " },
  ];
  const todoDoneItems: TodoItemProps[] = [];
  const todoDoneItemsList = todoDoneItems.map((item: TodoItemProps) => {
    return <TodoItem title={item.title} />;
  });
  const todoItemsList = todoItems.map((item: TodoItemProps, index: number) => {
    return (
      <TodoItem key={index} title={item.title} description={item.description} />
    );
  });
  return (
    <div className="app">
      <img className="logo" src="/logo.png" alt="logo" />
      <div className="title">Todo List</div>
      <div className="todo-options">
        <HeaderButton text="Add todo" />
        <HeaderButton text="Search todo" />
        <HeaderButton text="All Done" />
        <HeaderButton text="All Ongoing" />
      </div>
      <div className="todo-list">
        {todoItems.length !== 0 ? todoItemsList : <p>No Todo</p>}
      </div>
      <div className="todo-done-list">
        {todoDoneItems.length !== 0 ? todoDoneItemsList : <p>No Todo done</p>}
      </div>
    </div>
  );
}

export default App;
