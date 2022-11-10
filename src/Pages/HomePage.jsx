import Header from "../Components/Header";
import Modal from "../Components/Modal";
import TaskItem from "../Components/TaskItem";
import { useModal } from "../Contexts/ModalContext";
import { useTask } from "../Contexts/TaskContext";


export default function HomePage() {

  const { showModal, setShowModal } = useModal();

  const {taskList} = useTask();

  return (
    <div>
      {showModal && <Modal />}

      <Header />
      <button onClick={() => setShowModal(true)}>Add Task</button>

      {taskList?.map((task) => <TaskItem task={task} key={task.id} />)}
    </div>
  )
}
