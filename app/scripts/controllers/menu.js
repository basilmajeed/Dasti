'use strict';

/**
 * @ngdoc function
 * @name dastiApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the dastiApp
 */
 angular.module('dastiApp')
 .controller('MenuCtrl', function (apiService,$scope) {
 	$scope.order = [];
 	$scope.price = [];
 	$scope.checker = {};
 	$scope.total = 0;

 	apiService.getMenu()
 	.then(function(result) {
 		$scope.menu = result;
 		$scope.order = []
 		$scope.counter = 0;
 	})

 	$scope.submitOrder = function(order, price) {
 		apiService.addOrder(order)
 		.then(function(reply) {
 			if (reply) {
 				apiService.getOrders();
 			}
 		});
 	}

 	$scope.addToOrder = function(item, event) {
 		if(item.type == "Meat") {
 			$scope.order[0] = item.name;
 			$scope.price[0] = item.price;
 		} else if(item.type == "Flavor") {
 			$scope.order[1] = item.name;
 			$scope.price[1] = 0;
 		} else if(item.type == "Drink") {
 			$scope.order[2] = item.name;
 			$scope.price[2] = item.price;
 		} else {
 			// $scope.checker[item._id] =
 			$scope.order.push(item.name);
 			$scope.price.push(item.price);
 			alert(event.target.checked);
 			console.log("$scope.order: ", $scope.order);
 			console.log("$scope.price: ", $scope.price);
	 	}
 	}

 });
