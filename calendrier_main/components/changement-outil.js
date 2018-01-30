AFRAME.registerComponent('changement-outil', {

  schema: {
    outilSelection: {type: 'number', default: 0}
  },

  init: function () {
    // Do something when component first attached.
    var player = document.querySelector("#player");

    /* On commence avec le touch */
    player.setAttribute("progressive-controls","pointMixin","mypoint");
    player.setAttribute("progressive-controls","touchMixin","mytouch");
    player.setAttribute("progressive-controls", "maxLevel","point");
    player.setAttribute("progressive-controls", "objects", ".cube, #horloge, .choixJour");


  },
  update: function () {
    var data = this.data,
        player = document.querySelector("#player");

    // Do something when component's data is updated.
    this.el.addEventListener("menudown", function() {

      data.outilSelection ++;

      if(data.outilSelection == 2) {

        data.outilSelection = 0;

      }

      if(data.outilSelection == 0) {

        player.setAttribute("progressive-controls", "maxLevel","touch");
        player.setAttribute("progressive-controls", "objects", ".cube");
        console.log("Changement a touch");

      }

      else if(data.outilSelection == 1) {

        player.setAttribute("progressive-controls", "maxLevel","point");
        player.setAttribute("progressive-controls", "objects",
                                                    "#graph, .cube, #horloge");
        console.log("Changement a point");

      }

      console.log(player.getAttribute("progressive-controls").maxLevel);
    });


  },
  remove: function () {
    // Do something the component or its entity is detached.
  },
  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  }

});
