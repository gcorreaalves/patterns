var instance11 = Singleton.getInstance();
var instance12 = Singleton.getInstance();
if(instance11 === instance12){
  console.log('Using IFFE: ', instance11.toString(), ' is equal ', instance12.toString());
}

var instance21 = Singleton2.getInstance();
var instance22 = Singleton2.getInstance();
if(instance21 === instance22){
  console.log('Using literal: ', instance21 + ' is equal ' + instance22);
}

var instance31 = new Singleton3();
var instance32 = new Singleton3();
if(instance31 === instance32){
  console.log('Using contructor function: ', instance31.toString() + ' is equal ' + instance32.toString());
}

var instance41 = new Singleton4();
var instance42 = new Singleton4();
if(instance41 === instance42){
  console.log('Using contructor function: ', instance41.toString() + ' is equal ' + instance42.toString());
}
