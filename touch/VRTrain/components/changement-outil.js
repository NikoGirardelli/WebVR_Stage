var outilSelection = 0;

AFRAME.registerComponent('changement-outil', {

  init:function() {

    this.changerOutil();

  },

  changerOutil: function() {

    var objetsGrabbable = document.querySelectorAll("[grabbable]"),
        lesPoignees = document.querySelectorAll(".poignee");

    /* Panneaux non grabbable et button clickable */
    if(outilSelection == 0) {

      for(var i = 0;i < objetsGrabbable.length;i++) {

        objetsGrabbable[i].setAttribute("grabbable",{maxGrabbers:0});

        lesPoignees[i].components["poignee"].changerCouleurAuRouge();

      }

      outilSelection = 1;

      //console.log("clickable");

    }

    /* Panneaux grabbable et button non clickable */
    else if(outilSelection == 1) {

      for(var i = 0;i < objetsGrabbable.length;i++) {

        objetsGrabbable[i].setAttribute("grabbable",{maxGrabbers:2});

        lesPoignees[i].components["poignee"].changerCouleurAuVert();

      }

      outilSelection = 0;
    //  console.log("non clickable, grabbable")
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
  }

});
