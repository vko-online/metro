(function(){
	'use strict';

	angular.module('metro.animation', []);

	angular.module('metro.animation').factory('$velocity', function($metro, $rootElement){
		if($metro.conf.animation.dirty){
			$rootElement.data("$$ngAnimateState").running = false;
		}
		return $.velocity || Velocity;
	})
})();