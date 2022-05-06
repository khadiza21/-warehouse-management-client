import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs/Blogs";
import Home from "./components/Home/Home/Home";
import Inventories from "./components/Inventories/Inventories";

import Footer from "./components/Shared/Footer/Footer";
import Navbarr from "./components/Shared/Header/Navbarr/Navbarr";
import UpdateInventory from "./components/UpdateInventory/UpdateInventory";

function App() {
  return (
    <div>
      <Navbarr></Navbarr>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/inventory/:id"
          element={<UpdateInventory></UpdateInventory>}
        ></Route>
        
        <Route
          path="/inventories"
          element={<Inventories></Inventories>}
        ></Route>

        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
