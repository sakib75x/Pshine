import { Routes, Route } from "react-router";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import Topbar from "./Components/Common/Topbar";
import Test from "./Components/Common/Test";
import ProductsDetails from "./Components/Products/ProductsDetails";
import { createContext, useState } from "react";
import Cart from "./Components/Cart/Cart";
import { Toaster } from "sonner";
import Signup from "./Components/Auth/Signup";
import Signin from "./Components/Auth/Signin";
import Dashboard from "./Components/Dashboard/Dashbaord";
import Profile from "./Components/Dashboard/Profile";
import ProtectedRoute from "./Components/Common/ProtectedRoute";
import AddProduct from "./Components/Product/AddProduct";
import EditProduct from "./Components/Product/EditProduct";
import Editor from "./Components/Common/Editor";

export const CartContext = createContext();
export const AuthContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({});

  return (
    <div>
      <Toaster />
      <AuthContext.Provider value={[user, setUser]}>
        <CartContext value={[cart, setCart]}>
          <Topbar />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/edit-product/:id" element={<EditProduct />} />
            <Route path="/products/:id" element={<ProductsDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/test" element={<Test />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/editor" element={<Editor />} />

            <Route path="/dashboard" element={<ProtectedRoute />}>
              <Route index element={<Dashboard />} />
            </Route>
          </Routes>
          <Footer />
        </CartContext>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
