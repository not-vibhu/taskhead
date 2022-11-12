import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";

export default function RoutePaths () {

    return(
        <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    )
}