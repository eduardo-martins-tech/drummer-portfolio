import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Performances from "./pages/Performances/Performances";
import Audios from "./pages/Audios/Audios";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/performances" element={<Performances />} />
            <Route path="/audios" element={<Audios />} />
        </Routes>
    );
}

export default AppRoutes;