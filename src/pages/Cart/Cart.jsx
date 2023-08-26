import Header from "./components/Header";
import Button from "../../components/Button";
import Modal from "./components/Modal";
import Total from "./components/Total";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import CartItems from "./components/CartItems";
import EmptyCart from "./components/EmptyCart";

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
          {cart.length > 0 ? (
            <>
              <CartItems
                cart={cart}
                removeItem={removeItem}
                editQuantity={editQuantity}
              />
              <Total cart={cart} />
              <Button text="Checkout" style="checkout" />
            </>
          ) : (
            <EmptyCart />
          )}
        </Modal>
      )}
    </AnimatePresence>
  );
}

export default Cart;
