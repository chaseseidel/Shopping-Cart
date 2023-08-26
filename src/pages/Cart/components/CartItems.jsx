import CartItem from "./CartItem";

function CartItems({ cart, removeItem, editQuantity }) {
  return (
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
  );
}

export default CartItems;
