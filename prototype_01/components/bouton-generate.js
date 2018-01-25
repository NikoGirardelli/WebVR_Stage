/* S'occupe de savoir quel journée est saisie lorsque les boutons sont cliqué */
AFRAME.registerComponent("bouton-generate", {

	  update: function () {

		var el = this.el;

		/* Référence au contenant de la ligne */
		var ligneGraphe = document.querySelector("#ligneGraphe");

		/* Référence au conteneur des datas */
		var ecranJour = document.querySelector("#ecranJour");
		var horloge = document.querySelector("#horloge");
		var lecteurCube = document.querySelector(".lecteurCube");

		var ligneStart1 = [ "-.7 .0423 .8", "-.7 .0545 .76", "-.7 .0742 .72", "-.7 .0965 .68", "-.7 .1407 .64",  "-.7 .1833 .6",  "-.7 .2225 .56",
									 "-.7 .2464 .52", "-.7 .2715 .48", "-.7 .2963 .44", "-.7 .3132 .4", "-.7 .3264 .36 ", "-.7 .3164 .32",  "-.7 .3109 .28",
									 "-.7 .3138 .24"," -.7 .3120 .2",  "-.7 .3149 .16",  "-.7 .3109 .12",  "-.7 .3161 .08" , "-.7 .3270 .04" ," -.7 .3471 0 ","-.7 .3393 -.04",
									"-.7 .3495 -.08","-.7 .3603 -.12","-.7 .3684 -.16","-.7 .3897 -.2","-.7 .4069 -.24","-.7 .4191 -.28","-.7 .4289 -.32","-.7 .4506 -.36",
									"-.7 .4587 -.4","-.7 .4713 -.44","-.7 .4794 -.48","-.7 .4789 -.52","-.7 .4767 -.56","-.7 .4679 -.6","-.7 .4761 -.64","-.7 .4757 -.68",
									"-.7 .4867 -.72","-.7 .4873 -.76"];
		var	ligneEnd1 = ["-.7 .0545 .76","-.7 .0742 .72","-.7 .0965 .68","-.7 .1407 .64","-.7 .1833 .60","-.7 .2225 .56",
										"-.7 .2464 .52","-.7 .2715 .48","-.7 .2963 .44","-.7 .3132 .40","-.7 .3264 .36","-.7 .3164 .32","-.7 .3109 .28",
										"-.7 .3138 .24","-.7 .3120 .20","-.7 .3149 .16","-.7 .3109 .12","-.7 .3161 .08","-.7 .3270 .04","-.7 .3471 0",
										"-.7 .3393 -.04","-.7 .3495 -.08","-.7 .3603 -.12","-.7 .3684 -.16","-.7 .3897 -.20","-.7 .4069 -.24",
										"-.7 .4191 -.28","-.7 .4289 -.32","-.7 .4506 -.36","-.7 .4587 -.40","-.7 .4713 -.44","-.7 .4794 -.48",
										"-.7 .4789 -.52","-.7 .4767 -.56","-.7 .4679 -.60","-.7 .4761 -.64","-.7 .4757 -.68","-.7 .4867 -.72",
										"-.7 .4873 -.76","-.7 .4873 -.80"];

		/* Lorsque qu'on appuit le bouton */
		el.addEventListener('pressed', function() {

			if(el.getAttribute("data-pret-generate") == "true") {

				for(var i=1; i < 33; i++) {

					ligneGraphe.setAttribute("line__"+i, "start:" + ligneStart1[i]);
					ligneGraphe.setAttribute("line__"+i, "end:" +ligneEnd1[i]);
					ligneGraphe.setAttribute("line__"+i,"color:red;");

				}

				console.log("ligne crafte");

			}

			else {

				console.log("entre info");

			}

		});


	},

	tick:function() {

		var ecranJour = document.querySelector("#ecranJour");
		var horloge = document.querySelector("#horloge");
		var lecteurCube = document.querySelector(".lecteurCube");

		if(lecteurCube.getAttribute("data-mois-choisi") != "" &&
			 horloge.getAttribute("data-heure-choisisse") != ""	&&
		 	 ecranJour.getAttribute("data-jour-choisi") != "") {

				 this.el.setAttribute("data-pret-generate","true");


		}

		else if(lecteurCube.getAttribute("data-mois-choisi") == "" ||
			 			horloge.getAttribute("data-heure-choisisse") == "" ||
					 	ecranJour.getAttribute("data-jour-choisi") == "") {

				 this.el.setAttribute("data-pret-generate","false");
	  }

	}

});
