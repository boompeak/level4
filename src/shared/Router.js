import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import NavbarComponent from "../components/NavbarComponent";
import Community from "../pages/Community";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Support from "../pages/Support";

const Router = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/community" element={<Community />} />
        <Route path="/support" element={<Support />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
