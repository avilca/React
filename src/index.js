import React from "react";
import ReactDOM from "react-dom/client";
import {
  Greeting,
  UserCard,
} from "./Greeting"; /* Importar de forma individual */
import Product, { Navbar } from "./Product"; /* Importar de forma por defecto */

import {Button} from "./Button";
import {Taskcard} from "./Task";
import { Saludar } from "./Saludar";

const root = ReactDOM.createRoot(document.getElementById("root"));




root.render(
  <>
    <Taskcard ready={true} />
    <Saludar />
    <Button text="Saludar"/>  
    
    <form onSubmit={(e) => {
      e.preventDefault()
      alert('Enviado')
    }}>

      <h1>Registro de usuario</h1>
      <button>Send</button>
    </form>

  </>
);
