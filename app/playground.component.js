'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phonecatApp').
  component('playGround', {
    template:
        
            '<p>Playground component: {{world}}</p>' +
            '<table>' +
            '<tr><th>Row number</th></tr>' +
            '<tr ng-repeat="i in [0, 1, 2, 3, 4, 5, 6, 7]"><td ng-repeat="j in [0, 1, 2, 3, 4, 5, 6, 7]">{{(i+1)*(j+1)}}</td></tr>' +
            '</table>'
            ,
        
    controller: function PlaygroundController($scope) {
      $scope.world = "hello world";
    }
  });
