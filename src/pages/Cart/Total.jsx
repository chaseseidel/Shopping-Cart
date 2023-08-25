function Total({ cart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return <p className="total">{`Total: $${total.toFixed(2)}`}</p>;
}

export default Total;
