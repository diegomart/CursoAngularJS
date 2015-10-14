(function(){


	'use strict';
	angular.module('app',[])
		.run(function($rootScope){

			$rootScope.message= 'This is a funny message';
			$rootScope.friends=[{

				"name": "Juan Diego" ,
				"age": "22"
			},{


				"name": "Fernando",
				"age": "23"
			},{

				"name": "Issac",
				"age": "12"
			
			}];

			$rootScope.pillos="Alumno y programa en apache";

		});
}());
