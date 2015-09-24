/**
* Builder specifies the interface.
**/
var MenuBuilder = (function(){
  function MenuBuilder(){}
  MenuBuilder.prototype.link = function(link, text){
    return '<a href="'+link+'">'+text+'</a>';
  }
  MenuBuilder.prototype.list = function(){}
  MenuBuilder.prototype.getMenu = function(){
    return this.list();
  }
  return MenuBuilder;
})();

/**
* Concrete Builder implments/extend the builder object.
**/
var SimpleMenuBuilder = (function(){
  function SimpleMenuBuilder(data){
    this.links = data;
  }
  SimpleMenuBuilder.prototype = new MenuBuilder();
  SimpleMenuBuilder.prototype.list = function(){
    var links = this.links, html = '';
    for(link in links){
       html += this.link(link, links[link]);
    };
    return html;
  }
  return SimpleMenuBuilder;
})();
var ComplexMenuBuilder = (function(){
   function ComplexMenuBuilder(data){
     this.links = data;
   }
   ComplexMenuBuilder.prototype = new MenuBuilder();
   ComplexMenuBuilder.prototype.list = function(){
     var links = this.links, html = '';
     html += '<ul>';
     for(link in links){
        html += '<li>' + this.link(link, links[link]) + '</li>';
     };
     html += '</ul>';
     return html;
   }
   return ComplexMenuBuilder;
})();

/**
* Director create the object based on determined menu.
**/
function MenuDirector(menu){
  var MenuProduct;
  var links = {
      'Google'  : 'http://google.com'
    , 'Gmail'   : 'http://gmail.com'
    , 'Youtube' : 'http://youtube.com'
  };
  switch (menu) {
    case 'simple':
      MenuProduct = new SimpleMenuBuilder(links);
      break;
    case 'destine':
      MenuProduct = new ComplexMenuBuilder(links);
      break;
    default:
      MenuProduct = new SimpleMenuBuilder(links);
  }
  console.log(MenuProduct.getMenu());
}
