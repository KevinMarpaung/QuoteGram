import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home></Home>}></Route>
        <Route path={"admin"} element={<Admin></Admin>}></Route>
      </Routes>
    </>
  );
}

export default App;
