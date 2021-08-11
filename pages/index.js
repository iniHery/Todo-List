import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodos = [...todos];
    newTodos.push(inputValue);
    setTodos(newTodos);
    setInputValue("");
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    console.log(newTodos);
  };

  return (
    <div className="body">
      <div className="app">
        <h3 className="tittle">To-Do List</h3>
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <input
            placeholder="Add your text..."
            name="value"
            className="input"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            value={inputValue}
          />
          <button type="submit" className="button">
            <Image
              width="22px"
              height="22px"
              src="/icon/paper-plane.png"
              alt="add"
            />
          </button>
        </form>

        {todos.map((todo, index) => {
          return (
            <div className="todo-item" key={index + "_todo"}>
              <p className="label">{todo}</p>
              <button
                className="delete-button"
                onClick={() => deleteTodo(index)}
              >
                <Image
                  width="21px"
                  height="21px"
                  src="/icon/remove.png"
                  alt="delete"
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
