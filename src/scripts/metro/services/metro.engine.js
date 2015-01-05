(function(){
	'use strict';

	angular.module('metro.engine', []);

	angular.module('metro.engine').provider('$metroProvider', function(){
		this.defaults = {
			views: {
				list: {

				},
				tile: {
					background: 'assets/images/metro-bg1.jpg'
				}
			},
			tiles: {
				url: 'scripts/metro/data/tiles.json'
			}
		};
		var _defaults = this.defaults;
		this.$get = function(){
			return _defaults;
		}
	});

	angular.module('metro.engine').factory('$metroEngine', function($http, $q){
		var metro = function(data){
			angular.extend(this, data);
		};
		metro.GetTiles = function(){
			return $http.get('scripts/metro/data/tiles.json');
		}
		return metro;
	});

})();