import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import Jobdetails from "../pages/Jobdetails";
import PrivateRouter from "./PrivateRouter";
import JobApply from "../pages/JobApply";
import MyApplications from "../pages/MyApplications";
import AddJob from "../pages/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications";

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
        path: "/myPostedJobs",
        element: (
          <PrivateRouter>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRouter>
        ),
      },
      {
        path: "/viewApplications/:job_id",
        element: (
          <PrivateRouter>
            <ViewApplications></ViewApplications>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`),
      },
      {
        path: "/jobApply/:id",
        element: (
          <PrivateRouter>
            <JobApply></JobApply>
          </PrivateRouter>
        ),
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRouter>
            <Jobdetails></Jobdetails>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/myApplications",
        element: (
          <PrivateRouter>
            <MyApplications></MyApplications>
          </PrivateRouter>
        ),
      },
      {
        path: "/addJob",
        element: <AddJob></AddJob>,
      },
    ],
  },
]);
export default router;
