import { useModal } from "../Contexts/ModalContext";
import { useTask } from "../Contexts/TaskContext";
import "./Styles/TaskItem.css";

export default function TaskItem({ task }) {

    const { taskList, setTaskList, setTask } = useTask();

    const { setShowModal } = useModal();

    const deleteTaskHandler = (taskId) => {

        const updatedTaskList = taskList.filter((task) => task.id !== taskId);
        setTaskList(updatedTaskList);
    }

    const editTaskHandler = (taskId) => {
        const taskToBeEdited = taskList.find((task) => task.id === taskId);
        setTask(taskToBeEdited);
        setShowModal(true);

    }

    return (
        <div className="task-item-div">

            <div className="task-item-main-info">

                <h2 className="task-item-name">{task.title}</h2>
                <p className="task-item-description">{task.description}</p>

                <div className="task-item-footer">


                    <div className="task-item-sub-info">

                        <div className="task-item-float-div">
                            <p>Priority: {task.priority}</p>
                        </div>

                        <div className="task-item-float-div">
                            <p>Sub-tasks: 10</p>
                        </div>

                    </div>

                    <div className="task-item-action-div">

                        <div className="task-item-action delete-action" onClick={() => deleteTaskHandler(task.id)}>
                            <span className="material-icons">
                                delete
                            </span>
                            <p>Delete</p>
                        </div>

                        <div className="task-item-action edit-action" onClick={() => editTaskHandler(task.id)}>
                            <span className="material-icons">
                                edit
                            </span>
                            <p>Edit</p>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}
