require_relative 'magazine'
require_relative 'reader'

new_york_times = Magazine.new('New York Times');
wall_street_journal = Magazine.new('The Wall Street Journal');

john = Reader.new('John Doe');
john.subscribe('daily', new_york_times);
john.subscribe('daily', wall_street_journal);

mary = Reader.new('Mary Doe');
mary.subscribe('daily', new_york_times);

phill = Reader.new('Phill Doe');
phill.subscribe(nil, new_york_times);

peter = Reader.new('Peter Doe');
peter.subscribe('monthly', new_york_times);

new_york_times.daily();
new_york_times.monthly();
new_york_times.notify(nil, 'to any subscribe');

wall_street_journal.daily();

new_york_times.unsubscribe('daily', john);
phill.subscribe('daily', new_york_times);
peter.subscribe('daily', new_york_times);
new_york_times.daily();
