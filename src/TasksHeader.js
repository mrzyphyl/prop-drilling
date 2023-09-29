import { useSelector } from "react-redux";
import "./styles.css";
const TasksHeader = () => {
  const tasks = useSelector((state) => state.todo);

  const undoneTasks = tasks?.filter((t) => t.done === false);

  return (
    <header>
      <h1 className="todo__title">React Todo List</h1>
      <p className="todo__remaining">
        Created Tasks : <strong>{undoneTasks?.length}</strong>
      </p>
    </header>
  );
};

export default TasksHeader;
