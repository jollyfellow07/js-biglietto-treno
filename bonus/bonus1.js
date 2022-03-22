let persona1 = prompt('inserisci l eta di Simone');
let persona2 = prompt('inserisci l eta di Francesco');
/* converto stringa in numero intero */
parseInt (persona1);
parseInt(persona2);

/* SE SIMONE E' PIU GRANDE DI FRANCESCO */
if (persona1>persona2){
    alert ('Simone è più grande di Francesco')
}
/* SE FRANCESCO E' PIU GRANDE DI SIMONE */
else if (persona2>persona1){
    alert ('Francesco è più grande di Simone')
}
/* SE AVETE LA STESSA ETA */
else{
    alert('Simone e Francesco hanno la stessa età')
}