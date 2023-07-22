import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEM");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEM".JSON.stringfy(todos));
  }, [todos]);

  function handelSubmit(e) {
    e.preventDefault();

    setTodos((currentTodos) => {
      return;
      [
        ...currentTodos,
        { id: crypto.randomUUID, title: newItem, completed: false },
      ];
    });
    setNewItem("");
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <form onSubmit={handelSubmit} className="new-item-form" action="">
        <h1>TODO LIST</h1>
        <div className="form-row">
          <label htmlFor="item">✍️</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
            placeholder="Type here..."
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h2 className="header">My list</h2>
      <ul className="list">
        {todos.length === 0 && "Empty List"}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label htmlFor="">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
                <button
                  className="btn done-btn"
                  onClick={() => deleteTodo(todo.id)}
                >
                  X
                </button>
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
}
