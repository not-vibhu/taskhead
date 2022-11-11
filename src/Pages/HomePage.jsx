import Header from "../Components/Header";
import Modal from "../Components/Modal";
import TaskItem from "../Components/TaskItem";
import { useModal } from "../Contexts/ModalContext";
import { useTask } from "../Contexts/TaskContext";


export default function HomePage() {

  const { showModal, setShowModal } = useModal();

  const { taskList } = useTask();

  return (
    <div>
      {showModal && <Modal />}

      <Header />

      <div className="homepage-sub-div">
        <button onClick={() => setShowModal(true)} className="add-task-button">Add Task</button>
      </div>

      {taskList.length !== 0 ? taskList?.map((task) => <TaskItem task={task} key={task.id} />) : <div className="flex-column-center empty-tasklist-message-div">
        <h1>No tasks yet</h1>
        <p>Tasks you add will appear here</p>
      </div>}
    </div>
  )
}
