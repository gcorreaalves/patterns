var APP = {};

APP.namespace = function(namespace){
  var
  parent = this,
  child  = null,
  objs   = namespace.split('.');

  if (objs[0] === 'APP') objs = objs.slice(1);

  for(var i = 0, len = objs.length; i < len; i++){
    child = objs[i];
    parent[child] = parent[child] || {};
    parent = parent[child];
  }
  return parent;
};
