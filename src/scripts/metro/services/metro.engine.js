(function(){
	'use strict';

	angular.module('metro.engine', []);

	angular.module('metro.engine').provider('$metro', function(){
		this.defaults = {
			views: {
				list: {

				},
				tile: {
					background: 'assets/images/metro-bg1.jpg',
					single: false
				}
			},
			tiles: {
				url: 'scripts/metro/data/tiles.json',
				size:{
					margin: 6,
					dimenstion: 60
				}
			},
			conf:{
				animation: {
					dirty: false
				}
			}
		};
		var _defaults = this.defaults;
		this.$get = function(){
			return _defaults;
		}
	});

	angular.module('metro.engine').factory('$metroEngine', function($http, $q, $metro){
		var metro = function(data){
			angular.extend(this, data);
		};
		metro.GetTiles = function(){
			return $http.get($metro.tiles.url);
		}
		return metro;
	});

})();