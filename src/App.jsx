import { useEffect, useState } from "react";
import TodoItem from "./components";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const createTodo = () => {
    if (inputValue) {
      const newTodos = [...todos, { text: inputValue, complete: false }];
      setTodos(newTodos);
      setInputValue("");
    }
  };

	useEffect(() => {
		let localTodos = JSON.parse(localStorage.getItem("todos"))
		if (localTodos) {
      setTodos(localTodos);
    }
	}, [])

	useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const completeTodo = (id) => {
		let arr = [...todos]
		arr[id].complete = !arr[id].complete
		setTodos(arr)
	};

  const deleteTodo = (id) => {
		let arr = [...todos]
		arr.splice(id, 1)
		setTodos(arr)
	};

  return (
    <div className="App">
      <div className="input-btn">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={createTodo}>Add</button>
      </div>
      <div className="container">
        {todos.map((el, id) => {
          return (
            <TodoItem
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
              todo={el}
              key={id}
							id={id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
