/* ================= Exercice 1 ================= */


function infoAboutMe(){
    console.log("Je suis DION FIACRE ARMEL J'AIME LE FOOTBALL ");
}
console.log(infoAboutMe());

function infoAboutPerson(personName, personAge, personFavoriteColor){
    
    console.log("Je suis " +personName + " et j'ai " + personAge + " ans et ma couleur prefere est " + personFavoriteColor);
}
console.log(infoAboutPerson("David", 45, "blue"));
console.log(infoAboutPerson("Josh", 12, "yellow"));


/* ================= Exercice 2 ================= */


let facture = "";
facture = parseInt(facture);
let FactureFinale = "";
FactureFinale = parseInt(FactureFinale);
let PourBoire = "";

function calculateTip(){
    facture = prompt("veuillez entrer un montant en dollars");
    
    if(facture < 50){
        PourBoire = console.log((facture * 20)/100)
    }else if(facture <= 200 && facture >= 50) {
        PourBoire = console.log((facture * 15)/100)
    }else{
        PourBoire = console.log((facture * 10)/100)
    }
    FactureFinale = facture + PourBoire;
    console.log(FactureFinale);
}

calculateTip();


/* ================= Exercice 3 ================= */


let somme = 0;
somme = parseInt(somme);

function isDivisible(diviseur){
    for (let iteration = 0; iteration <= 500; iteration++) {
        
        if((iteration % diviseur === 0) ){
            console.log(iteration)
            somme = somme + iteration;
            iteration++; 
        } 

        iteration++;   
    }
    console.log(somme);
}

isDivisible(75)


/* ================= Exercice 4 ================= */


const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ["banane","orange","pomme"];

function myBill() {
    let PrixTotal = 0;
    shoppingList.forEach(item => {

        if (prices.hasOwnProperty(item))
        PrixTotal = PrixTotal + Number(prices[item])

        if (stock.hasOwnProperty(item) && stock[item] > 0)
            stock[item]--
    })
    return PrixTotal;
}

console.log("Prix Total:" + myBill());

/* ================= Exercice 5 ================= */


function changeEnough(itemPrice, amountOfChange) {
    let sum = 0.25 * amountOfChange[0] + 0.1 * amountOfChange[1] + 0.05 * amountOfChange[2] + 0.01 * amountOfChange[3];

    if(sum > itemPrice){
        console.log("true")
    }else {
        console.log("False")
    }
}

console.log(changeEnough(14, [0, 100, 0, 0]));//False
console.log(changeEnough(6, [1, 100, 0, 0]));//True



/* ================= Exercice 6 ================= */


function hotelCost(numberOfNights) {
    numberOfNights = prompt("Veuillez entrer vos nombres de nuits ");
    numberOfNights = numberOfNights * 140;
}


function planeRideCost(destination) {
    let prices = {
        london: 183,
        paris: 220,
        other: 300
    }

    return prices.hasOwnProperty(destination.toLowerCase())
        ? prices[destination.toLowerCase()]
        : prices.other
}


function rentalCarCost(numberOfDays) {
    let total = numberOfDays * 40
    if (numberOfDays > 10)
        total -= total * 5 / 100
    return total
}


(function totalVacationCost() {
   
    let input,
        numberOfNights = 0,
        destination = "",
        numberOfDays = 0

    do {
        input = prompt("Combien de nuits souhaitez-vous passer à l'hôtel ?")
        if (!isNaN(input))
            numberOfNights = Number(input)
    } while (numberOfNights === 0)
    
    do {
        input = prompt("Quelle est votre destination ?")
        if (null !== input && /^\w+(\s?\w?)*$/.test(input))
            destination = input.trim()
    } while (destination === "")
    
    do {
        input = prompt("Combien de jours souhaitez-vous louer la voiture ?")
        if (!isNaN(input))
            numberOfDays = Number(input)
    } while (numberOfDays === 0)

    console.log("Nombre de nuits" + numberOfNights )
    console.log(hotelCost(numberOfNights))
    console.log("Destination" + destination )
    console.log(planeRideCost(destination))
    console.log("Nombre de jours " + numberOfDays )
    console.log(rentalCarCost(numberOfDays))

    console.log("Total : " + (hotelCost(numberOfNights) + planeRideCost(destination) + rentalCarCost(numberOfDays)));
})()