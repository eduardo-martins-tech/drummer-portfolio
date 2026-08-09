import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Performances from "./pages/Performances/Performances";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/performances" element={<Performances />} />
        </Routes>
    );
}

export default AppRoutes;