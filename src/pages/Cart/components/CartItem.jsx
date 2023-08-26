import Icon from "../../Header/Icon";
import Delete from "../../../assets/images/delete.png";
import Button from "../../../components/Button";

function CartItem({ item, removeItem, editQuantity }) {
  const price = (item.product.price * item.quantity).toFixed(2);

  return (
    <li key={item.id} className="cart-item">
      <div
        style={{
          backgroundImage: `url(${item.product.image})`,
        }}
        className="cart-img"
      />
      <h3>{item.product.title}</h3>
      <p className="cart-price ">{`$${price}`}</p>
      <div className="quantity">
        <Button
          text="-"
          style="quantity-btn"
          onClick={() => editQuantity(item, false)}
        />
        <p>{item.quantity}</p>
        <Button
          text="+"
          style="quantity-btn"
          onClick={() => editQuantity(item, true)}
        />
      </div>
      <Icon src={Delete} alt="Delete" onClick={() => removeItem(item)} />
    </li>
  );
}

export default CartItem;
