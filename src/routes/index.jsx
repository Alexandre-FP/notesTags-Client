import { BrowserRouter } from "react-router-dom";
import { UseAuth } from "../hooks/auth.jsx";
import { AppRoutes } from "./app.routes.jsx";
import { AppAuth } from "./auth.routes.jsx";

export const Routes = () => {
  const { user } = UseAuth();

  return (
    <BrowserRouter>
      {user ? <AppRoutes /> : <AppAuth />}
    </BrowserRouter>  
  );
};
