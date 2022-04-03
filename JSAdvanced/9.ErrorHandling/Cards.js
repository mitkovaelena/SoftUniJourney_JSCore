
function printDeckOfCards(cards) {
    class Card {
        constructor(face, suit) {
            this.Suits = {
                C: "\u2663",
                D: "\u2666",
                H: "\u2665",
                S: "\u2660"
            };

            this.Suitts = ["C", "D", "H", "S"]
            this.Faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
            if (!this.Faces.includes(face)) {
                throw new Error("Invalid card face: " + face)
            }
            if (!this.Suitts.includes(suit)) {
                throw new Error("Invalid card suit: " + suit)
            }
            [this._face, this._suit] = [face, this.Suits[suit]]
        }

        get face() {
            return this._face
        }

        set face(face) {
            if (!this.Faces.includes(face)) {
                throw new Error("Invalid card face: " + face)
            }
            this._face = face
        }

        get suit() {
            return this._suit
        }

        set suit(suit) {
            if (!this.Suitts.includes(suit)) {
                throw new Error("Invalid card suit: " + suit)
            }
            this._suit = suit
        }


        toString() {
            return `${this._face}${this._suit}`
        }
    }

    let deck = []
    for(let c of cards){
        let suit = c.substring(c.length-1, c.length)
        let face = c.substring(0, c.length-1)
        let card;
        try {
             card = new Card(face, suit)
        }
        catch(ex) {
            console.log(`Invalid card: ${c}`)
            return
        }
        deck.push(card.toString())
    }
    console.log(deck.join(' '));
}

console.log(printDeckOfCards(['AS', '10D', 'KH', '2C']));