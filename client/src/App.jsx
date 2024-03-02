import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import AccountPage from "./pages/AccountPage";
import CartPage from "./pages/CartPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/kategoriler" element={<ShopPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/iletişim" element={<ContactPage />} />
      <Route path="/sepet" element={<CartPage />} />
      <Route path="/hesap" element={<AccountPage />} />
      <Route path="/ürün/:id" element={<ProductDetailsPage />} />
      <Route path="/blog/:id" element={<BlogDetailsPage />} />
    </Routes>
  );
}

export default App;
