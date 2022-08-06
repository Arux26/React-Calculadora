import React from "react";
import "../stylesheets/BotonClear.css"

const BotonClear = (props) => (
  <button className="boton-clear" onClick={props.manejarClear}> 
    {props.children}  {/* si el valor del componente es fijo podemos ponerlo en vez de hacer props.children ej Clear en vez de props.children */}
  </button>               /* y el App.js solo tendriamos una etiqueta de apertura */
);


export default BotonClear;