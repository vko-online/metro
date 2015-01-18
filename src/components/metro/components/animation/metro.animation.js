(function(){

	'use strict';

	angular.module('__metro.animation', []).factory('__anim', fn);

	function fn(){
		return{
			$tweenMax: window.TweenMax || {},
			$timelineMax: window.TimelineMax || {}
		}
	}

})();