(function(){

	'use strict';

	angular.module('__metro.nav').directive('metroUser', metroUser);

	function metroUser(){
		return{
			restrict: 'EA',
			templateUrl: 'components/metro/components/nav/components/metro-user/metro-user.html',
			link: function(){

			}
		};
	}

})();