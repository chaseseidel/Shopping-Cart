import { motion } from "framer-motion";

function StockImage({ image, onClick = () => {} }) {
  return (
    <motion.li
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ bounce: 0 }}
      onClick={onClick}
    >
      <img src={image} alt="" className="stock-img" />
    </motion.li>
  );
}

export default StockImage;
