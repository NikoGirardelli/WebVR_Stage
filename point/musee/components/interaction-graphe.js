var vieillePositionX,
    dataIncome = JSON.parse(sessionStorage.getItem('dataIncome')),
    dataLife = JSON.parse(sessionStorage.getItem('dataLife')),
    dataPopulation = JSON.parse(sessionStorage.getItem('dataPopulation'));
/*
const A_REGLE_POSITION = [0.0025,0.00125,0.000625,0.000313,
                              0.000156,0.000078,0.000039,0.00002];
const B_REGLE_POSITION = [0,1.25,2.5,3.75,5,6.25,75,8.75];*/

AFRAME.registerComponent('interaction-graphe', {

  init: function () {

    vieillePositionX = document.querySelector("#head").getAttribute("position").x;

    this.calculerDistanceX = function(positionJoueurX,positionX) {

      return Math.round(Math.sqrt(Math.pow((positionJoueurX - positionX),2))*1000)/1000;

    };

    this.verifierDistance = function() {

      var head = document.querySelector("#head"),
          positionTete = head.getAttribute("position").x;
//console.log(vieillePositionX);
      if(positionTete > 0) {

          positionTete = Math.floor(positionTete*10)/10;
      }

      else if(positionTete < 0) {

        positionTete = Math.ceil(positionTete*10)/10;

      }

      /* On calcule la distance entre notre dernière position et notre nouvelle */
      var distance = this.calculerDistanceX(positionTete,vieillePositionX);

      /* Si on a fait un déplacement de 0.3 */
      if(distance >= 0.3 &&
        (positionTete % 0.3 == 0 ||
         positionTete % 0.3 == 5.551115123125783e-17 ||
         positionTete % 0.3 == -5.551115123125783e-17)) {

        vieillePositionX = positionTete;
        this.modifierDonnee(positionTete);

      }

    };

  },

  modifierDonnee:function(positionJoueurX) {

    var ensembleSphereGraphe = document.querySelectorAll(".sphereGraphe"),
        ensembleSphereGraphe_l =  ensembleSphereGraphe.length + 1,
        texteAnnee = document.querySelector("#anneeTexte"),
        ligneTemps = document.querySelectorAll(".ligneTemps"),
        annee;

    /* Mets les lignes du temps blanches */
    for(var j = 0;j < 11;j++) {

      ligneTemps[j].setAttribute("material",{color:0xFFFFFF});

    }

    /* Si on sort de la plateforme
    if(positionJoueurX > 1.5 || positionJoueurX < -1.5) {

      annee = null;
      texteAnnee.setAttribute("value","Go back on the plateform");
      texteAnnee.setAttribute("text",{wrapCount:8});

    }*/
    // Ligne de temps
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
      default:
        annee = null;
        ligneTemps[5].setAttribute("material",{color:0x22D1EE});
        texteAnnee.setAttribute("value",positionJoueurX);
        break;

    }

    /* Parcourt les pays */
    var position = {x:1.25, y:0.05, z:0};

    for(i=0;i<ensembleSphereGraphe_l;i++) {

      /*1 a 24*/
      var rowIncome = dataIncome[i];
      var cellsIncome = rowIncome.join(",").split(",");
      var rowLife = dataLife[i];
      var cellsLife = rowLife.join(",").split(",");

      /* Modifie le texte de l'année */
      if(i == 0 && annee != null) {

        texteAnnee.setAttribute("value",cellsLife[annee]);
        texteAnnee.setAttribute("text",{wrapCount:4});

      }

      /* Modifie les sphères des pays */
      else if(i > 0) {

          var scale = dataRayonPopulation[i][annee]/1.125;
          //console.log(cellsIncome[annee] + " " + cellsPopulation[0])
        /* Formule pour position le pays sur le Y */
        position.y = (cellsLife[annee]*0.08) + 0.655;

      //  position.x = cellsIncome[annee]/12300;
        /* Income position x*/
        if(cellsIncome[annee] <= 1000) {

          position.x = (A_REGLE_POSITION[0]*cellsIncome[annee]) +
                        B_REGLE_POSITION[0];

        }

        else if(cellsIncome[annee] >= 1000 && cellsIncome[annee] <= 2000) {

          position.x = (A_REGLE_POSITION[1]*cellsIncome[annee]) +
                        B_REGLE_POSITION[1];

        }

        else if(cellsIncome[annee] >= 2000 && cellsIncome[annee] <= 4000) {

          position.x = (A_REGLE_POSITION[2]*cellsIncome[annee]) +
                        B_REGLE_POSITION[2];

        }
        else if(cellsIncome[annee] >= 4000 && cellsIncome[annee] <= 8000) {

          position.x = (A_REGLE_POSITION[3]*cellsIncome[annee]) +
                        B_REGLE_POSITION[3];

        }

        else if(cellsIncome[annee] >= 8000 && cellsIncome[annee] <= 16000) {

          position.x = (A_REGLE_POSITION[4]*cellsIncome[annee]) +
                        B_REGLE_POSITION[4];

        }
        else if(cellsIncome[annee] >= 16000 && cellsIncome[annee] <= 32000) {

          position.x = (A_REGLE_POSITION[5]*cellsIncome[annee]) +
                        B_REGLE_POSITION[5];

        }

        else if(cellsIncome[annee] >= 32000 && cellsIncome[annee] <= 64000) {

          position.x = (A_REGLE_POSITION[6]*cellsIncome[annee]) +
                        B_REGLE_POSITION[6];

        }
        else if(cellsIncome[annee] >= 64000 && cellsIncome[annee] <= 128000) {

          position.x = (A_REGLE_POSITION[7]*cellsIncome[annee]) +
                        B_REGLE_POSITION[7];

        }

        ensembleSphereGraphe[i - 1].setAttribute("position",position);
        ensembleSphereGraphe[i - 1].setAttribute("geometry",{radius:scale*1.125});
        ensembleSphereGraphe[i - 1].children[1].children[0].setAttribute("text",{value:"Income: " + cellsIncome[annee] + " $"});
        ensembleSphereGraphe[i - 1].children[1].children[1].setAttribute("text",{value:"Life Expectancy: " + cellsLife[annee] + " years"});
        ensembleSphereGraphe[i - 1].children[1].children[2].setAttribute("text",{value:"Population : " + dataPopulation[i][annee]});
        ensembleSphereGraphe[i - 1].object3D.children[0].scale.set(scale,scale,0.05);

      }

    }

  },

  tick:function() {

    this.verifierDistance();

  }

});
