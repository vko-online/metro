(function(){

	'use strict';

	angular.module('__metro.grid').directive('metroGrid', Grid);

	function Grid(__dbServ){
		return{
			restrict: 'EA',
			templateUrl: 'components/metro/components/grid/components/metro-grid/metro-grid.html',
			link: function($scope){
				$scope._groups = __dbServ.cache.tiles;
			}
		};
	}
	Grid.$injector = ['__dbServ'];
})();