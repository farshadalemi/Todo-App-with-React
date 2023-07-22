import { useState } from "react";
import "./styles.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

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
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label htmlFor="">
                <input type="checkbox" checked={todo.completed} />
                {todo.title}
                <button className="btn done-btn">Done</button>
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
}
