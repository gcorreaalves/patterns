var event_adapter = new EventAdapter();
event_adapter.addEvenListiner('h1', 'click', function(){
  console.log('Adapter click working in all browsers.');
});
