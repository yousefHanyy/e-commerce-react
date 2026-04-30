import CartItem from "./CartItem";

export default function Cart({
  items,
  handleIncrement,
  handleDecrement,
  handleReset,
  handleDelete,
}) {
  return (
    <div className="w-100 m-auto mt-15">
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleDelete={handleDelete}
        />
      ))}
      {items.length !== 0 ? (
        <button
          className="py-1 px-5 rounded  bg-gray-200  hover:bg-blue-500 hover:text-white transition cursor-pointer"
          onClick={handleReset}
        >
          Reset
        </button>
      ) : (
        <div className="mt-15">
          Cart is empty. Added items will appear here.
        </div>
      )}
    </div>
  );
}
