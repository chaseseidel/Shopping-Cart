import Electronics from "../../../assets/images/electronics.png";
import Button from "../../../components/Button";

function Advertisement() {
  return (
    <div className="ad">
      <div className="ad-left-container">
        <h2>
          EXTRA 20% OFF
          <br />
          SELECT STYLES
        </h2>
        <p>
          Members: Remember to sign in and use code CART to save.
          <br />
          Exclusions Apply.
        </p>
        <Button text="Shop" style="shop" />
      </div>
      <div className="ad-right-container">
        <img src={Electronics} alt="" className="stock-img" />
      </div>
    </div>
  );
}

export default Advertisement;
