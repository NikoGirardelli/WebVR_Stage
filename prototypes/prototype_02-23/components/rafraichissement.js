AFRAME.registerComponent('rafraichissement', {

  init: function () {

    this.rafraichir = function() { location.reload(); };

  },

  play: function () {

    // Rafraîchit la page
    this.el.addEventListener("menudown",this.rafraichir);

  },

  pause: function () {

    this.el.removeEventListener("menudown",this.rafraichir);

  },

  tick:function() {
    /* Permet d'avoir les positions des manettes
        et celle du casque ainsi que sa rotation.
    var controllers = document.querySelectorAll("[hand-controls]");
    console.log(controllers[0].getAttribute("position"));
    console.log(controllers[1].getAttribute("position"));
    var head = document.querySelector("a-camera");
    console.log(head.getAttribute("position"));
    console.log(head.getAttribute("rotation"));*/

  }

});
