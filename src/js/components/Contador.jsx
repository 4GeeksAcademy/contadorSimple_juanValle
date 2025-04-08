import React, {useState, useEffect} from "react";

const Contador = () => {
    const [count, setCount] = useState(0);
  
    const countString = String(count).padStart(25, '0');
    const digits = countString.split('');
  
    useEffect(() => {
      // Configura el intervalo que se ejecutará cada segundo (1000 milisegundos)
      const intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000); 
  
      return () => {
        clearInterval(intervalId); 
      };
    }, []); 
  
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