import Cart from "../components/Cart";

function ShoppingCart({
  items,
  handleIncrement,
  handleDecrement,
  handleDelete,
  handleReset,
}) {
  return (
    <Cart
      items={items}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleDelete={handleDelete}
      handleReset={handleReset}
    />
  );
}

export default ShoppingCart;
