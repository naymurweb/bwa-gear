import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
