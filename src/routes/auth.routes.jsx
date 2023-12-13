import { Routes, Route } from "react-router-dom";

import { SainIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export const AppAuth = () => {
    return(
        <Routes>
            <Route path="/" element={<SainIn />}/>
            <Route path="/register" element={<SignUp />}/>
        </Routes>
    );
} 