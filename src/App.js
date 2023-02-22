import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";

function App() {
  return (
    <div>
      <h1 className="">Hello world!</h1>

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
