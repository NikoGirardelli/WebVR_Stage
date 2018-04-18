/* Lance le chrono et le jeu lorsque cliqué */
AFRAME.registerComponent("bouton-lancer-jeu", {

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

			this.hoverStart = function() {

				if(outilSelection == 1) {

					el.setAttribute("material",{opacity:0.5});
					el.setAttribute("text",{color:0x0099ff});
					el.setAttribute("scale",{x:3.2,y:3.2,z:1});

				}

      };

			this.hoverEnd = function() {

					el.setAttribute("material",{opacity:1});
					el.setAttribute("text",{color:0xffffff});
					el.setAttribute("scale",{x:2.6,y:2.6,z:1});

      };

	  },

		commencerJeu: function() {

			var uiLancerJeu = document.querySelector("#ui-lancer-jeu"),
					uiDifficulte = document.querySelector("#ui-difficulte");

			/* Détruit les panneaux du choix de difficulté et celui de lancer
		  *  le jeu lorsque le jeu est lancé.
			*/
			if(jeuLancer == false) {

				jeuLancer = true;
				uiDifficulte.parentNode.removeChild(uiDifficulte);
				uiLancerJeu.parentNode.removeChild(uiLancerJeu);

			}

		},

		play:function () {

				/* Lorsqu'on clique le bouton */
				this.el.addEventListener("click",this.commencerJeu);
				this.el.addEventListener('hover-start', this.hoverStart);
	      this.el.addEventListener('hover-end', this.hoverEnd);
		},

		pause:function() {

			this.el.removeEventListener("click",this.commencerJeu);
			this.el.removeEventListener('hover-start', this.hoverStart);
			this.el.removeEventListener('hover-end', this.hoverEnd);

		},

		remove:function() {

			this.el.removeEventListener("click",this.commencerJeu);
			this.el.removeEventListener('hover-start', this.hoverStart);
      this.el.removeEventListener('hover-end', this.hoverEnd);

		}

});
