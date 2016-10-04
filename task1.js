// Copyright (c) 2016 Freelancer. All rights reserved.
'use strict';

angular.module('Freelancer.main', [])
.controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {

//    $scope.test = function () {
//       alert("This is only for test");
//   }
    this.show_messages = false;
    $scope.showMessages = function () {
        this.show_messages = true;
    };

    $scope.form_inputs = [
    {input_name:"first_name", name:"First Name", value:""},
    {input_name:"last_name", name:"Last Name", value:""},
    {input_name:"company_name", name:"Company Name", value:""},
    {input_name:"company_address", name:"Company address", value:""},
    {input_name:"company_address2", name:"Company address 2", value:""},
    {input_name:"city", name:"City", value:""},
    {input_name:"state", name:"State", value:""},
    {input_name:"zip_code", name:"Zip Code", value:""},
    {input_name:"country", name:"Country", value:""},
    {input_name:"company_phone", name:"Company phone", value:""},
    {input_name:"username", name:"Username", value:""},
    {input_name:"password", name:"Password", value:""},
    {input_name:"password_confirm", name:"Confirm password", value:""},
    {input_name:"email", name:"Email", value:""},
    {input_name:"email_confirm", name:"Confirm email", value:""},
    {input_name:"company_industry", name:"Company Industry", value:""},
    {input_name:"number_of_employees", name:"Number of employees", value:""},
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
            CountryName: "USA"
        }, {
            Id: 2,
            CountryName: "Australia"
        }];
        var allStates = [{
            Id: 1,
            StateName: "Washington",
            CountryId: 1
        }, {
            Id: 2,
            StateName: "New York",
            CountryId: 1
        }, {
            Id: 3,
            StateName: "Queensland",
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