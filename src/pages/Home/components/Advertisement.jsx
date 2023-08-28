import Electronics from "../../../assets/images/electronics.png";
import Button from "../../../components/Button";
import { motion } from "framer-motion";

function Advertisement() {
  return (
    <div className="ad">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ bounce: 0 }}
        className="ad-left-container"
      >
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
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ bounce: 0 }}
        className="ad-right-container"
      >
        <img src={Electronics} alt="" className="stock-img" />
      </motion.div>
    </div>
  );
}

export default Advertisement;
