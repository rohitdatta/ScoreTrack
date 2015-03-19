var app = angular.module('myApp', ['ngMaterial']);
app.controller('appController', ['$scope', function($scope) {
      $scope.events = [
        '200 Yard Medley Relay',
        '200 Yard Freestyle',
        '200 Yard Individual Medley',
        '50 Yard Freestyle',
        '1 Meter Diving',
        '100 Yard Butterfly',
        '100 Yard Freestyle',
        '500 Yard Freestyle',
        '200 Yard Freestyle Relay',
        '100 Yard Backstroke',
        '100 Yard Breaststroke',
        '400 Yard Freestyle Relay'
    ];

    $scope.awayEventScores = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ]

      $scope.isCollapsed = false;


    $scope.getHomeEventValue = function(index) {
        return $scope.homeEventScores[index];
    }

    $scope.setAwayValues = function(index, a1, a2, a3, a4, a5) {
        var total = 0;
        if (index == 0 || index == 8 || index == 11) {
            if (angular.isNumber(a1) && a1 == 6)
                total += 8;
            if (angular.isNumber(a2) && a2 == 4)
                total += a2;
            if (angular.isNumber(a3) && a3 == 3)
                total += 2;
        } else {
            if (angular.isNumber(a1)) {
                total += a1;
            }
            if (angular.isNumber(a2)) {
                total += a2;
            }
            if (angular.isNumber(a3)) {
                total += a3;
            }
            if (angular.isNumber(a4)) {
                total += a4;
            }
            if (angular.isNumber(a5)) {
                total += a5;
            }
        }
        $scope.awayEventScores[index] = total;
    }

    $scope.getAwayEventValue = function(index) {
        return $scope.awayEventScores[index];
    }

    $scope.setHomeValues = function(index, h1st, h2nd, h3rd, h4th, h5th) {
        var total = 0;
        if (index == 0 || index == 8 || index == 11) {
            if (angular.isNumber(h1st) && h1st == 6)
                total += 8;
            if (angular.isNumber(h2nd) && h2nd == 4)
                total += 4;
            if (angular.isNumber(h3rd) && h3rd == 3)
                total += 2;
        } else {
            if (angular.isNumber(h1st)) {
                total += h1st;
            }
            if (angular.isNumber(h2nd)) {
                total += h2nd;
            }
            if (angular.isNumber(h3rd)) {
                total += h3rd;
            }
            if (angular.isNumber(h4th)) {
                total += h4th;
            }
            if (angular.isNumber(h5th)) {
                total += h5th;
            }
        }
        $scope.homeEventScores[index] = total;
        // console.log($scope.homeEventScores[0]);
        // return $scope.homeEventScores[index];
    }

    $scope.homeEventScores = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ]

    $scope.sumArray = function(array) {
        var total = 0;
        for (var i = 0; i < array.length; i++) {
            total += array[i];
        }
        return total;
    }
}]);


app.run(function(){
});

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryColor('blue')
    .accentColor('green');

});