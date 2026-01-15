import React, { useState, useEffect } from "react";

import "./server.css";

/* API link */
let API = "https://jsonplaceholder.typicode.com/photos";

function Server({ selected, setSelected }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(20);

  /* random imgs */
  let min = 1;
  let max = limit;
  const RandomImgNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    async function get_data() {
      try {
        const res = await fetch(API);
        if (!res.ok) throw new Error("Server xatolik");

        const data = await res.json();

        let GetInputs = data.slice(0, limit);
        setPosts(GetInputs);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    }

    get_data();
  }, [limit]);

  if (loading) return <p>Yuklanmoqda...</p>;

  const handleAdd = (id) => {
    setSelected((item) => {
      if (item.includes(id)) return item;
      return [...item, id];
    });
  };

  const handleRemove = (id) => {
    setSelected((item) => item.filter((x) => x !== id));
  };

  const handleShowMore = () => {
    setLimit((items) => items + 20);
  };

  return (
    <>
      <section className="ServerPngs">
        {posts.map((curVel) => {
          let { id, title } = curVel;
          const isAdded = selected.includes(id);

          return (
            <div key={id} className="pngBox">
              <img
                src={`https://picsum.photos/300/300?${RandomImgNum(min, max)}`}
                alt={title}
              />
              <h3 className="title">{title}</h3>
              <div className="cardControls">
                <button onClick={() => handleRemove(id)} disabled={!isAdded}>
                  O'chir
                </button>
                <button onClick={() => handleAdd(id)} disabled={isAdded}>
                  Qo'sh
                </button>
              </div>
            </div>
          );
        })}
      </section>
      <button className="more_imgs" onClick={handleShowMore}>
        Add +20
      </button>
    </>
  );
}

export default Server;
