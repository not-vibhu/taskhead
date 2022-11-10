import { useTask } from "../Contexts/TaskContext";
import "./Styles/TaskItem.css";

export default function TaskItem({task}) {

    const { taskList, setTaskList } = useTask();

    const deleteTask = (taskId) => {

        const updatedTaskList = taskList.filter((task) => task.id !== taskId);
        setTaskList(updatedTaskList);
    }

    return (
        <div className="task-item-div">

            <div className="task-item-main-info">

                <h2 className="task-item-name">{task.title}</h2>
                <p className="task-item-description">{task.description}</p>

                <div className="task-item-footer">


                    <div className="task-item-sub-info">

                        <div className="task-item-float-div">
                            <p>Priority: Low</p>
                        </div>

                        <div className="task-item-float-div">
                            <p>Sub-tasks: 10</p>
                        </div>

                    </div>

                    <div className="task-item-action-div">

                        <div className="task-item-action delete-action" onClick={() => deleteTask(task.id)}>
                            <span className="material-icons">
                                delete
                            </span>
                            <p>Delete</p>
                        </div>

                        <div className="task-item-action edit-action">
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
