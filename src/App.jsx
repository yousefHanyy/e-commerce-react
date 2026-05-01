import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import axios from "axios";
import Admin from "./pages/Admin";
import ProductForm from "./pages/ProductForm";

function App() {
  const [items, setItem] = useState([]);

  const [activeCategory, setActiveCategory] = useState(0);
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  const [loading, setLoading] = useState(false);

  //* Effect:
  //? We use an empty dependancy array since we want to get the data from the back end only once so no rerenders are necessary:
  useEffect(() => {
    //! Note useEffect can't be an async function, so the turnaround way is to call make a function that would be called in the useEffect so we can make it an async function.
    const fetchData = async () => {
      // we set loading true at first since we are waiting for the data to get to the front end
      setLoading(true);
      //* Using axios since it is a community standard:
      const res = await axios.get("http://localhost:3000/products");
      setItem(res.data);
      setLoading(false);
    };
    fetchData();

    // setLoading(true);
    // fetch("http://localhost:3000/products")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setItem(data);
    //     setLoading(false);
    //   });
  }, []);

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
        <Route path="/product/new" element={<ProductForm />} />
        <Route path="/admin" element={<Admin items={items} />} />
        <Route
          path="/"
          element={
            <Home
              loading={loading}
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
