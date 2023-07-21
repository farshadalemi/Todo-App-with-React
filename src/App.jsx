import "./styles.css";

export default function App() {
  return (
    <>
      <form className="new-item-form" action="">
        <h1>TODO LIST</h1>
        <div className="form-row">
          <label htmlFor="item">✍️</label>
          <input type="text" id="item" placeholder="Type here..." />
        </div>
        <button className="btn">Add</button>
      </form>
      <h2 className="header">My list</h2>
      <ul className="list">
        <li>
          <label htmlFor="">
            <input type="checkbox" />
            Item 1<button className="btn done-btn">Done</button>
          </label>
        </li>

        <li>
          <label htmlFor="">
            <input type="checkbox" />
            Item 2<button className="btn done-btn">Done</button>
          </label>
        </li>
      </ul>
    </>
  );
}
