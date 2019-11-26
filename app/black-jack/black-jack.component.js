'use strict';


// Register `blackJack` component, along with its associated controller and template
angular.
  module('blackJack').
  component('blackJack', {
    templateUrl: 'black-jack/black-jack.template.html',
    controller: function BlackJackController($scope) {

      $scope.hei = "hei";

      this.gameState = false;
      // Start game
      
      this.deck = new Deck();
      this.deck.setDeck();
      this.deck.shuffleDeck();
      this.player = new Player("Kenneth");

      this.startGame = function() {

        this.gameState = true;
        console.log("Game started");

        this.player.hand.setHand(this.deck);
        console.log("hand: " + this.player.hand);
      };

      /*
      console.log("place bet");

      
      player.placeBet(bet);

      console.log("Bet placed");

      console.log("Dealing")
      player.hand.setHand(deck);

      console.log(player.name + "'s hand: " + player.hand.printHand() + " - Value: " + player.hand.getHandValue());
*/

    }
  });
