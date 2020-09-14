import React from "react";
import PropType from 'prop-types';
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

// Son como modelos para lo que va a recibir el componente
PrimeraApp.propTypes = {
  saludo: PropType.string.isRequired
}

export default PrimeraApp;