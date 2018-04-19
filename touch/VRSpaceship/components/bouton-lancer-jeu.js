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

			/* Animation des panneaux  et destruction à la fin de l'animation */
			if(outilSelection == 1 && jeuLancer == false) {

				jeuLancer = true;

				uiDifficulte.children[0].setAttribute("animation__opacite",{
					dur:300,
					property:"slice9.opacity",
					to:0,
					from:1,
					autoplay:true
				});

				uiDifficulte.children[2].setAttribute("animation__opacite",{
					dur:300,
					property:"material.opacity",
					to:0,
					from:1,
					autoplay:true
				});

				uiDifficulte.children[1].children[0].setAttribute("animation__opacite",{
					dur:300,
					property:"text.opacity",
					to:0,
					from:1,
					autoplay:true
				});

				uiDifficulte.children[1].children[1].setAttribute("animation__opacite",{
					dur:300,
					property:"material.opacity",
					to:0,
					from:1,
					autoplay:true
				});

				uiDifficulte.children[1].children[2].setAttribute("animation__opacite",{
					dur:300,
					property:"material.opacity",
					to:0,
					from:1,
					autoplay:true
				});

				uiLancerJeu.children[0].setAttribute("animation__opacite",{
					dur:300,
					property:"slice9.opacity",
					to:0,
					from:1,
					autoplay:true
				});

				uiLancerJeu.children[2].setAttribute("animation__opacite",{
					dur:300,
					property:"material.opacity",
					to:0,
					from:1,
					autoplay:true
				});

				uiLancerJeu.children[1].children[0].setAttribute("animation__opacite",{
					dur:300,
					property:"text.opacity",
					to:0,
					from:1,
					autoplay:true
				});

				uiLancerJeu.children[1].children[1].setAttribute("animation__opacite",{
					dur:300,
					property:"material.opacity",
					to:0,
					from:1,
					autoplay:true
				});

			}

		},

		/* Détruit les panneaux */
		detruirePanneaux:function() {

			if(document.querySelector("#ui-lancer-jeu") != null) {

				var sceneEl = document.querySelector('a-scene');
						uiLancerJeu = document.querySelector("#ui-lancer-jeu"),
						uiDifficulte = document.querySelector("#ui-difficulte");

					sceneEl.removeChild(uiDifficulte);
					sceneEl.removeChild(uiLancerJeu);

			}

		},

		play:function () {

			/* Lorsqu'on clique le bouton */
		  this.el.addEventListener("animationcomplete",this.detruirePanneaux);
			this.el.addEventListener("click",this.commencerJeu);
			this.el.addEventListener('hover-start', this.hoverStart);
      this.el.addEventListener('hover-end', this.hoverEnd);
		},

		pause:function() {

			this.el.removeEventListener("animationcomplete",this.detruirePanneaux);
			this.el.removeEventListener("click",this.commencerJeu);
			this.el.removeEventListener('hover-start', this.hoverStart);
			this.el.removeEventListener('hover-end', this.hoverEnd);

		},

		remove:function() {

			this.el.removeEventListener("animationcomplete",this.detruirePanneaux);
			this.el.removeEventListener("click",this.commencerJeu);
			this.el.removeEventListener('hover-start', this.hoverStart);
      this.el.removeEventListener('hover-end', this.hoverEnd);

		}

});
