import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [selectedDayIndex, setSelectedDayIndex] = useState(1);

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodos = [...todos];
    newTodos.push({ task: inputValue, isDone: false });
    setTodos(newTodos);
    setInputValue("");
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    console.log(newTodos);
  };

  const onNextDay = (currentIndex) => {
    currentIndex = currentIndex + 1;
    if (currentIndex === 7) {
      currentIndex = 0;
    }
    setSelectedDayIndex(currentIndex);
  };

  const onPrevDay = (currentIndex) => {
    currentIndex = currentIndex - 1;
    if (currentIndex === 0) {
      currentIndex = 6;
    }
    setSelectedDayIndex(currentIndex);
  };

  const onToogleCompletion = (index) => {
    const newTodos = [...todos];
    const selectedTodo = { ...newTodos[index] };
    newTodos[index] = { task: selectedTodo.task, isDone: !selectedTodo.isDone };

    setTodos(newTodos);
  };

  const onClearTodos = () => {
    setTodos([]);
  };

  return (
    <div>
      <h3 className="tittle">ToDoList</h3>
      <div className="app">
        <div>
          <div className="flex-item">
            <button
              className="icon-left"
              onClick={() => onPrevDay(selectedDayIndex)}
            >
              <Image
                width="20px"
                height="20px"
                src="/icon/left-arrow.png"
                alt="delete"
              />
            </button>
            <div className="day">{days[selectedDayIndex]}</div>
            <button
              className="icon-right"
              onClick={() => onNextDay(selectedDayIndex)}
            >
              <Image
                className="icon"
                width="20px"
                height="20px"
                src="/icon/right-arrow.png"
                alt="right"
              />
            </button>
          </div>
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <input
              className="input"
              placeholder="Add your text..."
              name="value"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              value={inputValue}
            />
            <button
              type="submit"
              className="button"
              style={{ verticalAlign: "middle" }}
            >
              <span>submit</span>
            </button>
          </form>
        </div>

        {todos.map((todo, index) => {
          return (
            <div key={index + "_todo"} className="todo-item">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "20px auto 20px",
                  alignItems: "center",
                }}
              >
                <div
                  onClick={() => onToogleCompletion(index)}
                  className="checked"
                >
                  <Image
                    width="24px"
                    height="24px"
                    src="/icon/box.png"
                    alt="checklist"
                  />
                </div>

                <div
                  className="label"
                  style={{
                    padding: "0px 12px",
                    textDecoration: todo.isDone ? "line-through" : "none",
                  }}
                >
                  {todo.task}
                </div>

                <div>
                  <button
                    className="delete-button"
                    onClick={() => deleteTodo(index)}
                  >
                    <Image
                      width="24px"
                      height="24px"
                      src="/icon/remove.png"
                      alt="delete"
                    />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={() => onClearTodos()} className="button-clear">
            clear all
          </button>
        </div>
      </div>
    </div>
  );
}
