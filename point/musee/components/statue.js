/* S'occupe de former la statue selon les datas. */

AFRAME.registerComponent("statue", {

		schema: {
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

		metamorphoserStatue:function(annee) {

			//var annee = 16; // 1965

			/* Créer le sol */
			var paysChoisi = this.data.numeroPays,
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
		      cigarette = statue.children[5];

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

		  texteNomBase.setAttribute("text", {
		    value:dataIncome[paysChoisi][0]
		  });

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

		  /* Lorsque le modèle est chargé. Peut seulement avoir 4 morphsTarget d'activer. */
		  statue.addEventListener("model-loaded",function() {

		    /* Association couleur - Life Expectancy */
		    if(dataLife[paysChoisi][annee] < 40) {

		      couleur = COULEUR_STATUE[0]; // Vert
		    }

		    else if(dataLife[paysChoisi][annee] < 50) {

		      couleur = COULEUR_STATUE[1]; // Bronze

		    }

		    else if(dataLife[paysChoisi][annee] < 70) {

		      couleur = COULEUR_STATUE[2]; // Argent

		    }

		    else if(dataLife[paysChoisi][annee] > 70) {

		      couleur = COULEUR_STATUE[3]; // Or

		    }

		    /* Life Expectancy - couleur  minimum = 24.76 - max = 82 */
		    statue.getObject3D("mesh").children[0].material.color = couleur;

		    /* Consommation sucre gram par jour - obese */
		    statue.getObject3D("mesh").children[0].morphTargetInfluences[0] = dataSucreConsommation[paysChoisi][annee]/100;

		    /* Population - grandeur */
		    statue.getObject3D("mesh").children[0].morphTargetInfluences[2] = 3*dataRayonPopulation[paysChoisi][annee];

		    /* Année d'éducation en moyen -Rayon Population cerveau */
		    statue.getObject3D("mesh").children[0].morphTargetInfluences[7] = dataEducation[paysChoisi][annee]/12;

		  });

		},

		play:function () {

			this.metamorphoserStatue(66)

		},

		pause:function() {


		},

		remove:function() {


		}

});
