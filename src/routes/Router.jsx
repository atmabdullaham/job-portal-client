import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import Jobdetails from "../pages/Jobdetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <div>error</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/jobs/:id",
        element: <Jobdetails></Jobdetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
    ],
  },
]);
export default router;
