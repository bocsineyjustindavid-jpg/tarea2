/* 1
let nombrejugador = prompt("Ingrese su nombre de jugador:");
let experiencia = 0;
let misionescompletadas = 0;
let continuar = true;

while(continuar){
    let mision = parseFloat(prompt("Ingrese los puntos obtenidos"));

    if(mision > 0){
        experiencia += mision;
        misionescompletadas++;
    }else{
        alert("Puntos no validos");
    }

let respuesta = prompt("Quiere registrar otra mision (si / no)");
if(respuesta !== "si"){
    continuar = false;
}

}

let nivel = "";

if (experiencia < 500){
    nivel = "Novato";
}else if(experiencia <= 999){
    nivel = "Avanzado";
}else if(experiencia <=1999){
    nivel = "Experto";
}else{
    nivel = "Leyenda";
}

document.write("Nombre del jugador:" + nombrejugador + "<br>");
document.write("Total de experiencia:" + experiencia + "<br>");
document.write("Total de misiones:" + misionescompletadas + "<br>");
document.write("Nivel:" + nivel);
*/


let equipo1 = prompt("Nombre del primer equipo:");
let goles1 = parseInt(prompt("Goles anotados por:" + equipo1 + ":"));

let equipo2 = prompt("Nombre del segundo equipo:");
let goles2 = parseInt(prompt("Goles anotados por:" + equipo2 + ":"));

let resultados = "";
let puntos1 = 0;
let puntos2 = 0;

if(goles1 > goles2){
    let diferencia = goles1 - goles2;
    resultados = "Ganador:" + equipo2 + "(Diferencia de " + diferencia + "gol/es)";
    puntos1 = 0;
    puntos2 = 3;
}else{
    resultados = "Empate";
    puntos1 = 1;
    puntos2 = 1;
}

document.write("Marcador:" + equipo1 + " " + goles1 + " - " + goles2 + " " + equipo2 + "<br>");
document.write("Resultado:" + resultado + "<br>");
document.write("Puntos asignados:");
document.write(equipo1 + ": " + puntos1 + "<br>");
document.write("<li>" + equipo2 + ": " + puntos2 + " punto(s)</li>");