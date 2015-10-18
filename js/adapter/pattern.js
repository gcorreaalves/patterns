var EventAdapter = (function(){
  var EventAdapter = function(){};
  EventAdapter.prototype.addEvenListiner = function(element, ev, func){
    var el = document.querySelector(element);
    if (el.attachEvent)
     return el.attachEvent('on' + ev, func);
    else
     return el.addEventListener(ev, func, false);
  };
  return EventAdapter;
})();
