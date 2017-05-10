'use strict';

/**
 * @ngdoc function
 * @name dastiApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the dastiApp
 */
angular.module('dastiApp')
  .controller('AdminCtrl', function (apiService,$scope,$window) {
    apiService.getOrders()
 	.then(function(result) {
 		$scope.orders = result;
 	})

 	$scope.completeOrder = function(id) {
 		apiService.removeOrder(id)
 		.then(function(reply) {
 			$window.location.reload();
 			if (reply) {
 				apiService.getOrders();
 			}
 		});
 	}
  });
