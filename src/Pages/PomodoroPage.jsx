import "./Styles/PomodoroPage.css";
import Header from "../Components/Header";
import PomodoroTimer from "../Components/PomodoroTimer";

export default function PomodoroPage() {
  return (
    <div>
        <Header />
        <PomodoroTimer />

        <div className="task-display-div">

            <h1>Task</h1>

        </div>
    </div>
  )
}
