import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AcceptOrRejectProject from "../../Pages/AcceptOrRejectProject/AcceptOrRejectProject";
import CheckProjectReport from "../../Pages/CheckProjectReport/CheckProjectReport";
import CheckProposal from "../../Pages/CheckProposal/CheckProposal";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import SubmitFinalProposal from "../../Pages/SubmitFinalProposal/SubmitFinalProposal";
import SubmitProposal from "../../Pages/SubmitProposal/SubmitProposal";

import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/submit-proposal",
        element: <SubmitProposal></SubmitProposal>,
      },
      {
        path: "/check-proposal",
        element: <CheckProposal></CheckProposal>,
      },
      {
        path: "/check-project-report",
        element: <CheckProjectReport></CheckProjectReport>,
      },
      {
        path: "/accept-or-reject",
        element: <AcceptOrRejectProject></AcceptOrRejectProject>,
      },
      {
        path: "/submit-final-proposal",
        element: <SubmitFinalProposal></SubmitFinalProposal>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
  },
]);
export default router;
