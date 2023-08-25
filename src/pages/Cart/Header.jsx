import Button from "../../components/Button";

function Header({ onClick }) {
  return (
    <div className="cart-heading">
      <h2>Checkout</h2>
      <Button text="X" style="exit-cart" onClick={onClick} />
    </div>
  );
}

export default Header;
