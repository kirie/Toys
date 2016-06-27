// Given an array containing a deck of cards, implement a function that shuffles the deck.
// var deck = orderedDeck()
// Input: deck = ["A♥","2♥","3♥",...,"J♦","Q♦","K♦"]

// shuffleDeck(deck);
// Output: deck = ["2♠","J♣","A♦", ... ,"7♣","8♣","K♠"]

const shuffleDeck = (deck) => {
  let result = []
  let decklen = deck.length
  while (decklen) {
    let rando = Math.floor(Math.random() * deck.length)
    if (rando in deck) {
      result.push(deck[rando])
      delete deck[rando]
      decklen--
    }
  }
  return result
}

// create an empty array
// loop while decklength is greater than 0
// use Math.floor(Math.random() * deck.length) to get a random number
// if it exists in the deck
