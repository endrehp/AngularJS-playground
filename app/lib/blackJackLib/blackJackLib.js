function Card(suit, rank) {
    this.suit = suit;        
    this.rank = rank;
    this.getValue = function() {

      if (isNaN(rank)) {
         return 10;
      } else {
        return parseInt(rank);
      } 
    };
  }

  Card.prototype.getCard = function() {
    
    return this.suit + this.rank;
  }



  function Deck() {
    this.cards = [];

    this.setDeck = function(){
      var suits = ['C', 'D', 'H', 'S'];
      var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

      for (var i=0; i<suits.length; i++) {

        for (var j=0; j<ranks.length; j++) {

          var card = new Card(suits[i], ranks[j]);
          this.cards.push(card);
        }
      }
    }

    this.printDeck = function() {

      for (var i=0; i<this.cards.length; i++) {

        console.log(this.cards[i].getCard());
      }
    }

    this.shuffleDeck = function() {

      if (this.cards.length > 0) {

        for (var i=0; i<1000; i++) {

          var rand1 = Math.floor(Math.random()*this.cards.length);
          var rand2 = Math.floor(Math.random()*this.cards.length);

          var temp = this.cards[rand1];
          this.cards[rand1] = this.cards[rand2];
          this.cards[rand2] = temp;

        }
      }
    }

    this.dealCard = function(){

      return this.cards.shift();          
    }
    
  }

  function Hand() {
    this.cards = [];

    this.setHand = function(deck) {

      // Pick first two cards from deck
      for (var i=0; i<2; i++) {
        this.cards.push(deck.dealCard());
      }
    }

    this.hit = function(deck) {

      // add one card to hand
      this.cards.push(deck.dealCard());

    }

    this.printHand = function() {
      
      var handStr = '';
      for (var i=0; i<this.cards.length; i++) {
        handStr += this.cards[i].getCard();

        if (i<this.cards.length - 1) {
          handStr += ', ';
        }

      }

      return handStr;
    }

    this.getHandValue = function() {

      var handValue = 0;

      for (var i=0; i<this.cards.length; i++) {
        handValue += this.cards[i].getValue();
      }

      return handValue;
    }
  }

  function Player(name) {
    this.name = name;
    this.bet = 0;
    this.cash = 0;
    this.hand = new Hand();

    this.adjustCash = function(amount) {

      if (amount < 0 && Math.abs(amount) >= this.cash) {
        console.log("Not enough cash");
        return false;
      } else {
        this.cash += amount;
        return true;
      }

    }

    this.placeBet = function(amount) {
      if (this.adjustCash(-amount)) {
        this.bet += amount;
      } else {
        console.log("Bet could not be placed");
      }
    }

  }
