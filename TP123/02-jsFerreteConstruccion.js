/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
/*ancho y largo para ver el alambre necesario para un terreno*/
var vAncho;
var vLargo;
var vPerimetro;
/* no se si seria mas conveniente un parseFloat porque las medias pueden ser con ,*/ 
vLargo = parseInt(document.getElementById("txtIdLargo").value);
vAncho = parseInt(document.getElementById("txtIdAncho").value);
/* para no agregar una linea hago las 3 vueltas de alambre aca mismo, por eso 3* */
vPerimetro = 3*(vAncho + vLargo);
alert("Rectangulo de alambre "+vPerimetro+" mts.");
}
function Circulo () 
{
var vRadio;
var vPerimetro;
var vPerimetro2;
vRadio = parseFloat(document.getElementById("txtIdRadio").value);
/* no sabria como enunciar la variable, ni si esta bien el calculo */
vArea = 3,14 * (vRadio * vRadio);
vPerimetro = (2*3,14) * vRadio;
vPerimetro2 = 3*vPerimetro;

alert("Circulo de alambre "+vPerimetro2);

}
function Materiales () 
{
var vAncho;
var vLargo;    
var vArea;
var vCemento;
var vCal;

vAncho = parseInt(document.getElementById("txtIdAncho").value);
vLargo = parseInt(document.getElementById("txtIdLargo").value);

vArea = vAncho*vLargo;
/* la mitad del perimetro en cemento*/
vCemento = vArea * 2;
/* uno mas de la mitad en cal, no se me ocurrio otra forma */
vCal = vArea * 3;

alert("Materiales contrapiso "+vCemento+" bolsas de cemento y "+vCal+" de cal");
    
}