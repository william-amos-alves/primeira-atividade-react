import { useState } from "react";

function Converso() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState(null);

  const conversorTemperatura = () => {
    const celsiusValue = parseFloat(celsius);
    if (!isNaN(celsiusValue)) {
      const fahrenheitValue = celsiusValue * 1.8 + 32;
      setFahrenheit(fahrenheitValue);
    }
  };

  return (
    <section>
      <h2>Conversor de Temperatura </h2>
      <input
        type="number"
        value={celsius}
        onChange={(evento) => setCelsius(evento.target.value)}
        placeholder="Digite a temperatura em Celsius"
      />
      <br />
      <button onClick={conversorTemperatura}>Converter</button>
      <hr />
      {fahrenheit !== null && (
        <p>
          {celsius}°C é igual a {fahrenheit.toFixed(2)}°F
        </p>
      )}
    </section>
  );
}
export default Converso;
