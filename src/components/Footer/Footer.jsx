import React from "react";

import { Link } from "react-router-dom";

import "../../index.css";
import style from "./Footer.module.css";

const { footer, about_site, profil_links, copyright } = style;

function Footer() {
  return (
    <footer className={footer}>
      <section className={`${about_site} container`}>
        <div className="">
          <div className="logo">
            <Link to="/">
              <i className="bx bxs-castle"></i>
              Castle.<span className="add_title">img</span>
            </Link>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsam
            velit deserunt architecto suscipit! Ab?
          </p>
        </div>

        <div className={profil_links}>
          <a href="https://github.com/Murodiljon07" target="_blank">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://t.me/Murodiljon2711" target="_blank">
            <i className="bx bxl-telegram"></i>
          </a>
          <a
            href="https://www.instagram.com/murodiljonabdumutalov/#"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
        </div>
      </section>
      <hr />
      <p className={copyright}>
        <span>©️</span>Created by Murodiljon Abdumutalov - for more Repo{" "}
        <span>👉</span>{" "}
        <a href="https://github.com/Murodiljon07" target="_blank">
          <i className="bx bxl-github"></i>
        </a>
      </p>
    </footer>
  );
}

export default Footer;
