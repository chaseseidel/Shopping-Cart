import stock1 from "../../../assets/images/stock-1.jpg";
import stock2 from "../../../assets/images/stock-2.jpg";
import stock3 from "../../../assets/images/stock-3.jpg";
import StockImage from "./StockImage";
import { useNavigate } from "react-router-dom";

function StockImages() {
  const navigate = useNavigate();

  return (
    <ul className="stock-images">
      <StockImage image={stock1} onClick={() => navigate("/jewelry")} />
      <StockImage image={stock2} onClick={() => navigate("/men")} />
      <StockImage image={stock3} onClick={() => navigate("/women")} />
    </ul>
  );
}

export default StockImages;
