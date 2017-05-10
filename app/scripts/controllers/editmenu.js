'use strict';

/**
 * @ngdoc function
 * @name dastiApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the dastiApp
 */
 angular.module('dastiApp')
 .controller('editMenuCtrl', function (apiService,$scope,$window) {
 	$scope.types = ["Meat", "Flavor", "Addon", "Drink"];
 	$scope.nums = [0,1,2,3,4,5];
 	$scope.i = 0;
 	apiService.getMenu()
 	.then(function(result) {
 		$scope.menu = result;
 		$scope.i = $scope.menu.length;
 	})

 	$scope.removeItem = function(id) {
 		apiService.deleteItem(id)
 		.then(function(reply) {
 			$window.location.reload();
 			if (reply) {
 				apiService.getMenu();
 			}
 		});
 	}

 	$scope.addItem = function(name, type, price, rating) {
 		var item = {
 			'_id' : $scope.i,
 			'type':type,
 			'price':price,
 			'rating':rating
 		}
 		apiService.addItem(item)
 		.then(function(reply) {
 			$window.location.reload();
 			if (reply) {
 				apiService.getMenu();
 			}
 		});
 	}

 });