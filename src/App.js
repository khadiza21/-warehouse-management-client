import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Inventories from "./components/Home/Inventories/Inventories";
import Footer from "./components/Shared/Footer/Footer";
import Navbarr from "./components/Shared/Header/Navbarr/Navbarr";


function App() {
  return (
    <div>
      <Navbarr></Navbarr>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route  path="/inventory" element={<Inventories></Inventories>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
