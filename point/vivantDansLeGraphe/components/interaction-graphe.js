var vieillePositionX,
    annee = 0,
    dataIncome = JSON.parse(sessionStorage.getItem('dataIncome')),
    dataLife = JSON.parse(sessionStorage.getItem('dataLife'));

AFRAME.registerComponent('interaction-graphe', {

  init: function () {

    vieillePositionX = document.querySelector("#head").getAttribute("position").x;

    this.calculerDistanceX = function(positionJoueurX,positionX) {

      return Math.round(Math.sqrt(Math.pow((positionJoueurX - positionX),2))*1000)/1000;

    };

    this.verifierDistance = function() {

      var head = document.querySelector("#head"),
          positionTete = head.getAttribute("position").x;

      if(positionTete > 0) {

          positionTete = Math.floor(positionTete*10)/10;
      }

      else if(positionTete < 0) {

        positionTete = Math.ceil(positionTete*10)/10;

      }

      /* On calcule la distance entre notre dernière position et notre nouvelle */
      var distance = this.calculerDistanceX(positionTete,vieillePositionX);

      /* Si on a fait un déplacement de 0.3 */
      if(distance >= 0.3) {

        vieillePositionX = positionTete;
        this.modifierDonnee(positionTete);

      }

    };

  //  this.modifierDonnee(0);

  },

  modifierDonnee:function(positionJoueurX) {

    var ensembleSphereGraphe = document.querySelectorAll(".sphereGraphe"),
        ensembleSphereGraphe_l =  ensembleSphereGraphe.length + 1,
        texteAnnee = document.querySelector("#anneeTexte"),
        ligneTemps = document.querySelectorAll(".ligneTemps");

    /* Mets les lignes du temps blanches */
    for(var j = 0;j < 11;j++) {

      ligneTemps[j].setAttribute("material",{color:0xFFFFFF});

    }

    // Notre position affecte l'année
    switch(positionJoueurX) {

      case -1.5:
        annee = 2;
        ligneTemps[10].setAttribute("material",{color:0x22D1EE});
        break;
      case -1.2:
        annee = 12;
        ligneTemps[9].setAttribute("material",{color:0x22D1EE});
        break;
      case -0.9:
        annee = 22;
        ligneTemps[8].setAttribute("material",{color:0x22D1EE});
        break;
      case -0.6:
        annee = 32;
        ligneTemps[7].setAttribute("material",{color:0x22D1EE});
        break;
      case -0.3:
        annee = 42
        ligneTemps[6].setAttribute("material",{color:0x22D1EE});
        break;
      case 0:
        annee = 52;
        ligneTemps[5].setAttribute("material",{color:0x22D1EE});
        break;
      case 0.3:
        annee = 62;
        ligneTemps[4].setAttribute("material",{color:0x22D1EE});
        break;
      case 0.6:
        annee = 72;
        ligneTemps[3].setAttribute("material",{color:0x22D1EE});
        break;
      case 0.9:
        annee = 82;
        ligneTemps[2].setAttribute("material",{color:0x22D1EE});
        break;
      case 1.2:
        annee = 92;
        ligneTemps[1].setAttribute("material",{color:0x22D1EE});
        break;
      case 1.5:
        annee = 102;
        ligneTemps[0].setAttribute("material",{color:0x22D1EE});
        break;

    }

    /* Parcourt les pays */
    var scale = 1;
    var position = {x:1.25, y:0.05, z:-10};
    for(i=0;i<ensembleSphereGraphe_l;i++) {

      /*1 a 24*/
      var rowIncome = dataIncome[i];
    //  console.log(dataIncome[ensembleSphereGraphe_l])
      var cellsIncome = rowIncome.join(",").split(",");
      var rowLife = dataLife[i];
      var cellsLife = rowLife.join(",").split(",");

      /* Modifie le texte de l'année */
      if(i == 0) {

        texteAnnee.setAttribute("value",cellsLife[annee]);

      }

      /* Modifie les sphères des pays */
      else {

        scale = cellsLife[annee]/100;
        position.y = cellsIncome[annee]/13200;
        position.x = i*1.25;
        ensembleSphereGraphe[i - 1].setAttribute("position",position);
        ensembleSphereGraphe[i - 1].object3D.children[0].scale.set(scale,scale,scale);

      }

    }

  },

  tick:function() {

    this.verifierDistance();

  }

});
