var Drink = (function(){
  var Drink = function (name, price) {
    this.description = name || 'Drink';
    this.price = price || 0;
    this.decorators = [];
  };
  Drink.prototype.getDescription = function(){
    var description = this.description;
    this.decorators.forEach(function(decorator){
      description += ', ' + decorator.getDescription();
    });
    return description;
  };
  Drink.prototype.getPrice = function(){
    var price = this.price;
    this.decorators.forEach(function(decorator){
      price += decorator.getPrice();
    });
    return price;
  };
  Drink.prototype.decorate = function(decorator){
    this.decorators.push(this.constructor.decorators[decorator]);
  };

  Drink.decorators = {};
  Drink.decorators.moca = {
    getDescription : function(){
      return 'Moca';
    },
    getPrice : function(){
      return 0.20;
    }
  };
  Drink.decorators.soy = {
    getDescription : function(){
      return 'Soy';
    },
    getPrice : function(){
      return 0.50;
    }
  };

  return Drink;
})();
