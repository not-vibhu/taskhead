import { useState, createContext, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskContext = createContext();

const useTask = () => useContext(TaskContext);

const TaskProvider = ({ children }) => {
  const sample = {
    id: uuidv4(),
    title: "",
    priority: "Low",
    description: "",
    focusDuration: "10",
    breakDuration: "5",
    subTasks: [],
  };

  const [task, setTask] = useState(sample);

  const [taskList, setTaskList] = useState([]);

  const [selectedTask, setSelectedTask] = useState(sample);

  return (
    <TaskContext.Provider
      value={{
        task,
        setTask,
        taskList,
        setTaskList,
        selectedTask,
        setSelectedTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export { useTask, TaskProvider };
