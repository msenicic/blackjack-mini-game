let desc = document.getElementById("desc");
let cards = document.getElementById("cards");
let sum = document.getElementById("sum");
let btnStart = document.getElementById("start");
let btnNew = document.getElementById("new");
let person = document.getElementById("person");
let input = document.getElementById("input");

let card;
let sums;
let person1 = {};

function randomCard() {
    let card = Math.floor(Math.random()*13) + 1;
    if(card === 1) {
        return 11;
    } else if(card>10) {
        return 10;
    } else {
        return card;
    }
}

function checkResults() {
    if(sums<21) {
        desc.textContent = "You want to pick next card?";
    } else if(sums===21) {
        desc.textContent = "You won!";
        btnNew.setAttribute("disabled","");
        person1.price += 10;
    } else {
        desc.textContent = "You lose!";
        btnNew.setAttribute("disabled","");
        person1.price -= 10;
    }
}

function renderGame() {
    sums = 0;
    cards.textContent = "Cards:";
    sum.textContent = "Sum: "
    person.textContent = "";
    for(i=0;i<card.length;i++) {
        cards.textContent += " " + card[i];
        sums += card[i];
    }
    sum.textContent += sums;
    checkResults(); 
    person.textContent = person1.name + ": $" + person1.price;
}

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     btnStart.removeAttribute("disabled");
     person1 = {
         name: input.value,
         price: 200
     }
     person.textContent = person1.name + ": $" + person1.price;
    }
});

btnStart.addEventListener("click",function() {
    card = [];
    card.push(randomCard());
    card.push(randomCard());
    btnNew.removeAttribute("disabled");
    renderGame();
});

btnNew.addEventListener("click", function() {
    let newCard = randomCard();
    card.push(newCard);
    renderGame(); 
});