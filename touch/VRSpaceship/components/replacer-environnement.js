/* Replace l'environment */
AFRAME.registerComponent('replacer-environnement', {

  init:function() {

  },

  replacerEnvironnement: function() {

    var map = document.querySelector("#map"),
        jukebox = document.querySelector("#jukebox"),
        uiPA = document.querySelector("#ui-prochain-arret"),
        uiInventaire = document.querySelector("#ui-inventaire"),
        uiArgent = document.querySelector("#ui-argent"),
        uiArticles = document.querySelectorAll(".ui-article"),
        uiAchats = document.querySelectorAll(".ui-achat"),
        messages = document.querySelectorAll(".message");
      /*  posProchainArret = {x:1.5,y:2,z:1},
        posInventaire = {x:1.5,y:1,z:1},
        posArgent = {x:1.5,y:1.5,z:1},
        posMap = {x:-1.5,y:0.5,z:1},
        posDifficulte = {x:0.5,y:2,z:-1},
        posLancerJeu = {x:0.5,y:1,z:-1},
        posJukebox = {x:0.5,y:1,z:-1};
        posArticles = [{x:0.5,y:2,z:1},{x:0.5,y:1.5,z:1},{x:0.5,y:1,z:1}],
        posAchats = [{x:-0.5,y:2,z:1},{x:-0.5,y:1,z:1},{x:-1.5,y:1,z:1}]
        posMessages = [{x:-1,y:2.5,z:-1},{x:-1,y:1,z:-1},{x:2,y:2.5,z:-1},{x:2,y:1,z:-1}];*/

    map.setAttribute("animation__position",{
      dur:300,
      property:"position",
      from:{x:0,y:0,z:0},
      to:{x:-1.5,y:0.5,z:1},
      startEvents:"gripdown",
      autoplay:false
    });/*
    jukebox.setAttribute("position",posJukebox);
    uiPA.setAttribute("position",posProchainArret);
    uiInventaire.setAttribute("position",posInventaire);
    uiArgent.setAttribute("position",posArgent);

    for(var i = 0;i < uiArticles.length;i++) {

      uiArticles[i].setAttribute("position",posArgent[i]);

    }


    for(var i = 0;i < uiAchats.length;i++) {

      uiAchats[i].setAttribute("position",posAchats[i]);

    }


    for(var i = 0;i < messages.length;i++) {

      messages[i].setAttribute("position",posMessages[i]);

    }*/

  },


  play:function() {

    // Do something when component's data is updated.
    this.el.children[1].addEventListener("gripdown",this.replacerEnvironnement);
    this.el.children[2].addEventListener("gripdown",this.replacerEnvironnement);

  },

  pause: function () {
    // Do something the component or its entity is detached.
    this.el.children[1].removeEventListener("gripdown",this.replacerEnvironnement);
    this.el.children[2].removeEventListener("gripdown",this.replacerEnvironnement);

  },

  remove: function () {
    // Do something the component or its entity is detached.
    this.el.children[1].removeEventListener("gripdown",this.replacerEnvironnement);
    this.el.children[2].removeEventListener("gripdown",this.replacerEnvironnement);

  }

});
