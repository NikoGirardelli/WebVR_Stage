/* S'occupe de former la statue selon les datas. */

AFRAME.registerComponent("statue", {

		schema: {
	  	numero: {type: 'int', default: 0}
		},

		init: function () {

			/* Statue */
			var el = this.el,
					continentAppartenant = el.parentEl,
					leThis = this,
					hoverEnCours = false,
					mainPointeur = document.querySelector("#rhand");

			/* Raycaster-intersected */
			this.eventScalingBegining = function() {

				leThis.peutHover();
			//	mainPointeur.components.raycaster.refreshObjects();
				/* Si le pays est visible */
				if(this.getAttribute("visible") == true){

					leThis.selectionnerPays(mainPointeur.components.raycaster.intersectedEls[0]);

				}

      };

			/* Raycaster-intersected-cleared.
			*  Fonctionne seulement lorsqu'on ne vise plus
			*/
			this.eventScalingEnding = function() {

				hoverEnCours = false;
				leThis.selectionnerPays(this);

      };

			/* Afficher ou ne pas afficher le nom des pays */
			this.selectionnerPays = function(objetVise) {

				var l = continentAppartenant.children.length;

				if(hoverEnCours == true) {

					for(var i = 0;i < l;i++){

						/* Titre pays du continent */
						continentAppartenant.children[i].children[0].setAttribute("visible",true);

					}

					el.children[1].setAttribute("visible",true);
          el.children[0].setAttribute("visible",false);
          el.object3D.children[0].material.opacity = 1;

				}

				else if(hoverEnCours == false) {

					for(var j = 0;j < l;j++){

						/* Titre pays du continent */
						continentAppartenant.children[j].children[0].setAttribute("visible",false);

					}

					el.children[1].setAttribute("visible",false);
          el.children[0].setAttribute("visible",false);
          el.object3D.children[0].material.opacity = 0.3;

				}

			};

      /* Si on a compté au moins pays de survoler,
      *  on ne peut pas hover un autre.
      */
      this.peutHover = function() {

				var lesPays = document.querySelectorAll(".sphereGraphe"),
						l = lesPays.length,
						compteur = 0;

				for(var i = 0;i < l;i++) {

					// Si un ui est déjà visible
					if(lesPays[i].children[1].getAttribute("visible") == true) {

						compteur ++;

					}

				}

				if(compteur > 1) {

					hoverEnCours = false;
					//leThis.selectionnerPays(mainPointeur.components.raycaster.intersectedEls[0]);

				}
				else if(compteur == 0) {

					hoverEnCours = true;
					//leThis.selectionnerPays(mainPointeur.components.raycaster.intersectedEls[0]);

				}

				return compteur;

      };

			//this.metamorphoserStatue()

    },

		metamorphoserStatue:function() {

			var statue = this.el,
					annee = 12,
					couleur = {};

			statue.addEventListener("model-loaded",function() {

		    console.log(statue.hasLoaded)

		    /* Association couleur - Life Expectancy
		    if(dataLife[paysChoisi][annee] < 40) {

		      couleur = {r:0.33,g:0.42,b:0.18}; // Roche

		    }

		    else if(dataLife[paysChoisi][annee] < 50) {

		      couleur = {r:0.80,g:0.50,b:0.20}; // Bronze

		    }

		    else if(dataLife[paysChoisi][annee] < 70) {

		      couleur = {r:0.75,g:0.75,b:0.75}; // Argent

		    }

		    else if(dataLife[paysChoisi][annee] > 70) {

		      couleur = {r:0.85,g:0.65,b:0.13}; // Or

		    }*/

		    /* Life Expectancy - couleur  minimum = 24.76 - max = 82 */
		    statue.getObject3D("mesh").children[0].material.color = couleur;

		    /* Consommation sucre gram par jour - obese */
		    statue.getObject3D("mesh").children[0].morphTargetInfluences[0] = dataSucreConsommation[data.numeroPays][annee]/100;

		    /* Income - grandeur */
		  	statue.getObject3D("mesh").children[0].morphTargetInfluences[2] = dataIncome[data.numeroPays][annee]/13486;

		    /* Année d'éducation en moyen -Rayon Population cerveau */
		  	statue.getObject3D("mesh").children[0].morphTargetInfluences[7] = dataEducation[data.numeroPays][annee]/12;

		    /* Pose initiale */
		    //statue.getObject3D("mesh").children[0].morphTargetInfluences[9] = 0;

		  });

			bouteille.setAttribute("material",{src:"#gapminder"});

		  /* Population qui affecte le ballon */
		  balloon.setAttribute("material",{color:"red"});
		  balloon.setAttribute("geometry",{

		    primitive:"sphere",
		    radius:dataRayonPopulation[data.numeroPays][annee]*1.5,
		    segmentsHeight:4,
		    segmentsWidth:10

		  });

		},

		play:function () {

			/* Lorsque qu'on hover le sphere */
	   // this.el.addEventListener('raycaster-intersected', this.eventScalingBegining);

			/* Lorsque qu'on ne hover plus le sphere */
      //this.el.addEventListener('raycaster-intersected-cleared', this.eventScalingEnding);

		},

		pause:function() {

			//this.el.removeEventListener("raycaster-intersected",this.eventScalingBegining);
			//this.el.removeEventListener("raycaster-intersected-cleared",this.eventScalingEnding);

		},

		remove:function() {

//			this.el.removeEventListener("raycaster-intersected",this.eventScalingBegining);
	//		this.el.removeEventListener("raycaster-intersected-cleared",this.eventScalingEnding);

		}

});
