var Sale = (function(){
  var Sale = function (price) {
    this.price = price || 100;
    this.decorators = [];
  };
  Sale.prototype.decorate = function(decorator){
    this.decorators.push(this.constructor.decorators[decorator]);
  };
  Sale.prototype.getPrice = function(){
    var price = this.price;
    this.decorators.forEach(function(decorator){
      price = decorator.getPrice(price);
    });
    return price;
  };

  Sale.decorators = {};
  Sale.decorators.fedtax = {
    getPrice : function(price){
      return price * 0.05 + price;
    }
  };
  Sale.decorators.sedex = {
    getPrice : function(price){
      return price + 7.5;
    }
  };
  Sale.decorators.money = {
    getPrice : function(price){
      return "$" + price.toFixed(2);
    }
  };
  Sale.decorators.BRL = {
    getPrice : function(price){
      return "R$" + price.toFixed(2);
    }
  };

  return Sale;
})();
