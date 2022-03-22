alert('Benvenuto nel gioco pari o dispari')
alert('il sistema sceglierà un numero e se il numero che avrai scelto sarà della stessa tipologia di quello che ha scelto il sistema avrai vinto! :D');
let numero= prompt('scegli un numero da 1 a 9');

/* converto stringa in numero intero */
parseInt(numero);
/* GENERO NUMERO RANDOM DA 1 A 9 */
let sistema = Math.floor((Math.random()*9) + 1);
alert('il sistema ha scelto il numero: ');
alert(sistema);
/* CONDIZIONE NUMERO PARI */
if((sistema==2 || sistema==4 || sistema==6 || sistema==8) && (numero==2 || numero==4 || numero==6 || numero==8)){

    alert('hai vinto, avete scelto entrambi un numero pari :D ');

 }
/* CONDIZIONE NUMERO DISPARI */
 else if((sistema==1 || sistema==3 || sistema==5 || sistema==7 || sistema==9) && (numero==1 || numero==3 || numero==5 || numero==7 || numero==9)) {

    alert('hai vinto, avete scelto entrambi un numero dispari :D ');

 }
 else if((numero>9) || (numero<1)){
   alert('SCELTA SBAGLIATA! DEVI SCEGLIERE UN NUMERO DA 1 A 9 ');
 }
 /* CONDIZIONE SE AVETE SCELTO NUMERI DI TIPOLOGIA DIVERSA */
    else {
        alert('non hai vinto :(... avete scelto due numeri di tipologia diversa');
    }

   