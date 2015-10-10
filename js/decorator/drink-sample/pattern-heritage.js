var Drink = (function(){
  var Drink = function () {
    this.description = 'Abstract drink';
  };
  Drink.prototype.getDescription = function(){
    return this.description;
  };
  Drink.prototype.getPrice = function(){};
  return Drink;
})();

var Coffee = (function(){
  var Coffee = function(){
    this.description = 'Coffee';
  };
  Coffee.prototype = new Drink();
  Coffee.constructor = Coffee;
  Coffee.prototype.getPrice = function(){
    return 1.10;
  }
  return Coffee;
})();

var Moca = (function(){
  var Moca = function(drink){
    this.drink = drink;
  };
  Moca.prototype = new Drink();
  Moca.constructor = Moca;
  Moca.prototype.getDescription = function(){
    return this.drink.getDescription() + ', Moca';
  }
  Moca.prototype.getPrice = function(){
    return this.drink.getPrice() + 0.20;
  }
  return Moca;
})();

var Soy = (function(){
  var Soy = function(drink){
    this.drink = drink;
  };
  Soy.prototype = new Drink();
  Soy.constructor = Soy;
  Soy.prototype.getDescription = function(){
    return this.drink.getDescription() + ', Soy';
  }
  Soy.prototype.getPrice = function(){
    return this.drink.getPrice() + 0.50;
  }
  return Soy;
})();
