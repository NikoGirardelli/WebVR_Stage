/* S'occupe de jouer une piste sonore lorsqu'on clique dessus une boîte.*/
AFRAME.registerComponent("jouer-son", {

		jouerSon: function() {

			var el = this,
					lesBoitesSon = document.querySelectorAll('.boite-son');

			/* Arrête les anciens sons */
			for(var i = 0; i < 4;i++) {

				lesBoitesSon[i].components.sound.stopSound();
				lesBoitesSon[i].setAttribute("text",{color:"#FFF"});

			}

			/* Joue le nouveau son */
			el.components.sound.playSound();
			el.setAttribute("text",{color:"#0099ff"});

		},

		play:function () {

			var lesBoitesSon = document.querySelectorAll('.boite-son');
			lesBoitesSon[1].addEventListener("sound-loaded",this.jouerSon);

			/* Lorsqu'on clique le bouton */
			this.el.addEventListener("click",this.jouerSon);

		},

		pause:function() {

		},

		remove:function() {

			this.el.removeEventListener("click",this.jouerSon);
			lesBoitesSon[1].removeEventListener("sound-loaded",this.jouerSon);

		}

});
