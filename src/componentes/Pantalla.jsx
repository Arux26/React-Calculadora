import React from "react";
import "../stylesheets/Pantalla.css"

const Pantalla = ({ input }) => (
  <div className="input"> 
    {input} {/* input es el valor ingresado por el usuario que se va mostrar en la pantalla  */}
  </div>
);

export default Pantalla;