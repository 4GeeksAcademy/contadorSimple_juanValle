import React, {useState, useEffect} from "react";

const Contador = () => {
    const [count, setCount] = useState(0);
  
    const countString = String(count).padStart(25, '0');
    const digits = countString.split('');
  
    useEffect(() => {
      // Configura el intervalo que se ejecutará cada segundo (1000 milisegundos)
      const intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000); // Puedes ajustar este valor para cambiar la velocidad del contador
  
      // Función de limpieza que se ejecuta cuando el componente se desmonta
      return () => {
        clearInterval(intervalId); // Limpia el intervalo para evitar fugas de memoria
      };
    }, []); // El array vacío como segundo argumento asegura que este efecto solo se ejecute una vez al montar el componente
  
    return (
      <div className="contador">
        {digits.map((digit, index) => (
          <div key={index} className="digito">
            {digit}
          </div>
        ))}
      </div>
    );
  };
  


export default Contador 