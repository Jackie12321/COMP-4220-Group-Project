import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

//NO HEADER PAGES BELOW IMPORT

export default function App() {
    return (
        <Routes>
            {/* Routes WITH header */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />

            </Route>

            {/* Routes WITHOUT header */}
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<div className="p-6">Not found</div>} />
        </Routes>
    );
}
