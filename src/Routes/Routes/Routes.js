import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AboutNav from "../../Pages/AboutNav/AboutNav";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import SubmitProposal from "../../Pages/SubmitProposal/SubmitProposal";
import ViewProposal from "../../Pages/ViewProposal/ViewProposal";
import ViewReport from "../../Pages/ViewReport/ViewReport";
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
        path: "/view-proposal",
        element: <ViewProposal></ViewProposal>,
      },
      {
        path: "/view-report",
        element: <ViewReport></ViewReport>,
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
