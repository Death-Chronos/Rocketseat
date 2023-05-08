/*Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32 */

function celsius_Fahrenheit(temperature) {
    temperature = Number(temperature);
    let celsius = (temperature-32) * 5/9
    let fahrenheit = temperature * 9/5 +32
    console.log(`Celsius para Fahrenheit: ${fahrenheit.toFixed(2)}\nFahrenheit para Celsius: ${celsius.toFixed(2)}`);
}

celsius_Fahrenheit("89")