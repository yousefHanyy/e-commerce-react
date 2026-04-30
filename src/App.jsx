import { useState } from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  const [items, setItem] = useState([
    {
      id: 1,
      name: "Small Burger",
      count: 0,
      price: 100,
      isAdded: false,
      categoryId: 1,
    },
    {
      id: 2,
      name: "Small Pizza",
      count: 0,
      price: 70,
      isAdded: false,
      categoryId: 2,
    },
    {
      id: 3,
      name: "Small Water",
      count: 0,
      price: 10,
      isAdded: false,
      categoryId: 3,
    },
    {
      id: 4,
      name: "Medium Burger",
      count: 0,
      price: 150,
      isAdded: false,
      categoryId: 1,
    },
    {
      id: 5,
      name: "Medium Pizza",
      count: 0,
      price: 90,
      isAdded: false,
      categoryId: 2,
    },
    {
      id: 6,
      name: "Medium Water",
      count: 0,
      price: 15,
      isAdded: false,
      categoryId: 3,
    },
    {
      id: 7,
      name: "Large Burger",
      count: 0,
      price: 200,
      isAdded: false,
      categoryId: 1,
    },
    {
      id: 8,
      name: "Large Pizza",
      count: 0,
      price: 110,
      isAdded: false,
      categoryId: 2,
    },
    {
      id: 9,
      name: "Large Water",
      count: 0,
      price: 25,
      isAdded: false,
      categoryId: 3,
    },
  ]);

  const [activeCategory, setActiveCategory] = useState(0);
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  function handlePageNumber(items, currentPage) {
    const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));

    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  }

  function handlePageChange(newPage) {
    setPage(newPage);
  }

  function handleCategoryChange(categoryId) {
    setActiveCategory(categoryId);
    setPage(1);
  }

  function handleIncrement(item) {
    const newItems = items.map((itm) => {
      if (itm.id === item.id) {
        return { ...itm, count: itm.count + 1, isAdded: true };
      }
      return itm;
    });
    setItem(newItems);
  }

  function handleDecrement(item) {
    const newItems = items.map((itm) => {
      if (itm.id === item.id) {
        if (itm.count === 0) return itm;
        return {
          ...itm,
          count: item.count - 1,
          isAdded: item.count - 1 === 0 ? false : true,
        };
      }
      return itm;
    });
    setItem(newItems);
  }

  function handleDelete(item) {
    const newItems = items.map((itm) => {
      if (itm.id === item.id) {
        return { ...itm, count: 0, isAdded: false };
      }
      return itm;
    });
    setItem(newItems);
  }

  function handleReset() {
    const newItems = items.map((itm) => ({ ...itm, count: 0, isAdded: false }));
    setItem(newItems);
  }

  return (
    <div>
      <Navbar
        numberOfCartItems={items.reduce((acc, itm) => acc + itm.count, 0)}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              activeCategory={activeCategory}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              handleReset={handleReset}
              handleCategoryChange={handleCategoryChange}
              handlePageNumber={handlePageNumber}
              page={page}
              handlePageChange={handlePageChange}
              itemsPerPage={itemsPerPage}
            />
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <Cart
              items={items}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              handleDelete={handleDelete}
              handleReset={handleReset}
            />
          }
        />
        <Route
          path="/shopping"
          element={
            <ShoppingCart
              items={items.filter((item) => item.isAdded)}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              handleDelete={handleDelete}
              handleReset={handleReset}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
