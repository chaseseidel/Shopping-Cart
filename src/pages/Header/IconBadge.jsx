function IconBadge({ cart }) {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return cart.length > 0 && <span className="icon-badge">{totalItems}</span>;
}

export default IconBadge;
