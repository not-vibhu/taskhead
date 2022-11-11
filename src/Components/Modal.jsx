import "./Styles/Modal.css";
import { useModal } from "../Contexts/ModalContext";
import { useTask } from "../Contexts/TaskContext";
import { v4 as uuidv4 } from "uuid";

export default function Modal() {

    const { setShowModal } = useModal();

    const sample = {
        id: uuidv4(),
        title: "",
        priority: "Low",
        description: "",
        subTasks: []
    }

    const { task, setTask, taskList, setTaskList } = useTask();

    const isTaskEdited = taskList.find((taskInList) => taskInList.id === task.id);

    const addTask = () => {

        if (isTaskEdited) {

            let updatedTaskList = taskList.map((taskInList) => {
                if (taskInList.id === isTaskEdited.id) {
                    return task;
                }
                else {
                    return taskInList;
                }
            });

            setTaskList(updatedTaskList);

        }

        else {
            setTaskList([...taskList, { ...task, id: uuidv4() }])
        }

        setTask(sample);
        setShowModal(false);

    }

    return (
        <div className="modal-bg">

            <div className="modal-centered">

                <div className="modal">

                    <div className="modal-header">
                        {isTaskEdited ? <p>Edit this task</p> : <p>Add a Task</p>}
                    </div>

                    <div className="task-input-container">

                        <p className="task-input-title">Title:</p>

                        <input type="text" placeholder="Enter title" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} />

                    </div>

                    <div className="priority-input-container">

                        <p className="task-input-title">Priority:</p>

                        <select value={task.priority} onChange={(e) => setTask({ ...task, priority: e.target.value })} >
                            <option value="Low"> Low
                            </option>
                            <option value="Medium"> Medium
                            </option>
                            <option value="High"> High
                            </option>
                        </select>

                    </div>

                    <div className="task-input-container">

                        <p className="task-input-title">Description:</p>

                        <textarea className="task-desc" name="task-description" id="" cols="5" rows="3" placeholder="Enter Description" value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })}></textarea>

                    </div>

                    <div className="task-input-container">

                        <p className="task-input-title">Sub-tasks:</p>

                        <div className="subtask-input">
                            <input type="text" placeholder="Enter title" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} />

                            <button className="subtask-button">
                                <span className="material-icons-outlined">
                                    add_task
                                </span>
                            </button>

                        </div>

                        <div>
                            <li>Hello</li>
                        </div>

                    </div>

                    <div className="modal-actions">

                        {isTaskEdited ? <button className="add-button" onClick={() => addTask()}>Update Task</button> : <button className="add-button" onClick={() => addTask()}>Add Task</button>}

                        <button className="cancel-button" onClick={() => setShowModal(false)}>Cancel</button>

                    </div>

                </div>

            </div>

        </div>
    );
};
