(function(){
	'use strict';

	angular.module('test', ['metro']).run(function($rootScope){
		$rootScope.test = 'Init complete!';
	});
})();