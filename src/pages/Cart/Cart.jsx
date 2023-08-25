import Header from "./Header";
import CartItem from "./CartItem";
import Button from "../../components/Button";
import Modal from "./Modal";
import Total from "./Total";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

function Cart({ isActive, cart, exitCart, removeItem, editQuantity }) {
  useEffect(() => {
    const noScroll = () => window.scrollTo(0, 0);

    window.addEventListener("scroll", noScroll);

    return () => window.removeEventListener("scroll", noScroll);
  }, []);

  return (
    <AnimatePresence>
      {isActive && (
        <Modal onClick={exitCart}>
          <Header onClick={exitCart} />
          <ul className="cart-items">
            {cart.map((item) => (
              <CartItem
                item={item}
                removeItem={removeItem}
                editQuantity={editQuantity}
                key={item.id}
              />
            ))}
          </ul>
          <Total cart={cart} />
          <Button text="Checkout" style="checkout" />
        </Modal>
      )}
    </AnimatePresence>
  );
}

export default Cart;
