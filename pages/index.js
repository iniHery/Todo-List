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
      <h3 className="tittle">To-Do List</h3>
      <div className="app">
        <div>
          <div className="flex-item">
            <div className="icon-left">
              <Image
                width="16px"
                height="16px"
                src="/icon/left-arrow.png"
                alt="left"
              />
            </div>
            <div className="day">Monday</div>
            <div className="icon-rigth">
              <Image
                width="16px"
                height="16px"
                src="/icon/right-arrow.png"
                alt="left"
              />
            </div>
          </div>
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <input
              className="add"
              placeholder="Add your text..."
              name="value"
              className="input"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              value={inputValue}
            />
            <button type="submit" className="button">
              <Image width="18px" height="18px" src="/icon/add.png" alt="add" />
            </button>
          </form>
        </div>

        {todos.map((todo, index) => {
          return (
            <div className="todo-item">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "20px auto 20px",
                }}
                key={index + "_todo"}
              >
                <div style={{ width: 18, height: 18, paddingTop: "6px" }}>
                  <Image
                    width="20px"
                    height="20px"
                    src="/icon/checked.png"
                    alt="delete"
                  />
                </div>

                <div className="label" style={{ padding: "0px 12px" }}>
                  {todo}
                </div>
                <div>
                  <button
                    // style={{ width: 30, height: 30 }}
                    // type="button"
                    className="delete-button"
                    onClick={() => deleteTodo(index)}
                  >
                    <Image
                      width="20px"
                      height="20px"
                      src="/icon/rubbish.png"
                      alt="delete"
                    />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>Clear All</div>
    </div>
  );
}
