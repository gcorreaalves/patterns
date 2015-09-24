var factory = new PersonFactory();

var gustavo = factory.getPerson('Gustavo', 'm');
var wal = factory.getPerson('Wal', 'f');

console.log(gustavo.toString());
console.log(wal.toString());
