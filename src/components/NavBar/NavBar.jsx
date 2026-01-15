import React from "react";

import Style from "./NavBar.module.css";
import { Link } from "react-router-dom";

const { nav_container, nav_bar, page_link, cart, cart_box, cart_indecator } =
  Style;

function NavBar({ selectedCount }) {
  return (
    <nav>
      <div className={`${nav_container} container`}>
        <div className="logo">
          <Link to="/">
            <i className="bx bxs-castle"></i>
            Castle.<span className="add_title">img</span>
          </Link>
        </div>
        <ul className={`${nav_bar}`}>
          <li>
            <Link to="/" className={page_link}>
              Pictures
            </Link>
          </li>
          <li>
            <Link to="/users" className={page_link}>
              Users
            </Link>
          </li>
        </ul>

        <div className={cart_box}>
          <p className={cart_indecator}>{selectedCount}</p>
          <a href="#" className={cart}>
            <i className="bx bx-folder-minus"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
