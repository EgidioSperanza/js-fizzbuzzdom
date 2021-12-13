// [X] STAMPIAMO IN CONSOLE I NUMERI DA 1 A 100
// [X] MILESTONE 1
//      Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
//      Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// [X] MILESTONE 2
//      Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
// [X] MILESTONE 3
//      Applica uno stile differente a seconda del valore dell’indice per i multipli di 3,
//      per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

// const container = document.querySelector("body > div");
// const genericClass = "number_box";
// const fizzClass = "fizz";
// const buzzClass = "buzz";
// const fizzBuzzClass = "fizz_buzz";
// const fizz = `<div class="${genericClass} ${fizzClass}"><span>Fizz</span></div>`;
// const buzz = `<div class="${genericClass} ${buzzClass}"><span>Buzz</span></div>`;
// const fizzBuzz = `<div class="${genericClass} ${fizzBuzzClass}"><span>FizzBuzz</span></div>`;
// const primeClass = "prime";

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     container.innerHTML += fizzBuzz;
//     console.log("FizzBuzz"); //DEBUG
//   } else if (i % 3 === 0) {
//     container.innerHTML += fizz;
//     console.log("Fizz"); //DEBUG
//   } else if (i % 5 === 0) {
//     container.innerHTML += buzz;
//     console.log("Buzz"); //DEBUG
//   } else if (isPrime(i)) {
//     container.innerHTML += `<div class="${genericClass} ${primeClass}"><span>${i} Is a Prime Number</span></div>`;
//   } else {
//     container.innerHTML += `<div class="${genericClass}"><span>${i}</span></div>`;
//     console.log(i); //DEBUG
//   }
// }

//MIGLIORIAMO IL TUTTO
const container = document.querySelector(".container");

for (let i = 1; i <= 100; i++) {
  let myText = "";
  let defaultClass = "number_box";
  let myClass = "";
  let multy3 = false;
  let multy3_5 = false;

  if (i % 3 === 0 || i % 5 === 0) {
    if (i % 3 === 0) {
      myClass = "fizz";
      myText = "Fizz";
      multy3 = true;
    }

    if (i % 5 === 0) {
      if (multy3) {
        myClass = "fizz";
        myOtherClass = "buzz";
        myText += "Buzz";
        multy3_5=true;
      } else {
        myClass = "buzz";
        myText = "Buzz";
      }
    }
  } else {
    if (isPrime(i)) {
      myText = `${i} è un numero primo`;
      myClass = "prime";
    } else {
      myText = i;
    }
  }
  const myDiv = document.createElement("div");
  container.append(myDiv);
  if (myClass !== "" || multy3) {
    (multy3_5)
      ? myDiv.classList.add(defaultClass, myClass, myOtherClass)
      : myDiv.classList.add(defaultClass, myClass);
  } else {
    myDiv.classList.add(defaultClass);
  }
  myDiv.append(myText);
}

function isPrime(n) {
  if (n < 2) return false;

  let q = Math.floor(Math.sqrt(n));

  for (let i = 2; i <= q; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}
