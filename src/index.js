import React from "react";
import ReactDOM from "react-dom/client";
import {
  Greeting,
  UserCard,
} from "./Greeting"; /* Importar de forma individual */
import Product, { Navbar } from "./Product"; /* Importar de forma por defecto */

import { Button } from "./Button";
import { Taskcard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

const users = [
  {
    id: 1,
    name: "Andres",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "joe",
    image: "https://robohash.org/user2",
  },
];

root.render(
  <>
    {users.map((user, i) => {
      return (
        <div key={i}>
          <h1>{user.name}</h1>
          <img src={user.image} />
        </div>
      );
    })}
  </>
);
