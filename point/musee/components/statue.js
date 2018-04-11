/* S'occupe de former la statue selon les datas. */
const LES_ANNEES = [1,11,21,31,41,51,61];//1950,1960,1970,1980,1990,2000,2010

AFRAME.registerComponent("statue", {

		schema: {
			annee: {type: 'int', default: LES_ANNEES[0], oneOf:LES_ANNEES},// Garder annee
			dataAlcoolConsommation: {type: 'boolean', default: false},
			dataCigarette: {type: 'boolean', default: false},
			dataEducation: {type: 'boolean', default: false},
			dataIncome: {type: 'boolean', default: false},
			dataLife: {type: 'boolean', default: false},
			dataPollution: {type: 'boolean', default: false},
			dataPopulation: {type: 'boolean', default: false},
			dataSucreConsommation: {type: 'boolean', default: false},
			numeroPays: {type: 'int', default: 0}// Garder en mémoire l'indice de l'enfant

		},

		init: function () {

			/* Statue */
			var el = this.el,
					continentAppartenant = el.parentEl,
					leThis = this,
					hoverEnCours = false,
					mainPointeur = document.querySelector("#rhand");

    },

		metamorphoserStatue:function() {

			var annee = this.data.annee,
					paysChoisi = this.data.numeroPays,
		      couleur = {},
					statue = this.el,
					ui = statue.children[0],
		      texteNom = ui.children[0],
		      texteData1 = ui.children[1],
		      texteData2 = ui.children[2],
		      texteData3 = ui.children[3],
		      texteData4 = ui.children[4],
		      texteData5 = ui.children[5],
		      bouteille = statue.children[1],
		      alcohol = bouteille.children[0],
		      nuage = statue.children[2],
					sol = statue.children[3],
					texteNomBase = sol.children[0],
		      argent = statue.children[4],
		      cigarette = statue.children[5],
					piece = document.querySelector("#piece");

		 /* Pour empêcher un bug avec les déformations,
		    on ne modifie pas les statue sans un pays */
		 if(paysChoisi != 0) {

			texteNom.setAttribute("text", {
 		    value:dataIncome[paysChoisi][0]
 		  });

 		  texteData1.setAttribute("text", {
 		    value:"Income: " + dataIncome[paysChoisi][annee] + " $"
 		  });

 		  texteData2.setAttribute("text", {
 		    value:"Life Expectancy: " + dataLife[paysChoisi][annee] + " years"
 		  });

 		  texteData3.setAttribute("text", {
 		    value:"Population : " + dataPopulation[paysChoisi][annee]
 		  });

 		  texteData4.setAttribute("text", {
 		    value:"Mean Years of Schooling : " + dataEducation[paysChoisi][annee]
 		  });

 		  texteData5.setAttribute("text", {
 		    value:"Sugar per person (g/day) : " + dataSucreConsommation[paysChoisi][annee]
 		  });

 			if(piece.getAttribute("modification-piece").piece == LES_PIECES[2]) {

 				texteNomBase.setAttribute("text", {
 			    value:dataIncome[0][LES_ANNEES[this.data.numeroPays + 1]]
 			  });

 			} else {

 				texteNomBase.setAttribute("text", {
 			    value:dataIncome[paysChoisi][0]
 			  });

 			}


 			/* Cigarette */
 		  cigarette.setAttribute("scale",{
 		    x:0.15,
 		    y:0.1+ (0.0075*dataCigarette[paysChoisi][annee]),
 		    z:0.15
 		  });

 		  /* Alcool */
 		  alcohol.setAttribute("scale",{
 		    x:1,
 		    y:dataAlcoolConsommation[paysChoisi][annee]/19.15,
 		    z:1
 		  });

 		  /* Nuage */
 		  nuage.setAttribute("scale",{
 		    x:0.3 + (3*dataPollution[paysChoisi][annee]/69),
 		    y:0.3 + (3*dataPollution[paysChoisi][annee]/69),
 		    z:0.3 + (3*dataPollution[paysChoisi][annee]/69)
 		  });
 		  nuage.setAttribute("position",{
 		    x:0,
 		    y:10 + (6.5*dataRayonPopulation[paysChoisi][annee]),
 		    z:0
 		  });

 		  /* Argent */
 		  argent.setAttribute("scale",{
 		    x:0.5 + (0.125*dataIncome[paysChoisi][annee]/13486),
 		    y:0.5 + (0.125*dataIncome[paysChoisi][annee]/13486),
 		    z:0.5 + (0.125*dataIncome[paysChoisi][annee]/13486)
 		  });

 	    /* Association couleur - Life Expectancy */
 	    if(dataLife[paysChoisi][annee] < 40 && this.data.dataLife === true) {

 	      couleur = COULEUR_STATUE[0]; // Vert
 	    }

 	    else if(dataLife[paysChoisi][annee] < 50 && this.data.dataLife === true) {

 	      couleur = COULEUR_STATUE[1]; // Bronze

 	    }

 	    else if(dataLife[paysChoisi][annee] < 70 || this.data.dataLife === false) {

 	      couleur = COULEUR_STATUE[2]; // Argent

 	    }

 	    else if(dataLife[paysChoisi][annee] > 70 && this.data.dataLife === true) {

 	      couleur = COULEUR_STATUE[3]; // Or

 	    }

 	    /* Life Expectancy - couleur */
 			statue.getObject3D("mesh").children[0].material.color = couleur;

 			/* Consommation sucre gramme par jour - obese */
 			if(this.data.dataSucreConsommation === true) {

 				statue.getObject3D("mesh").children[0].morphTargetInfluences[0] = dataSucreConsommation[paysChoisi][annee]/100;

 			} else {

 				statue.getObject3D("mesh").children[0].morphTargetInfluences[0] = 0;

 			}

 			/* Population - grandeur */
 			if(this.data.dataPopulation === true) {

 				statue.getObject3D("mesh").children[0].morphTargetInfluences[2] = 3*dataRayonPopulation[paysChoisi][annee];

 			} else {

 				statue.getObject3D("mesh").children[0].morphTargetInfluences[2] = 0;

 			}

 			/* Année d'éducation en moyen - cerveau */
 			if(this.data.dataEducation === true) {

  				statue.getObject3D("mesh").children[0].morphTargetInfluences[7] = dataEducation[paysChoisi][annee]/12;

 			} else {

 				statue.getObject3D("mesh").children[0].morphTargetInfluences[7] = 0;

 			}

 			/* Alcool */
 			if(this.data.dataAlcoolConsommation === true) {

  				alcohol.setAttribute('visible',true);
 				bouteille.setAttribute('visible',true);

 			} else {

 				alcohol.setAttribute('visible',false);
 				bouteille.setAttribute('visible',false);

 			}

 			/* Cigarette */
 			if(this.data.dataCigarette === true) {

  				cigarette.setAttribute('visible',true);

 			} else {

 				cigarette.setAttribute('visible',false);

 			}

 			/* Pollution */
 			if(this.data.dataPollution === true) {

  				nuage.setAttribute('visible',true);

 			} else {

 				nuage.setAttribute('visible',false);

 			}

 			/* Income */
 			if(this.data.dataIncome === true) {

  				argent.setAttribute('visible',true);

 			} else {

 				argent.setAttribute('visible',false);

 			}

		 }

		},

		update:function () {

			this.metamorphoserStatue();

		},

		pause:function() {


		},

		remove:function() {


		}

});
