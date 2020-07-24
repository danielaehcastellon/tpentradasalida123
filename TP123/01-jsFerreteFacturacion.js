/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{ /* A. la suma entre tres precios*/
    var vPrecioUno;
    var vPrecioDos;
    var vPrecioTres;
    var vResul;

 vPrecioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
 vPrecioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
 vPrecioTres = parseInt(document.getElementById("txtIdPrecioTres").value);

 vResul = vPrecioUno + vPrecioDos + vPrecioTres;

  alert("Total " + vResul);
}
function Promedio () 
{ /* B. ingresar tres precios y sus promedios o sea la suma y despues divido por 3*/
    
    var vPrecioUno;
    var vPrecioDos;
    var vPrecioTres;
    var vResul;
 
    vPrecioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    vPrecioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    vPrecioTres = parseInt(document.getElementById("txtIdPrecioTres").value);

    vResul = (vPrecioUno + vPrecioDos + vPrecioTres) / 3;

    alert("Promedio total " + vResul);

}
function PrecioFinal () 
{ 
    /* al resul de la suma , sumarle el 21% de iva, sea precio x 21 / 100 */
    var vPrecioUno;
    var vPrecioDos;
    var vPrecioTres;
    var vResul;
    var vResulFinal;

    vPrecioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    vPrecioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    vPrecioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    /* saco iva*/
    vResul = (vPrecioUno + vPrecioDos + vPrecioTres) * 21 / 100; 
    
    /* sumo iva */
    vResulFinal = (vPrecioUno + vPrecioDos + vPrecioTres) + vResul; 
   /* vPrecioDos + (vPrecioDos * 21) / 100; 
    vPrecioTres + (vPrecioTres * 21) / 100; */

    alert("Precio final con IVA " + vResulFinal.toFixed(2));

}