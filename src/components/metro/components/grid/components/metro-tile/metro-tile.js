(function(){

	'use strict';

	angular.module('__metro.grid').directive('metroTile', metroTile);

	function metroTile(){
		return{
			restrict: 'EA',
			templateUrl: 'components/metro/components/grid/components/metro-tile/metro-tile.html',
			scope:{
				item: '='
			},
			link: function(){

			}
		};
	}

})();