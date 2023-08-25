import Button from "../../components/Button";

function Product({ product }) {
  return (
    <div className="product" key={product.id}>
      <div
        style={{
          backgroundImage: `url(${product.image})`,
        }}
        className="product-img"
      ></div>
      <h3>{product.title}</h3>
      <p className="price">{`$${product.price}`}</p>
      <Button text="Add To Cart" style="add" />
    </div>
  );
}

export default Product;
