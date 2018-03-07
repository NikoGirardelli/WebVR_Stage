/* S'occupe de montrer le texte de tous les pays
*  appartenant au continent choisi et affiche les données du pays visé.
*/

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
          el.object3D.children[0].material.opacity = 0.3;

				}

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
