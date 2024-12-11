import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SelectRoom from "./pages/SelectRoom";
import RoomDetails from "./pages/RoomDetails";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/select-room" element={<SelectRoom />} />
                <Route path="/room-details" element={<RoomDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
