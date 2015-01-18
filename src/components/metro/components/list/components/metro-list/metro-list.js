(function(){

	'use strict';

	angular.module('__metro.list').directive('metroList', metroList);

	function metroList(__dbServ){
		return{
			restrict: 'EA',
			templateUrl: 'components/metro/components/list/components/metro-list/metro-list.html',
			link: function($scope){
				$scope._groups = __dbServ.cache.tiles;
			}
		};
	}
	metroList.$injector = ['__dbServ'];
})();