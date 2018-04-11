/* S'occupe de savoir quel journée est saisie lorsque les boutons sont cliqué */
AFRAME.registerComponent("bouton-generate", {

	  init: function () {

			var el = this.el,

					/* Référence au contenant de la ligne */
					tabLigneGraphe = document.querySelectorAll(".ligneGraphe"),

					/* Référence au conteneur des datas */
					horloge = document.querySelector("#horloge"),
					lecteurCube = document.querySelector(".lecteurCube"),

					ligneStart1 = [ "0 .0423 .8", "0 .0545 .76", "0 .0742 .72", "0 .0965 .68", "0 .1407 .64",  "0 .1833 .6",  "0 .2225 .56",
										 "0 .2464 .52", "0 .2715 .48", "0 .2963 .44", "0 .3132 .4", "0 .3264 .36 ", "0 .3164 .32",  "0 .3109 .28",
										 "0 .3138 .24"," 0 .3120 .2",  "0 .3149 .16",  "0 .3109 .12",  "0 .3161 .08" , "0 .3270 .04" ," 0 .3471 0 ","0 .3393 -.04",
										"0 .3495 -.08","0 .3603 -.12","0 .3684 -.16","0 .3897 -.2","0 .4069 -.24","0 .4191 -.28","0 .4289 -.32","0 .4506 -.36",
										"0 .4587 -.4","0 .4713 -.44","0 .4794 -.48","0 .4789 -.52","0 .4767 -.56","0 .4679 -.6","0 .4761 -.64","0 .4757 -.68",
										"0 .4867 -.72","0 .4873 -.76"],
					ligneEnd1 = ["0 .0545 .76","0 .0742 .72","0 .0965 .68","0 .1407 .64","0 .1833 .60","0 .2225 .56",
											"0 .2464 .52","0 .2715 .48","0 .2963 .44","0 .3132 .40","0 .3264 .36","0 .3164 .32","0 .3109 .28",
											"0 .3138 .24","0 .3120 .20","0 .3149 .16","0 .3109 .12","0 .3161 .08","0 .3270 .04","0 .3471 0",
											"0 .3393 -.04","0 .3495 -.08","0 .3603 -.12","0 .3684 -.16","0 .3897 -.20","0 .4069 -.24",
											"0 .4191 -.28","0 .4289 -.32","0 .4506 -.36","0 .4587 -.40","0 .4713 -.44","0 .4794 -.48",
											"0 .4789 -.52","0 .4767 -.56","0 .4679 -.60","0 .4761 -.64","0 .4757 -.68","0 .4867 -.72",
											"0 .4873 -.76","0 .4873 -.80"],

				  ligneStart2 = ligneStart1,
				  ligneEnd2 = ligneEnd1,

				  couleur = "";

			this.generationGraphe = function() {

				if(el.getAttribute("data-pret-generate") == "true") {

					/* Si on choisi une heure, on change la couleur de la ligne */
					switch (horloge.getAttribute("data-heure-choisisse")) {

						case "12":
							couleur = "#c9c3c3";
							break;
						case "1":
							couleur = "#af9480";
							break;
						case "2":
							couleur = "#498446";
							break;
						case "3":
							couleur = "#fffb26";
							break;
						case "4":
							couleur = "#28ffde";
							break;
						case "5":
							couleur = "#2772f4";
							break;
						case "6":
							couleur = "#8e27e8";
							break;
						case "7":
							couleur = "#e829be";
							break;
						case "8":
								couleur = "#e2266e";
								break;
						case "9":
								couleur = "#890000";
								break;
						case "10":
								couleur = "#ff9000";
								break;
						case "11":
								couleur = "#154c56";
								break;
						default:couleur = "red";

					}

					switch (lecteurCube.getAttribute("data-mois-choisi")) {

						case "JAN":
							ligneStart2 = ligneStart1.reverse();
							ligneEnd2 = ligneEnd1.reverse();
							break;

						case "FEB":
							ligneStart2 = ligneStart1.sort();
							ligneEnd2 = ligneEnd1.sort();
							break;

						case "DEC":
							ligneStart2 = ligneStart1.reverse();
							ligneEnd2 = ligneEnd1.reverse();
							break;

						case "MAR":
							ligneStart2 = ligneStart1.reverse();
							ligneEnd2 = ligneEnd1.reverse();
							break;

						case "APR":
							ligneStart2 = ligneStart1.sort();
							ligneEnd2 = ligneEnd1.sort();
							break;
						case "MAY":
							ligneStart2 = ligneStart1.reverse();
							ligneEnd2 = ligneEnd1.reverse();
							break;

						case "JUNE":
							ligneStart2 = ligneStart1.reverse();
							ligneEnd2 = ligneEnd1.reverse();
							break;
						case "JULY":
							ligneStart2 = ligneStart1.sort();
							ligneEnd2 = ligneEnd1.sort();
							break;

						case "AUG":
							ligneStart2 = ligneStart1.reverse();
							ligneEnd2 = ligneEnd1.reverse();
							break;

						case "NOV":
							ligneStart2 = ligneStart1.reverse();
							ligneEnd2 = ligneEnd1.reverse();
							break;

						case "SEPT":
							ligneStart2 = ligneStart1.sort();
							ligneEnd2 = ligneEnd1.sort();
							break;

						case "OCT":
							ligneStart2 = ligneStart1.reverse();
							ligneEnd2 = ligneEnd1.reverse();
							break;

						default:
							//console.log("defaut");
							break;

					}

					/* Parcourt tous le tabLigneGraphe afin de générer
					 	 des lignes dans chacun des emplacements */
					for(var j = 0; j < tabLigneGraphe.length;j++) {

						for(var i=1; i < 33; i++) {

							if(j > 3) {

								tabLigneGraphe[j].setAttribute("tube", "path:0 0 0, -1 -1 -10, -3 -3 -20, 0 0 -30" );
								tabLigneGraphe[j].setAttribute("tube", "radius", 0.01);
								tabLigneGraphe[j].setAttribute("tube", "closed", "true");
								tabLigneGraphe[j].setAttribute("material", "color", couleur);
								tabLigneGraphe[j].setAttribute("scale", "0.05 0.05 0.05");

							}

							else {

								tabLigneGraphe[j].setAttribute("line__"+i, "start",ligneStart2[i]);
								tabLigneGraphe[j].setAttribute("line__"+i, "end",ligneEnd2[i]);
								tabLigneGraphe[j].setAttribute("line__"+i,"color", couleur);

							}

						}

					}

				}

			};

			this.verificationChampsRempli = function() {

				var jourChoix = JSON.parse(sessionStorage.getItem('jourChoisi'));

				if(lecteurCube.getAttribute("data-mois-choisi") != "" &&
					 horloge.getAttribute("data-heure-choisisse") != ""	&&
				 	 jourChoix != null) {

						 this.el.setAttribute("data-pret-generate","true");

				}

				else if(lecteurCube.getAttribute("data-mois-choisi") == "" ||
					 			horloge.getAttribute("data-heure-choisisse") == "" ||
							 	jourChoix != null) {

						 this.el.setAttribute("data-pret-generate","false");

			  }

			};

	},

	play:function() {

		/* Lorsque qu'on appuit le bouton */
		this.el.addEventListener('pressed',this.generationGraphe);

	},

	pause:function() {

		/* Lorsque qu'on appuit le bouton */
		this.el.removeEventListener('pressed',this.generationGraphe);

	},

	tick:function() {

		this.verificationChampsRempli();

	}

});
