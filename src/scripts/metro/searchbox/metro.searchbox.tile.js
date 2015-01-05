(function(){
	'use strict';

	angular.module('metro.searchbox.tile', [
		'metro.animation'
		]);

	angular.module('metro.searchbox.tile').directive('metroSearchboxTile', function($filter){
		return{
			restrict: 'EA',
			templateUrl: 'scripts/metro/searchbox/metro.searchbox.tile.html',
			scope:{
				list: '='
			},
			link: function($scope, elem, attr){
				$scope.inputDirty = false;
				$scope.flush = function(){
					$scope.searchQueryTile = '';
				}
				$scope.$watch('searchQueryTile', function(a){
					if(angular.isUndefined(a) || a === ''){
						$scope.inputDirty = false;
					}
					else{
						$scope.inputDirty = true;
					}
				});
				$scope.selectedGroup = $scope.list[0];
				$scope.keydown = function(event){
					if(event.keyCode === 13){
						if($scope.$$childTail.result[0].child){
							$scope.$$childTail.select($scope.$$childTail.result[0]);
						}
						else{
							alert($scope.$$childTail.result[0].text);
						}
					}
				}
			}
		}
	});

	angular.module('metro.searchbox.tile').directive('metroSearchboxTileItem', function($compile){
		return{
			restrict: 'EA',
			scope:{
				list: '=',
				query: '=?'
			},
			templateUrl: 'scripts/metro/searchbox/metro.searchbox.tile.item.html',
			link: function($scope, elem, attr){
				$scope.select = function(item){
					if(item.child){
						$scope.data = {
							list: item.child,
							item: item
						};
						elem.html('<button ng-click="childerRevert()" class="backer-btn">{{"< "+ data.item.text}}</button><metro-searchbox-tile-item list="data.list"></metro-searchbox-tile-item>');
						$compile(elem.contents())($scope);
					} else {
						alert(item.text);
					}
				}
				$scope.childerRevert = function(){
					elem.html('<ul><li ng-repeat="item in list | filter:query as result" ng-click="select(item)">{{item.text}}</li></ul>');
					$compile(elem.contents())($scope);
				}
			}
		}
	});

	angular.module('metro.searchbox.tile').animation('.metro-searchbox-tile-item-anim', function($velocity){
		var enterAnim = {
			'margin-top': '-100px',
			'opacity': 1
		};
		return{
			enter: function(element, done){
				element.css(enterAnim);
				var elem = element[0];
				$velocity(element, {
					'margin-top': 0,
					opacity: 1
				}, {
					easing: 'easeOutCirc',
					duration: 150,
					complete: done
				});
			},
			leave: function(element, done){
				var elem = element[0];
				$velocity(element, {
					'margin-top': '-45px',
					opacity: 0
				}, {
					easing: 'easeIn',
					duration: 150,
					complete: done
				});
			}
		}
	});

	//big bug both animations below doesn't trigger... why???
	angular.module('metro.searchbox.tile').animation('.metro-searchbox-tile-anim', function($velocity){
		var enterAnim = {
			'margin-left': '-100px',
		};
		return{
			enter: function(element, done){
				element.css(enterAnim);
				var elem = element[0];
				$velocity(element, {
					'margin-left': 0,
				}, {
					easing: 'easeOutCirc',
					duration: 150,
					complete: done
				});
			},
			leave: function(element, done){
				var elem = element[0];
				$velocity(element, {
					'margin-left': '-' + elem.offsetWidth +'px',
				}, {
					easing: 'easeOutCirc',
					duration: 150,
					complete: done
				});
			}
		}
	});
	angular.module('metro.searchbox.tile').animation('.metro-searchbox-tile', function($velocity){
		var enterAnim = {
			'right': '-300px',
		};
		return{
			enter: function(element, done){
				element.css(enterAnim);
				var elem = element[0];
				$velocity(element, {
					'right': 0,
				}, {
					easing: 'easeOutCirc',
					duration: 150,
					complete: done
				});
			},
			leave: function(element, done){
				var elem = element[0];
				$velocity(element, {
					'right': '-' + enterAnim.right +'px',
				}, {
					easing: 'easeOutCirc',
					duration: 150,
					complete: done
				});
			}
		}
	});
})();