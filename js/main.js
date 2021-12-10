// [X] STAMPIAMO IN CONSOLE I NUMERI DA 1 A 100
// [X] MILESTONE 1 
//      Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
//      Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// [ ] MILESTONE 2
//      Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
// [ ] MILESTONE 3
//      Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, 
//      per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

for(let i=1; i<=100;i++){
    if(i%3===0 && i%5 ===0){
        console.log('FizzBuzz');
    }else if(i%3===0){
        console.log('Fizz');
    }else if(i%5===0){
        console.log('Buzz');
    }else {console.log(i);}
}