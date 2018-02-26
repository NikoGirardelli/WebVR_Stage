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

  },

  tick:function() {
    /* Permet d'avoir les positions des manettes
        et celle du casque ainsi que sa rotation.*/
  //  var controllers = document.querySelectorAll("[vive-controls]");

    var head = document.querySelector("#head");
    var texteAnnee = document.querySelector("#anneeTexte");
    //console.log(head.getAttribute("position"));

    if(head.getAttribute("position").x <= -1.2) {

      texteAnnee.setAttribute("value","1910");

    }

    else if(head.getAttribute("position").x > -1.2 && head.getAttribute("position").x <= -1) {

      texteAnnee.setAttribute("value","1910");

    }
    else if(head.getAttribute("position").x > -1 && head.getAttribute("position").x <= -0.8) {

      texteAnnee.setAttribute("value","1915");

    }
    else if(head.getAttribute("position").x > -0.8 && head.getAttribute("position").x <= -0.6) {

      texteAnnee.setAttribute("value","1920");

    }
    else if(head.getAttribute("position").x > -0.6 && head.getAttribute("position").x <= -0.4) {

      texteAnnee.setAttribute("value","1925");

    }
    else if(head.getAttribute("position").x > -0.4 && head.getAttribute("position").x <= -0.2) {

      texteAnnee.setAttribute("value","1930");

    }
    else if(head.getAttribute("position").x > -0.2 && head.getAttribute("position").x <= 0) {

      texteAnnee.setAttribute("value","1935");

    }
    else if(head.getAttribute("position").x > 0 && head.getAttribute("position").x <= 0.2) {

      texteAnnee.setAttribute("value","1940");

    }
    else if(head.getAttribute("position").x > 0.2 && head.getAttribute("position").x <= 0.4) {

      texteAnnee.setAttribute("value","1945");

    }
    else if(head.getAttribute("position").x > 0.4 && head.getAttribute("position").x <= 0.6) {

      texteAnnee.setAttribute("value","1950");

    }
    else if(head.getAttribute("position").x > 0.6 && head.getAttribute("position").x <= 0.8) {

      texteAnnee.setAttribute("value","1955");

    }
    else if(head.getAttribute("position").x > 0.8 && head.getAttribute("position").x <= 1) {

      texteAnnee.setAttribute("value","1960");

    }
    else if(head.getAttribute("position").x > 1 && head.getAttribute("position").x <= 1.2) {

      texteAnnee.setAttribute("value","1965");

    }

  }

});
