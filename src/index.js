import React from "react";
import ReactDOM from "react-dom/client";
import {
  Greeting,
  UserCard,
} from "./Greeting"; /* Importar de forma individual */
import Product, { Navbar } from "./Product"; /* Importar de forma por defecto */

import {Button} from "./Button";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Button text='Click me' />
    <Button text='Pay' />
    <Button text='' name='Jhony ' />

      {/* UserCard
      name="Footgolito golito"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 Main Street", city: "New York" }}
      greet={function () { alert('Hello') }}
    />

    <UserCard 
      name= "Andres McMillan"
      amount={1000}
      married={false}
      points={[100, 20]}
      address={{ 
        street: "Avenida 3 de octubre 782", 
        city: "Comas" 
      }} */}
      
    

  </>
);
