/**
* Abstract Factory: Object abstract that define UI.
**/
var AbstractUI = (function(){
  var AbstractUI = function(){}
  AbstractUI.prototype.buildMenu = function(){};
  AbstractUI.prototype.buildWindow = function(){};
  return AbstractUI;
})();

/**
* Concretes: Function constructor.
**/
var DarkUI = (function(){
  var DarkUI = function(){}
  DarkUI.constructor = DarkUI;
  DarkUI.prototype = new AbstractUI();
  DarkUI.prototype.buildMenu = function(){
    console.log('Dark Menu');
  };
  DarkUI.prototype.buildWindow = function(){
    console.log('Dark Window');
  };
  return DarkUI;
})();

var LightUI = (function(){
  var LightUI = function(){};
  LightUI.constructor = LightUI;
  LightUI.prototype = new AbstractUI();
  LightUI.prototype.buildMenu = function(){
    console.log('Light Menu');
  };
  LightUI.prototype.buildWindow  = function(){
    console.log('Light Window');
  };
  return LightUI;
})();

/**
* Factories: Function constructor.
**/
var Factory = (function(){
  return {
    getUI : function(ui){
      switch(ui){
        case 'dark':
          return new DarkUI();
          break;
        case 'light':
          return new LightUI();
          break;
        default:
          return new LightUI();
      }
    }
  }
})();
