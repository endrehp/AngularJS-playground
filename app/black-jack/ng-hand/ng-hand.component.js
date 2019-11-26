'use strict';


// Register `blackJack` component, along with its associated controller and template
angular.
  module('ngHand').
  component('ngHand', {
    templateUrl: 'black-jack/ng-hand/ng-hand.template.html',
    bindings: {
      hand: '<'
    },
    controller: function HandController($scope) {
     
      this.$onInit = function() {console.log("From parent: " + this.hand);};

    }
  });
