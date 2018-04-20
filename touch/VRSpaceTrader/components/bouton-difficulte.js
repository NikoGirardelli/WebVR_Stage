/* Permet à l'usager de choisir sa difficulté */
AFRAME.registerComponent("bouton-difficulte", {

		init: function () {

			var el = this.el,
					panneauParent = el.parentEl.parentEl,
					positionAnimY = el.getAttribute("position").y;
				  positionAnim = {x:0,y:positionAnimY,z:-0.08},
					positionInit = {x:0,y:positionAnimY,z:0.2};

			/* Animation posiiton et couleur */
			el.setAttribute("animation__text",{
				dur:300,
				property:"text.color",
				to:"#0099ff",
				from:"#FFFFFF",
				startEvents:"click",
				autoplay:false
			});

			el.setAttribute("animation__position",{
				dur:300,
				property:"position",
				to:positionAnim,
				from:positionInit,
				startEvents:"click",
				autoplay:false
			});

			el.setAttribute("animation__text_retour",{
				dur:300,
				property:"text.color",
				from:"#0099ff",
				to:"#FFFFFF",
				startEvents:"retourInitial",
				autoplay:false
			});

			el.setAttribute("animation__position_retour",{
				dur:300,
				property:"position",
				from:positionAnim,
				to:positionInit,
				startEvents:"retourInitial",
				autoplay:false
			});

			/* Mettre le bouton facile par défaut */
			if(this.el.getAttribute("data-btn") == 1) {

				this.el.emit("click");

			}

			this.hoverStart = function() {

				if(outilSelection == 1 && el.getAttribute("position").z == 0.2) {

					el.setAttribute("material",{opacity:0.5});
					el.setAttribute("text",{color:0x0099ff});
					el.setAttribute("scale",{x:3.2,y:3.2,z:1});

				}

      };

			this.hoverEnd = function() {

				if(el.getAttribute("position").z == 0.2) {

					el.setAttribute("material",{opacity:1});
					el.setAttribute("text",{color:0xffffff});
					el.setAttribute("scale",{x:2.6,y:2.6,z:1});

				}

      };

	  },

		changerDifficulte: function() {

			var el = this,
					joueur = document.querySelector("#player"),
					panneauParent = el.parentEl.parentEl;

			if(outilSelection == 1 && jeuLancer == false) {

				/* Achat ou vente de l'article */
				switch(el.getAttribute("data-btn")) {

					/* Difficulté  */
					case "1":
							 joueur.setAttribute("joueur",{argent:300});
							 joueur.setAttribute("joueur",{difficulte:lesDifficultes[0]});
							 duree = 1000;

							 /* Animer l'autre bouton*/
							 panneauParent.children[1].children[2].emit("retourInitial");
							 break;

				  case "2":
							 joueur.setAttribute("joueur",{argent:200});
							 joueur.setAttribute("joueur",{difficulte:lesDifficultes[1]});
							 duree = 500;

							 /* Animer l'autre bouton*/
							 panneauParent.children[1].children[1].emit("retourInitial");
							 break;

				}

			}

		},

		play:function () {

			/* Lorsqu'on clique le bouton */
			this.el.addEventListener("click",this.changerDifficulte);
			this.el.addEventListener('hover-start', this.hoverStart);
      this.el.addEventListener('hover-end', this.hoverEnd);
		},

		pause:function() {

			this.el.removeEventListener("click",this.changerDifficulte);
			this.el.removeEventListener('hover-start', this.hoverStart);
			this.el.removeEventListener('hover-end', this.hoverEnd);

		},

		remove:function() {

			this.el.removeEventListener("click",this.changerDifficulte);
			this.el.removeEventListener('hover-start', this.hoverStart);
      this.el.removeEventListener('hover-end', this.hoverEnd);

		}

});
