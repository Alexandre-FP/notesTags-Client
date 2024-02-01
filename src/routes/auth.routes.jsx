import { Routes, Route, Navigate } from "react-router-dom";

import { SainIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export const AppAuth = () => {
    const session = localStorage.getItem("session");

    return(
        <Routes>
            <Route path="/" element={<SainIn />}/>
            <Route path="/register" element={<SignUp />}/>

           { !session && <Route path="*" element={<Navigate to="/"/>} /> }
        </Routes>
    )
} 