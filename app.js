var app=angular.module('myApp',['ngResource']);

app.controller('myController', ['$scope','$resource', function($scope,$resource){
	
	$scope.message="this is messgae"
	$scope.getWeatherData= function(){
		$resource("https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1")
		.get(function(data){
			console.log(data)
		})
	// $http.get("https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1")


	/*.then(function(response){
		console.log(response)
		$scope.data=response

	})*/
	
	}
}])