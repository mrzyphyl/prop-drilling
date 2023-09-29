import "./styles.css";
import TaskForm from "./TaskForm";
import TasksHeader from "./TasksHeader";
import TasksList from "./TasksList";

export default function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <TasksHeader />
        <TasksList />
        <TaskForm />
      </div>
    </div>
  );
}
