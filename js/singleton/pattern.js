/**
* First way:
* Using a IIFE.
**/
var Singleton = (function(){
  var instance;
  function createInstance(){
    instance = new Object('Singleton');
  }
  return {
    getInstance : function(){
      if(!instance){
        createInstance();
      }
      return instance;
    }
  }
})();

/**
* Second way:
* Using a literal object.
**/
var Singleton2 = {
  getInstance: function(){
    return 'Singleton2';
  }
};

/**
* Third way:
* Using contructor function.
**/
function Singleton3(){
  if(!Singleton3.instance){
    Singleton3.instance = this;
  }
  this.toString = function(){
    return "Singleton3";
  };
  return Singleton3.instance;
};

/**
* Third way - second implementation:
* Using contructor function.
**/
function Singleton4(){
  var instance;

  this.toString = function(){
    return "Singleton4";
  };

  Singleton4 = function() {
    return instance;
  };

  instance = this;
};
