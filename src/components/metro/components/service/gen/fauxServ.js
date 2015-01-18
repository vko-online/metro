(function(){

	'use strict';

	angular.module('__metro.service').factory('__fauxServ', fn);

	function fn(__ENV){

		function randomize(end){
			if(__ENV.grid.tiles.preferSmall){
				var randomnumber=Math.floor(Math.random()*(end))+1;
				var randomnumber2=Math.floor(Math.random()*(end))+1;
				return Math.min(randomnumber, randomnumber2);
			}
			else{
				var randomnumber=Math.floor(Math.random()*(end+1));
				return randomnumber;
			}
		}
		function _genSize(o, key1, key2){
			if(angular.isUndefined(o[key1]) || angular.isUndefined(o[key2])){
				if(__ENV.grid.tiles.onlySquare){
					var _num = randomize(__ENV.grid.tiles.maxSize);
					o[key1] = o[key2] = _num;
					return o;
				} else{
					var _nums = [randomize(__ENV.grid.tiles.maxSize), randomize(__ENV.grid.tiles.maxSize)];
					var _contains = __ENV.grid.tiles.skipSize.filter(function(a){
						return angular.equals(a, _nums);
					})
					if(_contains.length === 0){
						o[key1] = _nums[0];
						o[key2] = _nums[1];
						return o;
					} else{
						return _genSize(o, key1, key2);
					}
				}
			} else {
				return o;
			}
		}
		var initR = 1, initC = 1;
		function _genPos(o, r, c, array){
			if(angular.isUndefined(o[r]) || angular.isUndefined(o[c])){
				o[r] = initR;
				o[c] = initC;
				// initR = initR + o['y'];
				// if(initR >= 3){
				// 	initC = initC + o['x'];
				// }
			} else{
				return o;
			}
		}
		function genSize(array, x, y){
			angular.forEach(array, function(o){
				_genSize(o, x, y);
			});
			return array;
		}
		function genPos(array, r, c){
			angular.forEach(array, function(o){
				_genPos(o, r, c, array);
			});
			return array;
		}
		return{
			genSize: genSize,
			genPos: genPos
		}

	}
	fn.$injector = ['__ENV'];
})();