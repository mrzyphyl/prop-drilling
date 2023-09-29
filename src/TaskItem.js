import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "./store";
import "./styles.css";
const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="todo__item__container">
      <label>
        <input
          checked={task?.done}
          onChange={() => dispatch(toggleTask(task?.id))}
          type="checkbox"
          className="todo__item__checkbox"
        />
        {task?.text}
      </label>
      <button
        onClick={() => dispatch(deleteTask(task?.id))}
        type="button"
        className="todo__item__btn--delete"
      >
        &#215;
      </button>
    </div>
  );
};

export default TaskItem;
