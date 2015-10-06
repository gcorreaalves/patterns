var Sandbox = function(){
  var
  args     = Array.prototype.slice.call(arguments),
  callback = args.pop(),
  modules = (args[0] && typeof args[0] === 'string') ? args : args[0];

  if(!(this instanceof Sandbox)){
    return new Sandbox(modules, callback);
  }

  if(!modules || modules === '*'){
    modules = [];
    for(var i in Sandbox.modules){
      if(Sandbox.modules.hasOwnProperty(i)){
        modules.push(i);
      }
    }
  }

  for(var i = modules.length; i--;){
    Sandbox.modules[modules[i]](this);
  }

  callback(this);
};

Sandbox.modules = {};
Sandbox.modules.DOM = function(box){
  console.log('DOM');
};
Sandbox.modules.EVENTS = function(box){
  console.log('EVENTS');
};
