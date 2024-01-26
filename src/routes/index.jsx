import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes.jsx";
import { AppAuth } from "./auth.routes.jsx";

export const Routes = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter> 
  );
};
