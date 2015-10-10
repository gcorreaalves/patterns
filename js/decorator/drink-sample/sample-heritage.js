// Using classic inherit
var coffee = new Coffee();
    coffee = new Moca(coffee);
    coffee = new Soy(coffee);
    coffee = new Soy(coffee);
    console.log(coffee.getDescription(), coffee.getPrice());
