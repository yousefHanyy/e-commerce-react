import Cart from "../components/Cart";

export default function Home({
  items,
  handleIncrement,
  handleDecrement,
  handleReset,
  handleCategoryChange,
  activeCategory,
  handlePageNumber,
  page,
  handlePageChange,
  itemsPerPage,
}) {
  const filteredItems =
    activeCategory === 0
      ? items
      : items.filter((item) => item.categoryId === activeCategory);

  // * Used for rendering the pagination buttons:
  const totalPages = Math.max(
    1,
    Math.ceil(filteredItems.length / itemsPerPage),
  );
  const paginatedItems = handlePageNumber(filteredItems, page);

  return (
    <div className="flex justify-center gap-10">
      <div className="flex flex-col mt-6">
        <button
          className={
            activeCategory === 0
              ? "px-8 py-2 text-center  border-t bg-blue-500 text-white cursor-pointer hover:bg-blue-500 hover:text-white"
              : "px-8 py-2 text-center  border-t bg-blue-200 cursor-pointer hover:bg-blue-500 hover:text-white"
          }
          onClick={() => {
            handleCategoryChange(0);
          }}
        >
          <h2>All</h2>
        </button>
        <button
          className={
            activeCategory === 1
              ? "px-8 py-2 text-center border-t bg-blue-500 text-white cursor-pointer hover:bg-blue-500 hover:text-white"
              : "px-8 py-2 text-center  border-t bg-blue-200 cursor-pointer hover:bg-blue-500 hover:text-white"
          }
          onClick={() => {
            handleCategoryChange(1);
          }}
        >
          <h2>Burgers</h2>
        </button>
        <button
          className={
            activeCategory === 2
              ? "px-8 py-2 text-center  border-t bg-blue-500 text-white cursor-pointer hover:bg-blue-500 hover:text-white"
              : "px-8 py-2 text-center  border-t bg-blue-200 cursor-pointer hover:bg-blue-500 hover:text-white"
          }
          onClick={() => {
            handleCategoryChange(2);
          }}
        >
          <h2>Pizzas</h2>
        </button>
        <button
          className={
            activeCategory === 3
              ? "px-8 py-2 text-center border-b border-t bg-blue-500 text-white cursor-pointer hover:bg-blue-500 hover:text-white"
              : "px-8 py-2 text-center border-b border-t bg-blue-200 cursor-pointer hover:bg-blue-500 hover:text-white"
          }
          onClick={() => {
            handleCategoryChange(3);
          }}
        >
          <h2>Water</h2>
        </button>
      </div>
      <div>
        <Cart
          items={paginatedItems}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleReset={handleReset}
        />
        <div className="flex items-center gap-3 mt-4">
          <button
            className="px-4 py-2 rounded bg-blue-500 text-white disabled:bg-gray-300 disabled:cursor-not-allowed hover:cursor-pointer hover:bg-blue-700 hover:text-white"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            Prev
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button
            className="px-4 py-2 rounded bg-blue-500 text-white disabled:bg-gray-300 disabled:cursor-not-allowed hover:cursor-pointer hover:bg-blue-700 hover:text-white"
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
