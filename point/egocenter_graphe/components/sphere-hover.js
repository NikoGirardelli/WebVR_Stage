/* S'occupe de montrer le texte de tous les pays
*  appartenant au continent choisi et affiche les données du pays visé.
*/
var dataIncome = JSON.parse(sessionStorage.getItem('dataIncome')),
    dataLife = JSON.parse(sessionStorage.getItem('dataLife'));
AFRAME.registerComponent("sphere-hover", {

		init: function () {

			/* Référence à l'écran */
      //var txtJour = document.querySelector("#textJour"),

			/* Sphere */
			var el = this.el,
					continentAppartenant = el.parentEl,
					leThis = this,
					hoverEnCours = false;
					//anim = document.createElement('a-animation'),
					//animText = document.createElement('a-animation');
					//console.log(el)
			/*
			animText.setAttribute("mixin","fadeCouleur");
			el.firstElementChild.appendChild(animText);
			el.appendChild(anim);*/
			//console.log(this)
			/* Raycaster-intersected */
			this.eventScalingBegining = function() {

				leThis.peutHover();//hoverEnCours = true;
				leThis.selectionnerPays();
				//el.setAttribute("material",{visible:true});

      };

			/* Raycaster-intersected-cleared */
			this.eventScalingEnding = function() {

				hoverEnCours = false;
				leThis.selectionnerPays();
				//el.setAttribute("material",{visible:false});

      };

			/* Afficher ou ne pas afficher le nom des pays */
			this.selectionnerPays = function() {

				var l = continentAppartenant.children.length;

				if(hoverEnCours == true) {

					for(var i = 0;i < l;i++){

						continentAppartenant.children[i].children[0].setAttribute("visible",true);

					}

					el.children[1].setAttribute("visible",true);
          el.children[0].setAttribute("visible",false);
        //  el.setAttribute("material",{visible:true});
          el.object3D.children[0].material.opacity = 1;

				}

				else if(hoverEnCours == false) {

					for(var j = 0;j < l;j++){

						continentAppartenant.children[j].children[0].setAttribute("visible",false);

					}

					el.children[1].setAttribute("visible",false);
          el.children[0].setAttribute("visible",false);
        //  el.setAttribute("material",{visible:false});
          el.object3D.children[0].material.opacity = 0.5;

				}


				/*var paysChoisi = JSON.parse(sessionStorage.getItem('paysChoisi'));

				/* Si on ne aucun pays choisi dernièrement
				if(paysChoisi == null) {

					paysChoisi = new Array();

				}

				// Cherche notre pays dans le tableau
				if(paysChoisi.indexOf(el.getAttribute("data-pays")) == -1) {

					/* Ajout du pays dans notre tableau
					paysChoisi.push(el.getAttribute("data-pays"));

				}
				/* Si le pays est déjà dans le tableau
				else if(paysChoisi.indexOf(el.getAttribute("data-pays")) != -1) {

					/* Supprime le pays
					var posPays = paysChoisi.indexOf(el.getAttribute("data-pays"));
					paysChoisi.splice(posPays,1);

				}*/

				/* Joue l'animation de fade-in/fade-out
				switch(el.attributes[1].nodeValue) {
					case "Americas":
					el.emit("playFadeAmericas");
					break;

					case "Africa":
					el.emit("playFadeAfrica");
					break;

					case "Europe":
					el.emit("playFadeEurope");
					break;

					case "Asia":
					el.emit("playFadeAsia");
					break;
				}

				el.firstElementChild.emit("playFadeCouleur");
				var maSphere = document.querySelector('[data-pays-sphere="'+ el.getAttribute("data-pays")+'"]');
				var visible = maSphere.getAttribute("visible");
				maSphere.setAttribute("visible",!visible);*/

				/* Enregistrement de la variable paysChoisi dans la sessionStorage
				sessionStorage.setItem("paysChoisi", JSON.stringify(paysChoisi));*/

			};

      /* Si on a compté au moins pays de survoler,
      *  on ne peut pas hover un autre.
      */
      this.peutHover = function() {

        var mainPointeur = document.querySelector("#rhand");

          if(mainPointeur.components['raycaster'].intersectedEls.length == 1) {

            hoverEnCours = true;

          }

          if(mainPointeur.components['raycaster'].intersectedEls.length > 1) {

            hoverEnCours = false;

          }

      };

    },

		play:function () {

			/* Lorsque qu'on hover le sphere */
      this.el.addEventListener('raycaster-intersected', this.eventScalingBegining);

			/* Lorsque qu'on ne hover plus le sphere */
      this.el.addEventListener('raycaster-intersected-cleared', this.eventScalingEnding);

		},

		pause:function() {

			this.el.removeEventListener("raycaster-intersected",this.eventScalingBegining);
			this.el.removeEventListener("raycaster-intersected-cleared",this.eventScalingEnding);

		},

		remove:function() {

			this.el.object3D.removeEventListener("raycaster-intersected",this.eventScalingBegining);
			this.el.removeEventListener("raycaster-intersected-cleared",this.eventScalingEnding);

		}

});
