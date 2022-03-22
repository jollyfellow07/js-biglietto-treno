let km = prompt('digita quanti km devi percorrere');
let eta = prompt('digita quanti anni hai');
let costante = 0.21;
let risultato; 
/* converto stringa in numero intero */
parseInt (km);
parseInt(eta);
parseFloat(risultato);


if (eta < 18 ){
   risultato = ((costante * km)*20) / 100
}
else if (eta> 65){
    risultato = ((costante * km)*40) / 100
}
else if (eta>=18 || eta<=65){
    risultato=costante*km
}
/*approssimo il risultato*/
risultato = risultato.toFixed(2);
  /*Stampo in html i chilometri e l'età*/
document.getElementById("eta").innerHTML = eta;
document.getElementById("km").innerHTML = km;
document.getElementById("risultato").innerHTML = risultato;