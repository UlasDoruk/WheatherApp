import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";

function App() {
  return (
    <div className="App bg-sky-500 2xl:flex 2xl:justify-center">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/error" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
