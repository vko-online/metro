(function(){

	'use strict';

	angular.module('__metro.list').directive('metroListGroup', metroListGroup);

	function metroListGroup(){
		return{
			restrict: 'EA',
			scope:{
				group: '='
			},
			templateUrl: 'components/metro/components/list/components/metro-list-group/metro-list-group.html',
			link: function($scope){
				$scope.groupWidth = function(array){
					return Math.ceil(array / 10) * 300 + 'px';
				}
			}
		};
	}
})();