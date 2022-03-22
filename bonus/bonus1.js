let persona1 = prompt('inserisci l eta di Simone');
let persona2 = prompt('inserisci l eta di Francesco');

parseInt (persona1);
parseInt(persona2);

if (persona1>persona2){
    alert ('Simone è più grande di Francesco')
}
else if (persona2>persona1){
    alert ('Francesco è più grande di Simone')
}
else{
    alert('Simone e Francesco hanno la stessa età')
}