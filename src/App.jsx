import Header from "./pages/Header/Header";
import Cart from "./pages/Cart/Cart";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [cartActive, setCartActive] = useState(false);
  const [cart, setCart] = useState([]);

  const toggleCart = () => {
    setCartActive(!cartActive);
  };

  const addItemToCart = (product) => {
    const newCart = [...cart];
    const foundIndex = newCart.findIndex((item) => item.id === product.id);
    foundIndex > -1
      ? newCart[foundIndex].quantity++
      : newCart.push({ product, quantity: 1, id: product.id });
    setCart(newCart);
    toggleCart();
  };

  const removeItemFromCart = (product) => {
    const newCart = [...cart];
    const productIndex = newCart.findIndex((item) => item.id === product.id);
    newCart.splice(productIndex, 1);
    setCart(newCart);
  };

  const editQuantity = (cartItem, value) => {
    const newCart = [...cart];
    const productIndex = newCart.findIndex((item) => item.id === cartItem.id);
    value
      ? newCart[productIndex].quantity++
      : cartItem.quantity > 1 && newCart[productIndex].quantity--;
    setCart(newCart);
  };

  return (
    <>
      <Header cart={cart} cartClick={toggleCart} />
      <Outlet context={[addItemToCart]} />
      <Cart
        isActive={cartActive}
        cart={cart}
        exitCart={toggleCart}
        removeItem={removeItemFromCart}
        editQuantity={editQuantity}
      />
    </>
  );
}

export default App;
