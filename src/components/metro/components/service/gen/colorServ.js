(function(){

	'use strict';

	angular.module('__metro.service').factory('__colorServ', function(){
		var randomColor = window.randomColor;
		function _gen(o, key, ops){
			if(angular.isUndefined(o[key])){
				o[key] = randomColor(ops);
			}
			return o;
		}
		function colorGen(array, key, ops){
			angular.forEach(array, function(o){
				o = _gen(o, key, ops);
			})
			return  array;
		}
		return {
			colorGen: colorGen
		}
	});
})();