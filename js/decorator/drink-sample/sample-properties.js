// Using properties object
var coffee = new Drink('Coffee', 1.20);
    coffee = coffee.decorate('moca');
    coffee = coffee.decorate('soy');
    coffee = coffee.decorate('soy');
    console.log(coffee.getDescription(), coffee.getPrice());
