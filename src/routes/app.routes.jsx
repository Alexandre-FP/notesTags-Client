import { Routes, Route, Navigate } from "react-router-dom";

import { Profile } from "../pages/Profile/index.jsx";
import { Details } from "../pages/Details/index.jsx";
import { Home } from "../pages/Home/index.jsx";
import { New } from "../pages/New/index.jsx";

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/new" element={<New />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/details/:id" element={<Details />}/>
            
            <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
    );
} 