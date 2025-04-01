import React, { use, useState } from "react";
// import { BiCheckDouble } from "react-icons/bi";
// import { BiCheckCircle } from "react-icons/bi";
// import { BiEdit } from "react-icons/bi";
// import { BiRefresh } from "react-icons/bi";
import {
  BiCheckDouble,
  BiCheckCircle,
  BiEdit,
  BiRefresh,
  BiTrash,
  BiReset,
} from "react-icons/bi";
import "./Todolist.css";
function Todolist() {
  const [todos, setTodos] = useState([]);
  const [inputvalue, setInputvalue] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const addTodo = () => {
    if (inputvalue.trim() !== "") {
      if (editIndex !== -1) {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = {
          task: inputvalue,
          completed: updatedTodos[editIndex].completed,
        };
        setTodos(updatedTodos);
        setInputvalue("");
        setEditIndex(-1);
      } else {
        setTodos([...todos, { task: inputvalue, completed: false }]);
        setInputvalue("");
      }
    }
  };
  const startEdit = (index) => {
    setInputvalue(todos[index].task);
    setEditIndex(index);
  };

  const cancelEdit = () => {
    setInputvalue("");
    setEditIndex(-1);
  };
  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };
  const toggleCompleted = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = {
      ...updatedTodos[index],
      completed: !updatedTodos[index].completed,
    };
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <div className="input-section">
        <input
          type="text"
          value={inputvalue}
          onChange={(e) => setInputvalue(e.target.value)}
          placeholder="Enter a new Task"
          className="input-field"
        />
        {editIndex !== -1 ? (
          <>
            <button onClick={addTodo} className="update-btn">
              <BiCheckDouble />
            </button>
            <button onClick={cancelEdit} className="cancel-btn">
              <BiRefresh />
            </button>
          </>
        ) : (
          <button onClick={addTodo} className="add-btn-btn">
            Add
          </button>
        )}
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          // <li key={index} className={todo.completed ? "completed " : ""}>
          <li key={index} className={todo.completed ? "completed" : ""}>
            {todo.task}
            <div className="btn-group">
              {/* <button onClick={startEdit} className="btn-edit"> */}
              <button onClick={() => startEdit(index)} className="btn-edit">
                <BiEdit />
              </button>
              {/* <button onClick={removeTodo} className="btn-remove"> */}
              <button onClick={() => removeTodo(index)} className="btn-remove">
                <BiTrash />
              </button>
              <button
                className="btn-done"
                onClick={() => toggleCompleted(index)}
              >
                {todo.completed ? <BiReset /> : <BiCheckCircle />}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
