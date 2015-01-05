(function(){
	'use strict';

	angular.module('metro.animation', []);

	angular.module('metro.animation').factory('$velocity', function(){
		return $.velocity || Velocity;
	})
})();