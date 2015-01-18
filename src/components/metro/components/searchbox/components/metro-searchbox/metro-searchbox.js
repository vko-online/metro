(function(){

	'use strict';

	angular.module('__metro.searchbox').directive('metroSearchbox', metroSearchbox);

	function metroSearchbox(){
		return{
			restrict: 'EA',
			templateUrl: 'components/metro/components/searchbox/components/metro-searchbox/metro-searchbox.html',
			link: function(){

			}
		};
	}

})();