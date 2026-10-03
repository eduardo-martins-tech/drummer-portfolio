import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Bio from "./pages/Bio/Bio";
import Performances from "./pages/Performances/Performances";
import Audios from "./pages/Audios/Audios";
import Galeria from "./pages/Galeria/Galeria";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/performances" element={<Performances />} />
            <Route path="/audios" element={<Audios />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/bio" element={<Bio />}/>
        </Routes>
    );
}

export default AppRoutes;