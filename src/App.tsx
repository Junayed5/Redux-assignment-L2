import { Outlet } from "react-router";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center">
        Welcome to React redux assignment
      </h1>
      <Outlet />
    </>
  );
}

export default App;
