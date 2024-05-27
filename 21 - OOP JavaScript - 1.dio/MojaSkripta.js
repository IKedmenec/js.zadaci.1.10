// constructor function
function Osoba () {
    this.ime = 'Ana',
    this.godine = 23
}

// kreiranje objekata (new)
const osoba1 = new Osoba();
const osoba2 = new Osoba();

// dodavanje property-a na "Osoba" objekt/funkciju/konstruktor
Osoba.prototype.spol = 'Ženski';

// prototype value od Osoba
console.log(Osoba.prototype);

// nasljeđivanje property-a "spol" od prototype objekta
console.log("Osoba1 spol =", osoba1.spol);
console.log("Osoba2 spol =", osoba2.spol);


// dodavanje metode na konstruktor funkcije
Osoba.prototype.pozdrav = function() {
    console.log("Bok",  this.ime);
}

osoba1.pozdrav(); // Bok Ana
osoba2.pozdrav(); // Bok Ana


// mijenjamo property vrijednost za prototype "spol"
Osoba.prototype = { spol: 'Muški'}
//Osoba.prototype = { spol: 'Muški', ime: 'Pero' }

// kreiramo novi objekt za osoba3
const osoba3 = new Osoba();


console.log(osoba3.ime, osoba3.spol); // Ana (??) Muški 
console.log(osoba1.ime, osoba1.spol); // Ana Ženski



//(??)
// ime: 'Pero'
//osoba3.ime = 'Pero';