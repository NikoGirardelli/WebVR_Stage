/* Provient de l'exemple : https://github.com/wmurphyrd/aframe-super-hands-component/blob/master/examples/physics/index.html
  Turn controller's physics presence on only while button held down */
AFRAME.registerComponent('phase-shift', {
  
  init: function () {

    var el = this.el;

    el.addEventListener('gripdown', function () {

      el.setAttribute('collision-filter', {collisionForces: true});

    });

    el.addEventListener('gripup', function () {

      el.setAttribute('collision-filter', {collisionForces: false});

    });

  }

});
