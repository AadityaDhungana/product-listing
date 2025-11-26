import { useState } from "react";
import { Route, Routes } from "react-router";
import { useThemeStore } from "../src/store/useThemeStore.js";

import Header from "./components/Header.jsx";
import HomePage from "./pages/HomePage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  const { theme } = useThemeStore();

  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
  if (!cart.some((item) => item.id === product.id)) {
    setCart((prev) => [...prev, product]);
  }
};

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="h-screen" data-theme={theme}>
      <Header onCartOpen={() => setCartOpen(true)} />

      <Routes>
        <Route
          path="/"
          element={<HomePage addToCart={addToCart} cart={cart} />}
        />

        <Route
          path="/homepage"
          element={<HomePage addToCart={addToCart} cart={cart}/>}
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Cart
        isOpen={cartOpen}
        cart={cart}
        onClose={() => setCartOpen(false)}
        cartItems={cart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default App;
