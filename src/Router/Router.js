import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import NewComer from "../pages/NewComer/NewComer";
import Popular from "../pages/Popular/Popular";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/popular", element: <Popular></Popular> },
      { path: "/new-comer", element: <NewComer></NewComer> },
      { path: "/about", element: <About></About> },
    ],
  },
]);
export default router;
