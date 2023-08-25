import Icon from "../Header/Icon";
import Delete from "../../assets/images/delete.png";
import Button from "../../components/Button";
import { useEffect } from "react";

function CartItem({ item, editQuantity }) {
  return (
    <li key={item.id} className="cart-item">
      <div
        style={{
          backgroundImage: `url(${item.product.image})`,
        }}
        className="cart-img"
      />
      <h3>{item.product.title}</h3>
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
      <Icon src={Delete} alt="Delete" />
    </li>
  );
}

export default CartItem;
