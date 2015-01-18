(function(){

	'use strict';

	angular.module('__metro.tab').directive('metroTab', metroTab);

	function metroTab(){
		return{
			restrict: 'EA',
			templateUrl: 'components/metro/components/tab/components/metro-tab/metro-tab.html',
			link: function($scope){
				$scope.gridview = true;
				$scope.changeView = function(){
					$scope.gridview = !$scope.gridview;
				};
			}
		};
	}

})();