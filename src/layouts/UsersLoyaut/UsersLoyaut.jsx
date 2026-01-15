import React, { use } from "react";

import { useState, useEffect } from "react";

/* API link */
let API = "https://jsonplaceholder.typicode.com/users";

function UsersLoyaut() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function get_data() {
      try {
        const res = await fetch(API);
        if (!res.ok) throw new Error("Server xatolik");

        const data = await res.json();

        console.log(data);

        setUsers(data);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    }
    get_data();
  }, []);

  if (loading) return <p>Yuklanmoqda...</p>;

  return (
    <>
      <section className="ServerPngs">
        {users.map((curUser) => {
          let { id, name, username, email, phone, website } = curUser;

          return (
            <div key={id} className="userCard">
              <div className="userImg">{name.charAt(0).toUpperCase()}</div>
              <div className="userInfo">
                <h3 className="title">{name}</h3>
                <p className="userName">Username: {username}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Website: {website}</p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default UsersLoyaut;
