AFRAME.registerComponent('rafraichissement', {

  init: function () {

    this.rafraichir = function() { location.reload(); };

  },

  play: function () {

    // Rafraîchit la page
    this.el.addEventListener("menudown",this.rafraichir);
    /*this.el.addEventListener("trackpaddown",function(){


    });*/


  },

  pause: function () {

    this.el.removeEventListener("menudown",this.rafraichir);

  }

});
