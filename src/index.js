import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting"; /* Importar de forma individual */
import Product, {Navbar} from "./Product"; /* Importar de forma por defecto */

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <>
    <Greeting />
    <UserCard />
    <Product />
  </>
);
