import './App.css';
import freecodecampLogo from "./imagenes/freecodecamp-logo.png";
import Boton from './componentes/Boton.jsx';
import Pantalla from './componentes/Pantalla.jsx';
import BotonClear from './componentes/BotonClear.jsx';
import { useState } from "react"; /* debemos importar useState para poder asignarle un estado (hooks) a nuestros componentes */
import {evaluate} from "mathjs";  /* mathjs es una libreria de funciones matematicas para js y nodejs */

function App() {

  const [input, setInput] = useState("");

  const agregarInput = valor => {
    setInput(input + valor);
  };

  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input)); /*si hay un input realiza esa funcion y sino tira el alert*/
    }else{
      alert("Por favor ingrese un valor");
    }
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img 
          src={freecodecampLogo}
          className="freecodecamp-logo"
          alt="Logo-de-FreeCodeCamp" />   
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input}/>
        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton> 
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>       
        <div className="fila">
          <BotonClear manejarClear={() => setInput("")}>Clear</BotonClear>
        </div>   
      </div>
    </div>
  );
}

export default App;
