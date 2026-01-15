import React from "react";

/* server */
import Server from "../../server/server";

import Style from "./MainLayout.module.css";

let { PngContainer } = Style;

function MainLayout({ selected, setSelected }) {
  return (
    <>
      <section className={`${PngContainer} container`}>
        <Server selected={selected} setSelected={setSelected}></Server>
      </section>
    </>
  );
}

export default MainLayout;
