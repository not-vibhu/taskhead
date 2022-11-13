import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import PomodoroPage from "../Pages/PomodoroPage";

export default function RoutePaths () {

    return(
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pomodoro" element={<PomodoroPage />} />
      </Routes>
    )
}