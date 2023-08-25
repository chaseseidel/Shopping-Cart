function StockImage({ image, onClick = () => {} }) {
  return (
    <li onClick={onClick}>
      <img src={image} alt="" className="stock-img" />
    </li>
  );
}

export default StockImage;
