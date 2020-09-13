import React from "react";
import "./style.css";

const PrimeraApp = () => {
  const saludo = {
    hola: 'como estas',
    yo: 'muy bien'
  };

  // usaremos el metodo stringify de los jsons 
  return (
    <>
      <h1> { JSON.stringify(saludo) } </h1>
      <p> Yo soy el primer componente</p>
    </>
  );
}

export default PrimeraApp;