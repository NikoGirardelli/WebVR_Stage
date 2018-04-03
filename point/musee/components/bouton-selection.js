var typesPanneau = ["panneauData","panneauAnnee","panneauPiece"];

/* S'occupe de savoir quel journée est saisie
 * lorsque les boutons sont cliqué
 */
AFRAME.registerComponent("bouton-selection", {

	schema: {

		actif: {default:1, type:"int"}// 0 = non 1 = oui

	},


		init: function () {

			/* Bouton */
			var el = this.el,
					leThis = this,
					anim = document.createElement('a-animation'),
					data = this.data;

			anim.setAttribute("mixin","fadeBouton");
			el.appendChild(anim);


			/* Raycaster-intersected */
			this.eventScalingBegining = function() {

					el.setAttribute("scale","1.2 1.2 1.2");

      };

			/* Raycaster-intersected-cleared */
			this.eventScalingEnding = function() {

					el.setAttribute("scale","1 1 1");

      };

			this.animerPanneau = function() {

					leThis.activerSelection();

	 				el.emit("playFadeBouton");

	 		}

	  },

		activerSelection:function() {

			var el = this.el,
					lesBoutonsPieces = document.querySelectorAll("."+ typesPanneau[2]),
					lesBoutonsAnnees = document.querySelectorAll("."+ typesPanneau[1]),
					piece = document.querySelector("#piece"),
					lesStatues = document.querySelectorAll(".statue"),
					lesStatuesL = lesStatues.length,
					anim = el.children[0];

			/* panneauData */
			if(el.getAttribute("class") == typesPanneau[0]) {

				var dataCsv = el.getAttribute("data-csv");

				anim.setAttribute("from","#000000");
				anim.setAttribute("to","#4c4c4c");
				anim.setAttribute("direction","alternate");
				anim.setAttribute("fill","both");


				switch(dataCsv) {

					case "1":
									for(var i = 0;i < lesStatuesL;i++) {

										lesStatues[i].setAttribute("statue",{
											dataAlcoolConsommation:!lesStatues[i].getAttribute("statue").dataAlcoolConsommation});

									}
					break;
					case "2":
									for(var i = 0;i < lesStatuesL;i++) {

										lesStatues[i].setAttribute("statue",{
											dataCigarette:!lesStatues[i].getAttribute("statue").dataCigarette});

									}
					break;
					case "3":
									for(var i = 0;i < lesStatuesL;i++) {

										lesStatues[i].setAttribute("statue",{
											dataEducation:!lesStatues[i].getAttribute("statue").dataEducation});

									}
					break;
					case "4":
									for(var i = 0;i < lesStatuesL;i++) {

										lesStatues[i].setAttribute("statue",{
											dataIncome:!lesStatues[i].getAttribute("statue").dataIncome});

									}
					break;
					case "5":
									for(var i = 0;i < lesStatuesL;i++) {

										lesStatues[i].setAttribute("statue",{
											dataLife:!lesStatues[i].getAttribute("statue").dataLife});

									}
					break;
					case "6":
									for(var i = 0;i < lesStatuesL;i++) {

										lesStatues[i].setAttribute("statue",{
											dataPollution:!lesStatues[i].getAttribute("statue").dataPollution});

									}
					break;
					case "7":
									for(var i = 0;i < lesStatuesL;i++) {

										lesStatues[i].setAttribute("statue",{
											dataPopulation:!lesStatues[i].getAttribute("statue").dataPopulation});

									}
					break;
					case "8":
									for(var i = 0;i < lesStatuesL;i++) {

										lesStatues[i].setAttribute("statue",{
											dataSucreConsommation:!lesStatues[i].getAttribute("statue").dataSucreConsommation});

									}
					break;

				}

			}
			/* Change l'annéee lors du clique */
			if(el.getAttribute("class") == typesPanneau[1]) {

				var dataAnnee = el.getAttribute("data-annee");

				for(var i = 0;i < 7 ;i++) {

						//lesBoutonsAnnees[i].setAttribute("text",{color:0xFFFFFF});
						lesBoutonsAnnees[i].setAttribute("material",{color:0x4c4c4c});

				}

				//el.setAttribute("text",{color:0x33dded});

				for(var i = 0;i < lesStatuesL;i++) {

					lesStatues[i].setAttribute("statue",{annee:LES_ANNEES[dataAnnee]});


				}

			}
			/* Change de lieu lors du clique */
			if(el.getAttribute("class") == typesPanneau[2]) {

				for(var i = 0;i < 4 ;i++) {

					//	lesBoutonsPieces[i].setAttribute("text",{color:0xFFFFFF});
						lesBoutonsPieces[i].setAttribute("material",{color:0x4c4c4c});

				}

			//	el.setAttribute("text",{color:0x33dded});

				var dataPiece = el.getAttribute("data-piece");

				piece.setAttribute("modification-piece",{piece:LES_PIECES[dataPiece]});


			}

		},

		play:function () {

				/* Lorsqu'on clique le jour */
				this.el.addEventListener("click",this.animerPanneau);

				/* Lorsque qu'on hover le bouton */
	      this.el.addEventListener('raycaster-intersected', this.eventScalingBegining);

				/* Lorsque qu'on ne hover plus le bouton */
	      this.el.addEventListener('raycaster-intersected-cleared', this.eventScalingEnding);

		},

		pause:function() {


		},

		remove:function() {

			this.el.removeEventListener("click",this.animerPanneau);
			this.el.removeEventListener("raycaster-intersected",this.eventScalingBegining);
			this.el.removeEventListener("raycaster-intersected-cleared",this.eventScalingEnding);

		}

});
