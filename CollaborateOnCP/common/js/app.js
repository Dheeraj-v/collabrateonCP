var myapp = angular.module('myapp',[])

myapp.controller('responsectrl', function ($scope,$http, $rootScope) {
	$http({
		method: 'GET',
		url:'https://reqres.in/api/users?page=2'

	}).success(function(data, status, headers, config){
			$scope.details = data.data

	}).error(function(data, status, headers, config){
			console.log('failure')
	})

$scope.UserDetails =[];
	$scope.UserDetails = [{
		'id': 1,
		'first_name' : 'John',
		'last_name': 'Kennedy'
	},
	{
		'id': 2,
		'first_name' : 'Royce',
		'last_name': 'Rock'

	}

	]
$scope.addUser = function () {
	if($scope.first_name && $scope.last_name ){
	$scope.UserDetails.push({
		'id': $scope.UserDetails.length + 1,
		'first_name':$scope.first_name,
		'last_name':$scope.last_name

	})
	$('#vendor-add-profile').modal('hide');

	}
	else{
		alert("Enter all the fields")
	}
}
 var index, selectedrow
$scope.editDetails =function(index){
	$rootScope.index = index
	 index = index
	 selectedrow = $scope.UserDetails[index];
	$scope.edit_firstname = selectedrow.first_name;
	$scope.edit_lastname = selectedrow.last_name;
	
	$scope.UserDetails[index].first_name = $scope.edit_firstname;
	$scope.UserDetails[index].last_name = $scope.edit_lastname;

}
$scope.saveEdited = function(){
	if($scope.edit_firstname && $scope.edit_lastname ){
	$scope.UserDetails[$rootScope.index].first_name = $scope.edit_firstname;
	$scope.UserDetails[$rootScope.index].last_name = $scope.edit_lastname;
	$('#vendor-edit-profile').modal('hide');
	}
	else{
		alert("Enter all the fields")
	}
}

	$scope.deleteRecord = function(index) {
		var response = confirm("Are You Sure want to delete a Record?");
		if(response) {
			$scope.UserDetails.splice(index,1);
		}
	}
});