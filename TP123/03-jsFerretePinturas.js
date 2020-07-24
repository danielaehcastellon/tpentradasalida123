/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    //tomo de document faren y muestro por alert centi
    let vTemperatura;
    let vCentigrados;

    vTemperatura = document.getElementById("txtIdTemperatura").value;

    vCentigrados = (vTemperatura - 32) * 5 / 9;

    alert(vTemperatura+"°F son "+vCentigrados.toFixed(2)+"°C");
	
}

function CentigradosFahrenheit () 
{
    //paso la inversa de arriba
    let vTemperatura;
    let vFarenheit;

    vTemperatura = document.getElementById("txtIdTemperatura").value;
//cambia la operacion se suma 32 y se multi po 9 desp / 5
    vFarenheit = (vTemperatura * 9 / 5) + 32;

    alert(vTemperatura+"°C son "+vFarenheit.toFixed(2)+"°F");
	
}
