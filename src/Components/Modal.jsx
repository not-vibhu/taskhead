import "./Styles/Modal.css";

export default function Modal() {

    return (
        <div className="modal-bg">

            <div className="modal-centered">

                <div className="modal">

                    <div className="modal-header">
                        <p>Add a Task</p>
                    </div>

                    <div className="task-input-container">

                        <p className="task-input-title">Title:</p>

                        <input type="text" placeholder="Enter title" />

                    </div>

                    <div className="priority-input-container">

                        <p className="task-input-title">Priority:</p>

                        <select>
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

                        <textarea className="task-desc" name="task-description" id="" cols="5" rows="3" placeholder="Enter Description"></textarea>

                    </div>



                    <div className="modal-actions">

                        <button className="add-button">Add Task</button>

                        <button className="cancel-button">Cancel</button>

                    </div>

                </div>

            </div>

        </div>
    );
};
