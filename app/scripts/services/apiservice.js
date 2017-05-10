'use strict';

/**
 * @ngdoc service
 * @name dastiApp.apiService
 * @description
 * # apiService
 * Service in the dastiApp.
 */
angular.module('dastiApp')
  .service('apiService', function ($http) {
  	var apiPrefix = "http://127.0.0.1:3000";
  	$http.defaults.headers.post["Content-Type"] = "text/plain";

    this.getMenu = function() {
        return $http.get(apiPrefix+'/getItems')
        .then(function(result) {
            return result.data;
        },
        function(err){
        	console.log("error",err)
        	return err
        }
        );
    };

    this.deleteItem = function(id) {
    	return $http.post(apiPrefix+'/deleteItem', $.param({itemId:id}), {headers:{'Content-Type': 'application/x-www-form-urlencoded'}})
    	.then(function(result) {
    		if(result.data) {
    			return result.data;
    		}
    	},
    	function(err) {
    		console.log("error",err)
    		return err
    	});
    };

    this.addItem = function(item) {
    	return $http.post(apiPrefix+'/postItem', $.param(item), {headers:{'Content-Type': 'application/x-www-form-urlencoded'}})
    	.then(function(result) {
    		if(result.data) {
    			return result.data;
    		} else {
    			return "No orders";
    		}
    	},
    	function(err) {
    		console.log("error",err)
    		return err
    	});
    };

    this.getOrders = function() {
        return $http.get(apiPrefix+'/getOrder')
        .then(function(result) {
            return result.data;
        },
        function(err){
        	console.log("error",err)
        	return err
        });
    };

    this.removeOrder = function(id) {
    	return $http.post(apiPrefix+'/deleteOrder', $.param({orderId:id}), {headers:{'Content-Type': 'application/x-www-form-urlencoded'}})
    	.then(function(result) {
    		if(result.data) {
    			return result.data;
    		} else {
    			return "No orders";
    		}
    	},
    	function(err) {
    		console.log("error",err)
    		return err
    	});
    };

    this.addOrder = function(order, price) {
    	return $http.post(apiPrefix+'/postOrder', $.param(order, price), {headers:{'Content-Type': 'application/x-www-form-urlencoded'}})
    	.then(function(result) {
    		if(result.data) {
    			return result.data;
    		} else {
    			return "No orders";
    		}
    	},
    	function(err) {
    		console.log("error",err)
    		return err
    	});
    };


  });