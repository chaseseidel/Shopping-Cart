import Button from "../../components/Button";

function Product({ product, addItem }) {
  return (
    <div className="product" key={product.id}>
      <div
        style={{
          backgroundImage: `url(${product.image})`,
        }}
        className="product-img"
      />
      <h3>{product.title}</h3>
      <p className="price">{`$${product.price}`}</p>
      <Button
        text="Add To Cart"
        style="add-to-cart"
        onClick={() => addItem(product)}
      />
    </div>
  );
}

export default Product;
