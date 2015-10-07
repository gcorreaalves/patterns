var Publisher = (function(){
  var Publisher = function(){
    this.subscribes = {
      any : []
    };
  };
  Publisher.fn = Publisher.prototype;
  Publisher.fn.subscribe = function(type, subscriber, context){
    var
    subscribes = this.subscribes,
    type = type || 'any';
    subscribes[type] = subscribes[type] || [];
    subscribes[type].push(subscriber);
  };
  Publisher.fn.unsubscribe = function(type, subscriber){
    var
    subscribes   = this.subscribes[type],
    arr_position = subscribes.indexOf(subscriber);

    subscribes = subscribes.splice(arr_position, 1);

  };
  Publisher.fn.notify = function(type, data){
    var
    type = type || 'any',
    subscribes = this.subscribes[type],
    len        = 0;

    if(subscribes === undefined) return false;

    len = subscribes.length;

    while(len--){
      subscribes[len].update.call(subscribes[len], data);
    }
  };

  return Publisher;
})();

var Subscriber = (function(){
  var Subscriber = function(){};

  Subscriber.fn = Subscriber.prototype;
  Subscriber.fn.update = function(data){};

  return Subscriber;
})();

var Magazine = (function(){
  var Magazine = function(name){
    this.subscribes = {
      any : []
    };
    this.getName = function(){
      return name;
    }
  };

  Magazine.prototype = new Publisher();
  Magazine.constructor = Magazine;

  Magazine.prototype.daily = function(){
    this.notify('daily', 'Breaking news!!!');
  }
  Magazine.prototype.monthly = function(){
    this.notify('monthly', 'Breaking news!!!');
  }

  return Magazine;
})();

var Reader = (function(){
  var Reader = function(name){
    this.name = name;
  };
  Reader.prototype = new Subscriber();
  Reader.constructor = Reader;
  Reader.prototype.update = function(data){
    console.log(this.name, 'recieving news: ' +  data);
  };

  return Reader;
})();
