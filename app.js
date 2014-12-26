angular.module('ScoreTracker', [])
.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.individualEvents = [
  '200 Free',
  '200 IM',
  '50 Free',
  'Diving',
  '100 Fly',
  '100 Free',
  '500 Free',
  '100 Back',
  '100 Breast',
];

	$scope.relayEvents = [
	'4x50 Medley Relay',
	'4x50 Free Relay',
	'4x100 Free Relay'
];
	$scope.places = [
	'1',
	'2',
	'3',
	'4',
	'5',
	'6'
	];

	$scope.homeRelayEventScores = [
	0,
	0,
	0]

	$scope.setHomeRelayValues = function(index, h1st, h2nd, h3rd) {
		var total = 0;
		if (angular.isNumber(h1st)) {
			total += h1st;
		}
		if (angular.isNumber(h2nd)) {
			total += h2nd;
		}
		if (angular.isNumber(h3rd)) {
			total += h3rd;
		}

		$scope.homeRelayEventScores[index] = total;
		console.log($scope.homeRelayEventScores[0]);
		return $scope.homeRelayEventScores[index];
	}

	$scope.homeIndividualEventScores = [
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

	$scope.setHomeIndividualValues = function(index, h1st, h2nd, h3rd, h4th, h5th) {
		var total = 0;
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


		$scope.homeIndividualEventScores[parseInt(index)] = total;
		// console.log(index + "" + h1st);
		// console.log($scope.homeIndividualEventScores[0]);
		return $scope.homeIndividualEventScores[index];
	}


	$scope.getHomeTotal = function() {
		var homeIndividualTotal = 0;
		for (var i = 0; i < $scope.homeIndividualEventScores.length; i++) {
			homeIndividualTotal += $scope.homeIndividualEventScores[i];
		}
		return homeIndividualTotal;
	}

	// $scope.homeName = "Darien Blue Wave";

        $scope.selected = {"1":false,"2":false,"3":false};
        $scope.records = [
            {"id":1,"name":"1st (6)","value":6},
            {"id":2,"name":"2nd (4)","value":4},
            {"id":3,"name":"3rd (3)","value":3},
            {"id":4,"name":"4th (2)","value":2},
            {"id":5,"name":"5th (1)","value":1},
            {"id":6,"name":"6th (0)","value":0}
        ];
        $scope.maxSelected = function(){
            var count = 0;
            for(x in $scope.selected){
                if($scope.selected[x]) count++;
            }
            return (count===3) ? true : false;
        };
}]);