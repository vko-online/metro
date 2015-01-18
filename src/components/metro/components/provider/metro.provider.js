(function(){

	'use strict';

	angular.module('__metro.provider', []).provider('__ENV', fn);

	function fn(){
		this.defaults = {
			backend:{
				tiles: 'components/metro/components/mock/tiles.json'
			},
			grid:{
				tiles:{
					onlySquare: false,
					preferSmall: true,
					maxSize: 4,
					skip: [0,3],
					skipSize: [
						[0,0], [0,1], [0,2], [0,3], [0,4], 
						[1,0], [1,2], [1,3], [1,4], 
						[2,0], [2,1], [2,3], [2,4], 
						[3,0], [3,1], [3,2], [3,3], [3,4], 
						[4,0], [4,1], [4,3]
					],
					margin: 10,
					dimension: 60
				}
			}
		};
		this.$get = function(){
			return this.defaults;
		};

	}

})();