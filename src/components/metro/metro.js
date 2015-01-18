(function(){

	'use strict';

	angular.module('metro', [
		'__metro.nav',
		'__metro.tab',
		'__metro.searchbox',
		'__metro.service',
		]).directive('metro', metro);

	function metro(__dbServ){
		return {
			restrict: 'EA',
			scope: {},
			templateUrl: 'components/metro/metro.html',
			link: function($scope){
				__dbServ.init();
			}
		};
	}
	metro.$injector = ['__dbServ'];
})();