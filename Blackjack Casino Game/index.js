let cards = []
let sum = 0
let hasBlackjack = false;
let isAlive = false;
let message = ""

let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardEl = document.getElementById('card-el')

let player = {
    playerName: "Husam",
    playerChips: 145 
}

let playerEl = document.getElementById('player-el')
playerEl.textContent = player.playerName + ": $" + player.playerChips

let getRandomCard = ()=>{
    let randomCard = Math.floor(Math.random()*13)+1
    console.log(randomCard);
    
    if (randomCard==1) {
        return 11        
    } else if (randomCard >= 11) {
        return 10
    } else{
        return randomCard
    }
}
let startGame = ()=>{
    isAlive=true;
    let card1 = getRandomCard()
    let card2 = getRandomCard()
    cards = [card1,card2]
    sum= card1+card2
    renderGame();
}
let renderGame = () => {
    cardEl.textContent = "Cardss: " + cards.join(" ")
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card? 🤔"
    } else if( sum === 21){
        message = "Wohoo! You've got Blackjack! 🎉"
        hasBlackjack = true;
    } else if( sum > 21){
        message = "You're out of the game! 💔"
        isAlive = false
    }     
    messageEl.textContent = message
}
let newCard = () => {
    if(isAlive && !hasBlackjack){
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        renderGame()
    }

}
