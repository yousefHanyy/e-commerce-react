import { NavLink } from "react-router";

function Navbar({ numberOfCartItems }) {
  return (
    <div>
      <ul className="flex justify-between items-center p-5 bg-gray-100 font-bold">
        <NavLink to="/">
          <li>
            <h1>Logo :)</h1>
          </li>
        </NavLink>
        <NavLink to="/shopping">
          <li className="relative hover:bg-gray-300 rounded size-7 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={numberOfCartItems > 0 ? "currentColor" : "none"}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=""
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span className="bg-amber-200 size-5 absolute -bottom-3 -right-2.5 rounded-full text-center flex justify-center  text-sm">
              {numberOfCartItems}
            </span>
          </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
