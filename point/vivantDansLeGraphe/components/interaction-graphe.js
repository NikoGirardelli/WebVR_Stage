var vieillePositionX;

AFRAME.registerComponent('interaction-graphe', {

  init: function () {

    //this.rafraichir = function() { location.reload(); };

    vieillePositionX = document.querySelector("#head").getAttribute("position").x;

    this.calculerDistanceX = function(positionJoueurX,positionX) {

      return (Math.sqrt(Math.pow((positionJoueurX - positionX),2)));

    };

  },

  play: function () {

    // Rafraîchit la page
  //  this.el.addEventListener("menudown",this.rafraichir);
    /*this.el.addEventListener("trackpaddown",function(){


    });*/


  },

  pause: function () {

    //this.el.removeEventListener("menudown",this.rafraichir);

  },

  modifierDonnee:function(annee) {

    var dataIncome = JSON.parse(sessionStorage.getItem('dataIncome')),
        dataLife = JSON.parse(sessionStorage.getItem('dataLife')),
        ensembleSphereGraphe = document.querySelectorAll(".sphereGraphe"),
        ensembleSphereGraphe_l =  ensembleSphereGraphe.length + 1,
        texteAnnee = document.querySelector("#anneeTexte");

    /* Modifie le texte de l'année */
    //texteAnnee.setAttribute("value",(income_cell_l - 1)/100;);
    //console.log(dataIncome[0])
    /* Parcourt les pays */
    for(i=1;i<ensembleSphereGraphe_l;i++) {

      /*1 a 24*/
      var rowIncome = dataIncome[i];
    //  console.log(dataIncome[ensembleSphereGraphe_l])
      var cellsIncome = rowIncome.join(",").split(",");
      var rowLife = dataLife[i];
      var cellsLife = rowLife.join(",").split(",");
      var position = {x:-0.8, y:0.05, z:-10};
      var scale = 1;
      var anneeAfficher;

      //console.log(Math.floor(annee)/100);
      //(100/annee)
      scale = cellsLife[i]/200;
      //scale.y = cellsLife[i+1]/200;
      //scale.z = cellsLife[i+1]/200;
      position.y = cellsIncome[i]/132000;
      //debut.z = -10;

      /* Pour les années, on fais un saut*/

      ensembleSphereGraphe[i - 1].setAttribute("position",{y:position.y});
      ensembleSphereGraphe[i - 1].object3D.children[0].scale.set(scale,scale,scale);
      //console.log(scale);

      /* Radius du cylindre = Life Expectency
      *  Height = Incomes
      *  Positionner par continent autour du joueur.



       Affectation des valeurs dans notre tableau de position
      positions[3*(j-1)] = debut.x;
      positions[3*(j-1)+1] = debut.y;
      positions[3*(j-1)+2] = debut.z;*/

      //sphereGraphe.setAttribute("visible",false);

    }

  },

  tick:function() {
    /* Permet d'avoir les positions des manettes
        et celle du casque ainsi que sa rotation.*/
  //  var controllers = document.querySelectorAll("[vive-controls]");

    var head = document.querySelector("#head"),
        positionTete = Math.round(head.getAttribute("position").x*1000)/1000,
        origine = 1.5,
        distance = this.calculerDistanceX(positionTete,Math.round(vieillePositionX*1000)/1000,).toFixed(3);


  //  console.log();
  //  console.log(positionTete);
    //console.log(head.getAttribute("position"));
    //console.log(vieillePositionX);
    /* si nous sommes déplacé de 0.3*/
    //console.log(positionTete)
  //  console.log(Math.floor(positionTete)/100);
    if(distance > 0.299) {

      //console.log(positionTete)
      vieillePositionX = positionTete;
      this.modifierDonnee(positionTete);
      //console.log(vieillePositionX)

    }

/*
    if(head.getAttribute("position").x > -1.2 && head.getAttribute("position").x <= -1) {

      this.modifierDonnee();

    }
    else if(head.getAttribute("position").x > -1 && head.getAttribute("position").x <= -0.8) {

      //this.modifierDonnee();

    }
    else if(head.getAttribute("position").x > -0.8 && head.getAttribute("position").x <= -0.6) {

      //this.modifierDonnee();

    }
    else if(head.getAttribute("position").x > -0.6 && head.getAttribute("position").x <= -0.4) {

      //this.modifierDonnee();

    }
    else if(head.getAttribute("position").x > -0.4 && head.getAttribute("position").x <= -0.2) {

      //this.modifierDonnee();

    }
    else if(head.getAttribute("position").x > -0.2 && head.getAttribute("position").x <= 0) {

      //this.modifierDonnee();

    }
    else if(head.getAttribute("position").x > 0 && head.getAttribute("position").x <= 0.2) {

      //this.modifierDonnee();

    }
    else if(head.getAttribute("position").x > 0.2 && head.getAttribute("position").x <= 0.4) {

      //this.modifierDonnee();

    }
    else if(head.getAttribute("position").x > 0.4 && head.getAttribute("position").x <= 0.6) {

      //this.modifierDonnee();

    }
    else if(head.getAttribute("position").x > 0.6 && head.getAttribute("position").x <= 0.8) {

      //this.modifierDonnee();

    }
    else if(head.getAttribute("position").x > 0.8 && head.getAttribute("position").x <= 1) {

      //this.modifierDonnee();

    }
    else if(head.getAttribute("position").x > 1 && head.getAttribute("position").x <= 1.2) {

    //this.modifierDonnee();

    }
*/
  }

});
