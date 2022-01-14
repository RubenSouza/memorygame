const FRONT = "front_card"
const BACK = "back_card"
const CARD = "card"
const ICON = "icon"
const FLIP = "flip"




startGame()
function startGame() {

    startCards(game.cardsFromtechs());

}
function startCards(cards) {
    let gameBoard = document.getElementById('gameBoard')
    gameBoard.innerHTML = '';
    game.cards.forEach(card => {
        let cardElement = document.createElement('div')
        cardElement.id = card.id;
        cardElement.classList.add(CARD)
        cardElement.dataset.icon = card.icon;

        cardContent(card, cardElement)

        cardElement.addEventListener('click', flipCard)
        gameBoard.appendChild(cardElement);
    })
}
function cardContent(card, cardElement) {
    cardFace(FRONT, card, cardElement)
    cardFace(BACK, card, cardElement)
}

function cardFace(face, card, element) {
    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);
    if (face === FRONT) {
        let iconElement = document.createElement('img');
        iconElement.classList.add(ICON);
        iconElement.src = "./assets/images/" + card.icon + ".png";
        cardElementFace.appendChild(iconElement)
    } else {
        cardElementFace.innerHTML = "&lt/&gt";
    }
    element.appendChild(cardElementFace)
}



function flipCard() {

    if (game.setCard(this.id)) {
        this.classList.add("flip");
        if (game.secondCard) {
            if (game.checkMatch()) {
                game.clearCards();
                setTimeout(() => {
                    if (game.checkGameOver()) {
                        let gameOverLayer = document.getElementById("gameOver")
                        gameOverLayer.style.display = 'flex';
                    }
                }, 1000);
            } else {
                setTimeout(() => {
                    let = firstCardView = document.getElementById(game.firstCard.id)
                    let = secondCardView = document.getElementById(game.secondCard.id)
                    firstCardView.classList.remove('flip');
                    secondCardView.classList.remove('flip');
                    game.unflipCards();
                }, 1000)
            }
        }
    }
}

function restart() {
    game.clearCards();
    startGame();
    let gameOverLayer = document.getElementById("gameOver")
    gameOverLayer.style.display = 'none';
}
