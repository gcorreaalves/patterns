var new_york_times = new Magazine('New York Times');
var wall_street_journal = new Magazine('The Wall Street Journal');

var john = new Reader('John Doe');
var mary = new Reader('Mary Doe');
var phill = new Reader('Phill Doe');
var peter = new Reader('Peter Doe');

new_york_times.subscribe('daily', john);
new_york_times.subscribe('daily', mary);
new_york_times.subscribe('monthly', phill);
new_york_times.subscribe(null, peter);

new_york_times.daily();
new_york_times.monthly();
new_york_times.notify(null, 'to any subscribe');

wall_street_journal.subscribe('daily', john);
wall_street_journal.daily();
