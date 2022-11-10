import "./Styles/TaskItem.css";

export default function TaskItem({task}) {

    // let task = {
    //     taskName: "I want to do the task for myself and my team anda I want to do the task for myself and my team andaa",
    //     subTask: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    //     description: "I want to do this task as a part of a recruitment process I want to do this task as a part of a recruitment process I want to do this task as a part of a recruitment process recruitment processprocess",
    //     priority: "Medium"

    // }

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

                        <div className="task-item-action delete-action">
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
