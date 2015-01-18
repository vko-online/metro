(function(){

	'use strict';

	angular.module('__metro.grid').directive('metroGridGroup', metroGridGroup);

	function metroGridGroup($timeout, __ENV){
		return{
			restrict: 'EA',
			templateUrl: 'components/metro/components/grid/components/metro-grid-group/metro-grid-group.html',
			scope:{
				group: '='
			},
			link: function($scope, elem){
				var _gridster = undefined, dragging = false;
				var init = function(){
					$timeout(function(){
						console.log(__ENV.grid.tiles);
						_gridster = $('.gridster ul').gridster({
		                    widget_margins: [__ENV.grid.tiles.margin, __ENV.grid.tiles.margin],
		                    widget_base_dimensions: [__ENV.grid.tiles.dimenstion, __ENV.grid.tiles.dimenstion],
		                    shift_larger_widgets_down: false,
		                    widget_selector: 'li',
		                    draggable:{
		                    	start: function(e, ui){
		                    		dragging = true;
		                    	},
		                    	stop: function(e, ui){
		                    		
		                    	}
		                    }
		                });
					}, 1);
				}
				init();
				var oldContent = undefined;
				$scope.childer = function(item, text){
					if(dragging === false){
						if(item.child){
							$scope.item = {
								child: item.child, 
								text: text
							};
							elem.html('<button ng-click="childerRevert()" class="backer-btn">{{"< "+ item.text}}</button><metro-list-view-item list="item.child"></metro-list-view-item>');
							$compile(elem.contents())($scope);
						} 
					}

					dragging = false;
				}
				$scope.childerRevert = function(){
					elem.html('<metro-grid-group group="group"></metro-tile-group>');
					$compile(elem.contents())($scope);
				}
				function grabMax(arr, key1, key2){
					var max = 0;
					angular.forEach(arr, function(o){
						if(o[key1] + o[key2] > max)
							max = o[key1] + o[key2] -1 ;
					});
					return max;
				}
				var width = (__ENV.grid.tiles.margin * 2) + __ENV.grid.tiles.dimenstion;
				$scope.groupwidth = {width: grabMax($scope.group.c, 'c', 'x') * width + 'px'};
			}
		};
	}

})();