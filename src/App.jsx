import { useState } from "react";
import TodoItem from "./components";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const createTodo = () => {
    setTodos([...todos, { text: inputValue, complete: false }]);
    setInputValue("");
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={createTodo}>Add</button>
      </div>
      <ul>
        {todos.map((el, id) => {
          return <TodoItem todo={el} key={id} />;
        })}
      </ul>
    </div>
  );
}

export default App;
