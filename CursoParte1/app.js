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

<<<<<<< HEAD
			$rootScope.pillos="Alumno y programa en apache";
=======
			$rootScope.pillos="?";
>>>>>>> 6a011aff3e2c45686efefd4341de27a2394deded

		});
}());
