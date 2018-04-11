AFRAME.registerComponent('rafraichissement', {

  init: function () {

    // Rafraîchit la page
    this.rafraichir = function() { location.reload(); };

  },

  play: function () {

    this.el.addEventListener("menudown",this.rafraichir);

  },

  pause: function () {

    this.el.removeEventListener("menudown",this.rafraichir);

  }

});
