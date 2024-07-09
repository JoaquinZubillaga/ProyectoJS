
alert('¡Hola! Bienvenido al convertidor de temperaturas')

function celsiusAFahrenheit(celsius){
    return celsius * 9/5 + 32;
}

function celsiusAKelvin(celsius){
    return celsius + 273;
}

function fahrenheitACelsius(fahrenheit){
    return (fahrenheit -32) * 5/9;
}

function kelvinACelsius(kelvin){
    return kelvin -273;
}

function ajustarDecimales(numero){
    return numero.toLocaleString( 'es-UY', {minimumFractionDigits: 2 , maximumFractionDigits: 2})
}

function convertirgrados(){
    let opcion = prompt('Para convertir una unidad en celsius a fahrenheit, ingrese "1"\nPara convertir una unidad de celsius a kelvin, ingrese "2"\nPara convertir una unidad de fahrenheit a celsius, ingrese "3"\nPara convertir una unidad de kelvin a celsius, ingrese "4"')
    if(opcion === '1'){
        let celsius = parseFloat(prompt('Ingrese la cantidad de grados celsius para convertir en fahrenheit'))
        if(isNaN(celsius)){
            alert('Ingrese un numero válido')
        } else{
        let fahrenheit = celsiusAFahrenheit(celsius)
        alert(`El equivalente en fahrenheit de ${ajustarDecimales(celsius)}°C es igual a ${ajustarDecimales(fahrenheit)}°F`)
        }
    } else if(opcion === '2'){
        let celsius = parseFloat(prompt('Ingrese la cantidad de grados celsius para convertir en kelvin'))
        if(isNaN(celsius)){
            alert('Ingrese un numero válido')
        } else{
        let kelvin = celsiusAKelvin(celsius)  
        alert(`El equivalente en kelvin de ${ajustarDecimales(celsius)}°C es igual a ${ajustarDecimales(kelvin)}K`)
        }
    } else if(opcion === '3'){
        let fahrenheit = parseFloat(prompt('Ingrese la cantidad de grados fahrenheit para convertir en celsius'))
        if(isNaN(fahrenheit)){
            alert('Ingrese un numero válido')
        } else{
        let celsius = fahrenheitACelsius(fahrenheit)  
        alert(`El equivalente en celsius de ${ajustarDecimales(fahrenheit)}°F es igual a ${ajustarDecimales(celsius)}°C`)
        }
    } else if(opcion === '4'){
        let kelvin = parseFloat(prompt('Ingrese la cantidad de grados kelvin para convertir en celsius'))
        if(isNaN(kelvin)){
            alert('Ingrese un numero válido')
        } else{
        let celsius = kelvinACelsius(kelvin)  
        alert(`El equivalente en celsius de ${ajustarDecimales(kelvin)}K es igual a ${ajustarDecimales(celsius)}°C`)
        }
    } else{
        alert('No ingresaste ninguna opción correcta')
    }
}

convertirgrados()