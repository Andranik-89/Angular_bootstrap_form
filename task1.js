'use strict';

angular.module('form_app', [])
.controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {
    this.show_messages = false;
    $scope.showMessages = function () {
        this.show_messages = true;
    };

    $scope.form_inputs = [
    {input_name:"name", name:"Name", value:""},
    {input_name:"state", name:"State", value:""},
    {input_name:"country", name:"Country", value:""},
    {input_name:"phone", name:"Phone", value:""},
    {input_name:"username", name:"Username", value:""},
    {input_name:"password", name:"Password", value:""},
    {input_name:"email", name:"Email", value:""},
    ];

    $scope.cancel = function() {
        angular.forEach($scope.form_inputs, function (input) {
            input.value = "";
        });
    }

    $scope.save = function () {
        $http.post('path', angular.toJson($scope.form_inputs))
            .then(function() {
                alert($scope.form_inputs);
                alert('data successfully saved');
            });
    };

    var allCountries = [{
            Id: 1,
            CountryName: "Armenia"
        }, {
            Id: 2,
            CountryName: "Iran"
        }];
        var allStates = [{
            Id: 1,
            StateName: "Kotayk",
            CountryId: 1
        }, {
            Id: 2,
            StateName: "Syunik",
            CountryId: 1
        }, {
            Id: 3,
            StateName: "Mazandaran",
            CountryId: 2
        }];

        $scope.countries = allCountries;
        $scope.states = allStates;

        $scope.$watch('form_inputs[8].value', function () {
            $scope.states = allStates.filter(function (s) {
                return s.CountryId == $scope.form_inputs[8].value.Id;
            });
            $scope.form_inputs[6].value = "";
        });

}]);
