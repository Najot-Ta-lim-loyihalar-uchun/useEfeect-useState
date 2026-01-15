import React from "react";

import { useState, useEffect } from "react";

/* API  */
const API = "https://jsonplaceholder.typicode.com/users";

function UsersLoyaut() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function get_users(params) {
      try {
        const res = await fetch(API);

        if (!res.ok) throw new Error("Serverda xatolik yuz berdi");

        const data = await res.json();
      } catch (error) {
        alert(error.message);
      }
    }
  });
  return <div>UsersLoyaut</div>;
}

export default UsersLoyaut;
