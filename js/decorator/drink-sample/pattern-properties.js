var Drink = (function(){
  var Drink = function (name, price) {
    this.description = name || 'Drink';
    this.price = price || 0;
  };
  Drink.prototype.getDescription = function(){
    return this.description;
  };
  Drink.prototype.getPrice = function(){
    return this.price;
  };
  Drink.prototype.decorate = function(decorator){
    var
    F = function(){},
    overwrite = this.constructor.decorators[decorator],
    newObj, prop;

    F.prototype = this;
    newObj = new F();
    newObj.uber = this;

    for(prop in overwrite){
      if(overwrite.hasOwnProperty(prop)){
        newObj[prop] = overwrite[prop];
      }
    }
    return newObj;
  };

  Drink.decorators = {};
  Drink.decorators.moca = {
    getDescription : function(){
      return this.uber.getDescription() + ', Moca';
    },
    getPrice : function(){
      return this.uber.getPrice() + 0.20;
    }
  };
  Drink.decorators.soy = {
    getDescription : function(){
      return this.uber.getDescription() + ', Soy';
    },
    getPrice : function(){
      return this.uber.getPrice() + 0.50;
    }
  };

  return Drink;
})();
