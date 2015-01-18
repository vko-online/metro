(function(){

	'use strict';

	angular.module('__metro.nav').directive('metroNav', metroNav);

	function metroNav(){
		return{
			restrict: 'EA',
			templateUrl: 'components/metro/components/nav/components/metro-nav/metro-nav.html',
			link: function(){

			}
		};
	}

})();