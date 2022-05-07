import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import AddInventory from "./components/AddInventory/AddInventory";
import Blogs from "./components/Blogs/Blogs";
import Home from "./components/Home/Home/Home";
import Inventories from "./components/Inventories/Inventories";
import Login from "./components/Login/Login/Login";
import Register from "./components/Login/Register/Register";
import RequireAuth from "./components/Login/RequireAuth/RequireAuth";
import 'react-toastify/dist/ReactToastify.css';

import Footer from "./components/Shared/Footer/Footer";
import Navbarr from "./components/Shared/Header/Navbarr/Navbarr";
import UpdateInventory from "./components/UpdateInventory/UpdateInventory";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Navbarr></Navbarr>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>

        <Route
          path="/inventory/:id"
          element={
          <UpdateInventory></UpdateInventory>
        }
        ></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

        <Route
          path="/inventories"
          element={
            <RequireAuth>
          <Inventories></Inventories></RequireAuth>
        }
        ></Route>
        <Route
          path="/addInventory"
          element={<RequireAuth><AddInventory></AddInventory></RequireAuth>}
        ></Route>

        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
