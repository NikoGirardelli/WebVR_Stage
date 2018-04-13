AFRAME.registerComponent('rafraichissement', {

  init: function () {

    this.rafraichir = function() {location.reload();};

  },

  play: function () {

    // Rafraîchit la page
    this.el.addEventListener("menudown",this.rafraichir);

  },

  pause: function () {

    this.el.removeEventListener("menudown",this.rafraichir);

  }

});
