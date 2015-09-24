/**
* Factory: Object abstract defines factory method.
**/
var Factory = (function(){
  function Factory(){}
  Factory.prototype.getPerson = function(){}
  return Factory;
})();

/**
* Person Concrete Factory: Function constructor.
**/
var PersonFactory = (function(){
  function PersonFactory(){}
  PersonFactory.prototype = new Factory();
  PersonFactory.prototype.getPerson = function(name, gender){
    if( gender === 'm' ){
      return new Man(name);
    }else{
      return new Woman(name);
    }
  }
  return PersonFactory;
})();

/**
* Product: Abstract function constructor.
**/
var Person = (function(){
  function Person(){}
  Person.prototype.getName = function(){}
  Person.prototype.gentGender = function(){}
  Person.prototype.toString = function(){
    return 'Constructor: ' + this.constructor.name + ' - Name: ' + this.getName();
  }
  return Person;
})();

/**
* Concrete Product: Function constructor.
**/
var Man = (function(){
  function Man(name){
    this.name = name;
  }
  Man.prototype = new Person();
  Man.prototype.constructor = Man;
  Man.prototype.getName = function(){
    return this.name;
  }
  Man.prototype.gentGender = function(){
    return 'Male';
  }
  return Man;
})();
var Woman = (function(){
  function Woman(name){
    this.name = name;
  }
  Woman.prototype = new Person();
  Woman.prototype.constructor = Woman;
  Woman.prototype.getName = function(){
    return this.name;
  }
  Woman.prototype.gentGender = function(){
    return 'Female';
  }
  return Woman;
})();
