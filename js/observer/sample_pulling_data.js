var new_york_times = new Magazine('New York Times');
var wall_street_journal = new Magazine('The Wall Street Journal');

var john = new Reader('John Doe');
john.subscribe('daily', new_york_times);
john.subscribe('daily', wall_street_journal);

var mary = new Reader('Mary Doe');
mary.subscribe('daily', new_york_times);

var phill = new Reader('Phill Doe');
phill.subscribe(null, new_york_times);

var peter = new Reader('Peter Doe');
peter.subscribe('monthly', new_york_times);

new_york_times.daily();
new_york_times.monthly();
new_york_times.notify(null, 'to any subscribe');

wall_street_journal.daily();

new_york_times.unsubscribe('daily', john);
phill.subscribe('daily', new_york_times);
peter.subscribe('daily', new_york_times);
new_york_times.daily();
