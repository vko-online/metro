(function(){

	'use strict';

	angular.module('__metro.list').directive('metroListItem', metroListItem);

	function metroListItem(){
		return{
			restrict: 'EA',
			scope:{
				item: '='
			},
			templateUrl: 'components/metro/components/list/components/metro-list-item/metro-list-item.html',
			link: function(){

			}
		};
	}

})();