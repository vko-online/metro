(function(){
	'use strict';

	angular.module('metro.hscroll', [
			'metro.animation'
		]);

	angular.module('metro.hscroll').factory('$hscroll', function($velocity){
		 var offset = 200;
         var inc = 1;
         var reservation = 100;
         var elem = undefined;
         function handleMouseMove(event) {
         	var dot, eventDoc, doc, body, pageX, pageY;
         	event = event || window.event;
         	if (event.pageX == null && event.clientX != null) {
         		eventDoc = (event.target && event.target.ownerDocument) || document;
         		doc = eventDoc.documentElement;
         		body = eventDoc.body;
         		event.pageX = event.clientX +
         		(doc && doc.scrollLeft || body && body.scrollLeft || 0) -
         		(doc && doc.clientLeft || body && body.clientLeft || 0);
         	}
         	scrollInfinite(event.pageX);
         }
         
         function scrollInfinite(val) {
         	//big bug
         	if (val > (elem.offsetWidth - reservation)) {
         		$velocity(document.body, 'scroll', {
         			axis: 'x',
         			offset: (++inc) * offset,
         			queue: false
		        });
         	}
         	else if(val < (document.body.scrollLeft + reservation * 2)){
         		$velocity(document.body, 'scroll', {
         			axis: 'x',
         			offset: (--inc) * offset,
         			queue: false
		        });
         	}
         }
         return{
         	activate: function(_elem){
         		elem = _elem;
         		document.onmousemove = handleMouseMove;
         	}
         }
	});
})();