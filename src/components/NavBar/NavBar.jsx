import React from "react";

import Style from "./NavBar.module.css";

const { nav_container, nav_bar, page_link, cart, cart_box, cart_indecator } =
  Style;

function NavBar({ selectedCount }) {
  return (
    <nav>
      <div className={`${nav_container} container`}>
        <div className="logo">
          <a href="#">
            <i className="bx bxs-castle"></i>
            Castle.<span className="add_title">img</span>
          </a>
        </div>
        <ul className={`${nav_bar}`}>
          <li>
            <a href="#" className={page_link}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className={page_link}>
              New
            </a>
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
