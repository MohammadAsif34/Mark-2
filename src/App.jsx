import {
  BrowserRouter,
  createHashRouter,
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Home from "./page/home/Home";
import SigmaWebDev from "./page/sigma-web-dev/SigmaWebDev";
import Error404 from "./page/error404/Error404";
import SWD110 from "./component/sigma-web-dev/SWD110";
import SWD111 from "./component/sigma-web-dev/SWD111";
import SWD112 from "./component/sigma-web-dev/SWD112";
// import SWD113 from "./component/sigma-web-dev/SWD113";
// import SWD114 from "./component/sigma-web-dev/SWD114";
import SWD115 from "./component/sigma-web-dev/SWD115";
import Project from "./page/projects/Project";
// import SWD116 from "./component/sigma-web-dev/SWD116";
// import SWD117 from "./component/sigma-web-dev/SWD117";
// import SWD118 from "./component/sigma-web-dev/SWD118";

import FormSubmission from "./component/mini-projects/form-submission/FormSubmission";
import PasswordValidator from "./component/mini-projects/password-validator/PasswordValidator";
import IpAddressFinder from "./component/mini-projects/IP-adress-finder/IpAddressFinder";
import Weather from "./component/mini-projects/weather/Weather";
import ToDo from "./component/mini-projects/to-do/ToDo";
import JokeGenerator from "./component/mini-projects/joke-generator/JokeGenerator";
import CoinFlip from "./component/mini-projects/coin-flip/CoinFlip";

const App = () => {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/sigma-web-dev",
          element: <SigmaWebDev />,
        },
        {
          path: "/sigma-web-dev",
          children: [
            { path: "video110", element: <SWD110 /> },
            { path: "video111", element: <SWD111 /> },
            { path: "video112", element: <SWD112 /> },
            // { path: "video113", element: <SWD113 /> },
            // { path: "video114", element: <SWD114 /> },
            { path: "video115:username", element: <SWD115 /> },
            // { path: "video116", element: <SWD116 /> },
            // { path: "video117", element: <SWD117 /> },
            // { path: "video118", element: <SWD118 /> },
            // { path: "video119", element: <SWD119 /> },
          ],
        },
        {
          path: "/projects",
          element: <Project />,
        },
        {
          path: "/projects",
          children: [
            { path: "form-submission", element: <FormSubmission /> },
            { path: "password-validator", element: <PasswordValidator /> },
            { path: "weather", element: <Weather /> },
            { path: "ip-finder", element: <IpAddressFinder /> },
            { path: "todo-app", element: <ToDo /> },
            { path: "joke-generator", element: <JokeGenerator /> },
            { path: "coin-flip", element: <CoinFlip /> },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <Error404 />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
