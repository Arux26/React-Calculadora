import React from "react";
import "../stylesheets/Boton.css"

function Boton(props){

  const esOperador = valor => {
    return isNaN(valor) && (valor !== ".") && (valor !== "=");/* si valor no es un numero y no es un punto y no es el signo igual entonces es un operador */
  };

  return(
    <button className={`boton-contenedor ${esOperador(props.children) ? "operador" : ""}`.trimEnd()}
    onClick={() => props.manejarClick(props.children)}>{/*trim() y trimEnd() este metodo es para eliminar espacios al final del string*/}
      {props.children}
    </button>
  );

/* Opcion 2 */
  
/*   if(esOperador(props.children)){
    return (
      <div className= "boton-contenedor operador"
      onClick={() => props.manejarClick(props.children)}>
        {props.children}
      </div>
    );
  }else{
    return(
      <div className= "boton-contenedor"
      onClick={() => props.manejarClick(props.children)}>
        {props.children}
      </div>
    )
  } */
}


 
export default Boton;
