(function(){
	'use strict';

	angular.module('metro.tile.view', [
			'ngAnimate',
			'metro.hscroll',
			'metro.tile.store',
			'metro.searchbox.tile',
			'metro.engine'
		]);


	angular.module('metro.tile.view').directive('metroTileView', function($timeout, $metro){
		return{
			restrict: 'EA',
			scope: {
				groups: '=view'
			},
			templateUrl: 'scripts/metro/tile/metro.tile.view.html',
			link: function($scope, elem, attr){
				
				// $velocity(document.querySelector('metro-tab'), "transition.slideRightIn", {queue: false});

				$scope.conf = {
					background: $metro.views.tile.background
				}
				$scope.searchboxReveal = function(){
					$scope.$root.searchbox = !$scope.$root.searchbox;
				}
			}
		}
	});
	angular.module('metro.tile.view').directive('metroTileGroup', function($timeout, $compile, $velocity, $metro){
		return{
			restrict: 'EA',
			scope:{
				group: '='
			},
			templateUrl: 'scripts/metro/tile/metro.tile.group.html',
			link: function($scope, elem, attr){

				//this doesn't work
				// $velocity(document.querySelectorAll('.metro-tile-item-anim'), "transition.fadeIn", {stagger: 10});
				
				var _gridster = undefined, dragging = false;
				var init = function(){
					$timeout(function(){
						_gridster = $('.gridster ul').gridster({
		                    widget_margins: [$metro.tiles.size.margin, $metro.tiles.size.margin],
		                    widget_base_dimensions: [$metro.tiles.size.dimenstion, $metro.tiles.size.dimenstion],
		                    shift_larger_widgets_down: false,
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
					elem.html('<metro-tile-group group="group"></metro-tile-group>');
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
				var width = ($metro.tiles.size.margin * 2) + $metro.tiles.size.dimenstion;
				$scope.groupwidth = {width: grabMax($scope.group.tiles, 'c', 'x') * width + 'px'};

			}
		}
	});
})();