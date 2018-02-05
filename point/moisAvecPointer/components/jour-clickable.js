/* S'occupe de savoir quel journée est saisie lorsque les boutons sont cliqué */
AFRAME.registerComponent("jour-clickable", {

		init: function () {

			/* Référence à l'écran */
      var txtJour = document.querySelector("#textJour"),

			/* Bouton */
			el = this.el,
			leThis = this,

			/* Permet d'aider pour l'écriture de la journée */
			phraseDefaut = "Day Selected : ";

			//sessionStorage.setItem("jourChoisi", JSON.stringify(new Array()));

			/* Hover-start */
			this.eventScalingBegining = function() {

				el.setAttribute("scale","1.2 1.2 1.2");

				el.addEventListener("click",leThis.calendrierAction.bind(leThis));

      };

			/* Hover-end */
			this.eventScalingEnding = function() {

				el.setAttribute("scale","1 1 1");

				el.removeEventListener("click",leThis.calendrierAction.bind(leThis));

      };

			/* Lorsque qu'on hover le bouton */
      el.addEventListener('hover-start', this.eventScalingBegining);

			/* Lorsque qu'on ne hover plus le bouton */
      el.addEventListener('hover-end', this.eventScalingEnding);

	  },

		remove:function() {

			var el = this.el;

			el.removeEventListener("hover-start",this.eventScalingBegining);
			el.removeEventListener("hover-end",this.eventScalingEnding);

		},

		update:function() {

			this.el.removeEventListener("click",this.calendrierAction.bind(this));

		},

		calendrierAction:function(evt) {

			/* Référence à l'écran, le jour, la phrase de défaut et tableau de jours */
			//sessionStorage.setItem("jourChoisi", JSON.stringify(new Array()));
			var txtJour = document.querySelector("#textJour"),
					el = evt.target,
					phraseDefaut = "Day Selected : ",
					jourChoisi = JSON.parse(sessionStorage.getItem('jourChoisi'));

			/* Si on ne aucun jour choisi dernièrement*/
			if(jourChoisi == null) {

				jourChoisi = new Array();

			}

			/* Cherche notre jour dans le tableau, si rien est trouvé, on l'ajoute*/
			if(jourChoisi.indexOf(el.getAttribute("data-jour")) == -1) {

				/* Ajout du jour dans notre tableau */
				jourChoisi.push(el.getAttribute("data-jour"));

			}
			/* Si le jour est déjà dans le tableau */
			else if(jourChoisi.indexOf(el.getAttribute("data-jour")) != -1) {

				var posJour = jourChoisi.indexOf(el.getAttribute("data-jour"));
				jourChoisi.splice(posJour,1);

			}
			console.log(el);
			/* Joue l'animation de fade-in/fade-out */
			el.emit("playFade");

			/* Enregistrement de la variable jourChoisi dans la sessionStorage */
			sessionStorage.setItem("jourChoisi", JSON.stringify(jourChoisi));
			txtJour.setAttribute("value", phraseDefaut + jourChoisi.toString());

		}

});
