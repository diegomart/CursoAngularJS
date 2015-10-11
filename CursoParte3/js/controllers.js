(function(){


	'use strict';

	angular.module('controllers',[])
		.controller('SchoolCtrl', function($http){

		var School = this;

		School.title ="CUTonala";
		School.orderStudent='name';

		$http.get('js/students.json').success(function(data){

			School.students=data;


		});

		
	});



}());