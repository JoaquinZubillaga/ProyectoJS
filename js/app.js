
alert('¡Hola! Bienvenido al convertidor de temperaturas')

function celsiusAFahrenheit(celsius){
    return celsius * 1.8 + 32;
}

function celsiusAKelvin(celsius){
    return celsius + 273;
}

function ajustarDecimales(numero){
    return numero.toLocaleString( 'es-UY', {minimumFractionDigits: 2 , maximumFractionDigits: 2})
}

function convertir(){
    let opcion = prompt('Para convertir una unidad en celsius a fahrenheit, ingrese "1"\nPara convertir a kelvin, ingrese "2"')
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
    } else{
        alert('No ingresaste ninguna opción correcta')
    }
}

convertir()