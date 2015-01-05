(function(){
	'use strict';

	angular.module('metro.list.view', [
		'ngAnimate',
		'metro.hscroll',
		'metro.animation'
		]);

	angular.module('metro.list.view').directive('metroListView', function(){
		return{
			restrict: 'EA',
			scope: {
				groups: '=view' 
			},
			templateUrl: 'scripts/metro/list/metro.list.view.html',
			link: function($scope, elem, attr){

			}
		}
	});
	angular.module('metro.list.view').directive('metroListViewItem', function($compile, $q){
		return{
			restrict: 'EA',
			scope: {
				list: '=' 
			},
			templateUrl: 'scripts/metro/list/metro.list.view.item.html',
			link: function($scope, elem, attr){
				var aggregator = function(arr){
					var defer = $q.defer();
					defer.resolve(function(){
						var output = [];
						angular.forEach(arr, function(o){
							var lCase = o.text.toUpperCase()
							if (output[lCase[0]]) {
								output[lCase[0]].push(o);
							} else {
								output[lCase[0]] = [o];
							}
						});
						return output;
					}());
					return defer.promise;
				}
				//wtf-bug ! $scope.mem === []
				aggregator($scope.list).then(function(data){
					$scope.mem = data;
				});
				$scope.childer = function(item, text){
					if(item.child){
						$scope.item = {
							child: item.child,
							text: text
						};
						elem.html('<button ng-click="childerRevert()" class="backer-btn">{{"< "+ item.text}}</button><metro-list-view-item list="item.child"></metro-list-view-item>');
						$compile(elem.contents())($scope);
					}
				}
				$scope.childerRevert = function(){
					elem.html('<metro-list-view-item list="list"></metro-list-view-item>');
					$compile(elem.contents())($scope);
				}
			}
		}
	});

angular.module('metro.list.view').filter('squery', function(){
	return function(input, query){
		if(query === '' || angular.isUndefined(query))
			return input;
		var out = [];

		function innerQuery(arr, _query){
			return arr = arr.filter(function(i){
				return i.text.indexOf(_query) > -1;
			}).length > 0;
		}
		out = out.concat(input.filter(function(o){
			return o.title.text.indexOf(query) > -1 || innerQuery(o.tiles, query);
		}));
		return out;
	}
});

angular.module('metro.list.view').animation('.metro-list-view-anim', function($velocity){
	var enterAnim = {
		'margin-left': '-100px',
		opacity: 0
	};
	return{
		enter: function(element, done){
			element.css(enterAnim);
			var elem = element[0];
			$velocity(element, {
				'margin-left': 0,
				opacity: 1
			}, {
				easing: 'easeInOut',
				duration: 150,
				complete: done
			});
		},
		leave: function(element, done){
			var elem = element[0];
			$velocity(element, {
				'margin-left': '-' + elem.offsetWidth +'px',
				opacity: 0
			}, {
				easing: 'easeOutCirc',
				duration: 150,
				complete: done
			});
		},
		beforeAddClass: function(element, done){
			console.log('q');
		}
	}
});
})();