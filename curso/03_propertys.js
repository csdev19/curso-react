import React from "react";
import "./style.css";


// No es comun ver props sino que destructuremos el objeto en los parametros
// const PrimeraApp = ( props ) => {
const PrimeraApp = ( { saludo } ) => {
  // const saludo = {
  //   hola: 'como estas',
  //   yo: 'muy bien'
  // };

  // los props llegan como un objeto entero que puede llegar vacio o lleno de propiedades que estan dentro del tag
  // de esta forma
  //  <PrimeraApp saludo="hola soy goku"/>
  console.log( props ) // props seria: {saludo: "hola soy goku"}
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