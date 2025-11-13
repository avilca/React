import { useState } from 'react';
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

function Counter() {

  const [ mensaje, setMensaje ] = useState('')


  return (
    <div>
      <input onChange={e => setMensaje(e.target.value)}/>
      <button onClick={() => {
        alert('El mensaje es:' + mensaje)
      }}>
        Save
      </button>


    </div>
  )
}

root.render(
  <>
    <Counter/>
  </>
);
