(function(){
	'use strict';

	angular.module('metro.tab', [
		'metro.list.view',
		'metro.tile.view',
		'metro.animation',
        'metro.engine'
        ]);

	angular.module('metro.tab').directive('metroTab', function($hscroll, $metroEngine){
		return{
			restrict: 'EA',
			templateUrl: 'scripts/metro/tab/metro.tab.html',
			link: function($scope, elem, attr){
				$scope.tileactive = true;
                $scope.searchbox = false;
                document.body.onkeydown = function(kk){
                    $scope.$apply(function(){
                        $scope.toggleKey(kk);
                    });
                }
                $scope.toggleKey = function($event){
                    if($event.keyCode === 81 && $event.ctrlKey){
                        $scope.tileactive = !$scope.tileactive;
                    }
                    if($event.keyCode === 66 && $event.ctrlKey){
                        $scope.searchbox = !$scope.searchbox;
                    }
                    if($event.keyCode === 27){
                        $scope.searchbox = false;
                    }
                }
                $scope.toggle = function(){
                 $scope.tileactive = !$scope.tileactive;
             };
             $metroEngine.GetTiles().then(function(response){
                $scope.groups = response.data;
            });
				//activate horScroll
				//$hscroll.activate(elem[0]);
         }
    }

});

angular.module('metro.tab').animation('.metro-tab-anim', function($velocity){

    var enterAnim = {
        'margin-left': '300px',
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
                queue: false,
                complete: done
            });
        },
        leave: function(element, done){
            var elem = element[0];
            $velocity(element, {
                'margin-left': elem.offsetWidth +'px',
                opacity: 0
            }, {
                easing: 'easeOutCirc',
                duration: 150,
                queue: false,
                complete: done
            });
        }
    }
});
})();