import "./styles.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./store";

const TaskForm = (props) => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTask(text));

    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo__form">
      <input
        type="text"
        placeholder="Add Tasks"
        className="todo__form__input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default TaskForm;
