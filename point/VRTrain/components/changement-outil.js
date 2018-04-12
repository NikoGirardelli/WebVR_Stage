outilSelection = 0;

AFRAME.registerComponent('changement-outil', {

  init: function () {
    // Do something when component first attached.
    //var player = document.querySelector("#player");
  },

  update: function () {


  },

  changerOutil: function() {

    var map = document.querySelector("#map");

    outilSelection ++;

    if(outilSelection == 0) {

      map.setAttribute("grabbable","");
      console.log("grabbable");

    }

    else if(outilSelection == 1) {

      map.removeAttribute("grabbable","");
      outilSelection = 0;
      console.log("non grabbable")
    }

  },

  play:function() {
    // Do something when component's data is updated.
    this.el.children[1].addEventListener("trackpaddown",this.changerOutil);
    this.el.children[2].addEventListener("trackpaddown",this.changerOutil);

  },

  pause: function () {
    // Do something the component or its entity is detached.
    this.el.children[1].removeEventListener("trackpaddown",this.changerOutil);
    this.el.children[2].removeEventListener("trackpaddown",this.changerOutil);
  },

  remove: function () {
    // Do something the component or its entity is detached.
    this.el.children[1].removeEventListener("trackpaddown",this.changerOutil);
    this.el.children[2].removeEventListener("trackpaddown",this.changerOutil);
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.

  }

});
