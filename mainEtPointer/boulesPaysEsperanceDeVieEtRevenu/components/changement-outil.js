AFRAME.registerComponent('changement-outil', {

  init: function () {
    // Do something when component first attached.
    var player = document.querySelector("#player"),
        outilSelectionner = 0;

    /* On commence avec le touch */
    player.setAttribute("progressive-controls", "maxLevel","touch");

    this.ajouterRaycaste = function() {

      outilSelectionner ++;

      if(outilSelectionner == 2) {

        outilSelectionner = 0;

      }

      if(outilSelectionner == 0) {

        //player.setAttribute("progressive-controls", "maxLevel","touch");
        //player.setAttribute("progressive-controls", "objects", ".cube");
        console.log("Changement a touch");
        //document.querySelector("#rhand").removeAttribute("raycaster");
        //console.log(player)
        player.lastChild.setAttribute("mixin","mytouch");
      }

      else if(outilSelectionner == 1) {

        //player.setAttribute("progressive-controls", "maxLevel","point");
        //player.setAttribute("progressive-controls", "objects",
                                                    //"#graph, .cube, #horloge");
        console.log("Changement a point");
        player.lastChild.setAttribute("mixin","mypoint");
        /*document.querySelector("#rhand").setAttribute("raycaster",{

          showLine:true,
          far:5,
          interval:100,
          objects:'.panneauSelectionPays,.panneauSelectionAnnees,.zonePremiereAnnee,.zoneDeuxiemeAnnee'

        });*/

      }

    }




  },
  update: function () {

    // Do something when component's data is updated.
  //var data = this.data,

  },

  pause:function() {
    // Do something the component or its entity is detached.
    this.el.removeEventListener("trackpaddown",this.ajouterRaycaste);
  },

  play:function() {
    // Do something the component or its entity is detached.
    this.el.addEventListener("trackpaddown",this.ajouterRaycaste);
  },

  remove: function () {
    // Do something the component or its entity is detached.
    this.el.removeEventListener("trackpaddown",this.ajouterRaycaste);
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  }

});
