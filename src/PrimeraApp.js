import React from "react";
import "./style.css";

const PrimeraApp = ( { saludo = 'Hola extraño' } ) => {
  // const saludo = {
  //   hola: 'como estas',
  //   yo: 'muy bien'
  // };

  return (
    <>
      <h1> { JSON.stringify(saludo) } </h1>
      <p> 
        Yo soy el primer componente que recibe 
        <strong> { saludo } </strong>
      </p>
    </>
  );
}

export default PrimeraApp;