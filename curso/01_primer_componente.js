import React from "react";
import "./style.css";

const PrimeraApp = () => {
  const saludo = ' Hola mundo const ';
  return (
    <>
      <h1> { saludo } </h1>
      <p> Yo soy el primer componente</p>
    </>
  );
}

export default PrimeraApp;