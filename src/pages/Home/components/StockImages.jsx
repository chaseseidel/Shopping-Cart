import stock1 from "../../../assets/images/stock-1.jpg";
import stock2 from "../../../assets/images/stock-2.jpg";
import stock3 from "../../../assets/images/stock-3.jpg";

function StockImages() {
  return (
    <ul className="stock-images">
      <li>
        <img src={stock1} alt="" className="stock-img" />
      </li>
      <li>
        <img src={stock2} alt="" className="stock-img" />
      </li>
      <li>
        <img src={stock3} alt="" className="stock-img" />
      </li>
    </ul>
  );
}

export default StockImages;
