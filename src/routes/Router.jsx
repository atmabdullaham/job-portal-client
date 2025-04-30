import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <div>error</div>,
    children:[
      {
        path: "/",
        element:<Home></Home>
      },
      {
       path:"/register",
       element:<Register></Register>
      }
    ]
  },
]);
export default router;
  