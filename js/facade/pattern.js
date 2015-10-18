var Modal = (function(){
  return {
    create : function(){
      console.log('Create modal');
    },
    open   : function(){
      console.log('Open modal');
    }
  };
})();

var DOM   = (function(){
  return {
    insertHTML : function(){
      console.log('Insert HTML');
    }
  };
})();

var Ajax  = function(){
  console.log('Ajax call');
};

var ModalFacade = function(){
  Modal.create();
  Modal.open();
  Ajax();
  DOM.insertHTML();
};
