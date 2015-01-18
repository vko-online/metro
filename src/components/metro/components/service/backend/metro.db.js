(function(){

	'use strict';
	
	angular.module('__metro.service').service('__dbServ', __dbServ);

	function __dbServ(__ENV, $http, __fauxServ, __colorServ){
		var serv = this;
		serv.cache = {
			tiles: undefined
		};
		function roughSizeOfObject( object ) {

			var objectList = [];
			var stack = [ object ];
			var bytes = 0;
			while ( stack.length ) {
				var value = stack.pop();
				if ( typeof value === 'boolean' ) {
					bytes += 4;
				}
				else if ( typeof value === 'string' ) {
					bytes += value.length * 2;
				}
				else if ( typeof value === 'number' ) {
					bytes += 8;
				}
				else if
					(
						typeof value === 'object'
						&& objectList.indexOf( value ) === -1
						)
				{
					objectList.push( value );
					for( var i in value ) {
						stack.push( value[ i ] );
					}
				}
			}
			return bytes;
		}
		var getTiles = function(){
			$http.get(__ENV.backend.tiles).then(function(response){
				var _tiles = response.data;
				var _beforeGen = roughSizeOfObject(response.data);
				console.info('size before gen ', _beforeGen + ' bytes');
				angular.forEach(_tiles, function(o){
					o.c = __fauxServ.genSize(o.c, 'x', 'y');
					o.c = __colorServ.colorGen(o.c, 'b');
					o.c = __fauxServ.genPos(o.c, 'r', 'c');
				});
				console.log(_tiles);
				serv.cache.tiles = _tiles;
				var _afterGen = roughSizeOfObject(_tiles);
				console.info('size after gen ',  _afterGen + ' bytes,', ' increased ' + Math.floor(_afterGen * 100 / _beforeGen) + '%');
			}, function(err){
				console.error(err);
			});
		}
		serv.init = function(){
			getTiles();
		}
	}
	__dbServ.$injector = ['__ENV', '$http', '__fauxServ', '__colorServ'];
})();
