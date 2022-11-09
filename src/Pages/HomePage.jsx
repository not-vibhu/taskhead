import Header from "../Components/Header";
import Modal from "../Components/Modal";
import TaskItem from "../Components/TaskItem";
import { useModal } from "../Contexts/ModalContext";

export default function HomePage() {

  const { showModal, setShowModal } = useModal();

  return (
    <div>
      {showModal && <Modal />}

      <button onClick={() => setShowModal(true)}>Add Task</button>
      <Header />
      <TaskItem />
    </div>
  )
}
