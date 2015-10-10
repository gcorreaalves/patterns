// Using list
var sale = new Sale(100);
    sale.decorate('fedtax');
    sale.decorate('sedex');
    sale.decorate('BRL');
    console.log(sale.getPrice());
