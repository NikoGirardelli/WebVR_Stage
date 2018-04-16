/* S'occupe de changer l'état des poignées */
AFRAME.registerComponent("poignee", {

		init: function () {

			/* Sphere */
			var el = this.el,
					panneauParent = el.parentEl;

			this.hoverStart = function() {

				if(panneauParent.getAttribute("grabbable").maxGrabbers == 2) {


					el.setAttribute("material",{opacity:0.7});

				}

      };

			this.hoverEnd = function() {

				el.setAttribute("material",{opacity:1});

      };

			this.changerCouleurAuRouge = function() {

				el.setAttribute("material",{color:0xf44242});

      };

			this.changerCouleurAuVert = function() {

				el.setAttribute("material",{color:0x44f241});

      };

    },

		play:function () {

	    this.el.addEventListener('hover-start', this.hoverStart);
      this.el.addEventListener('hover-end', this.hoverEnd);

		},

		pause:function() {

			this.el.removeEventListener("hover-start",this.hoverStart);
			this.el.removeEventListener("hover-end",this.hoverEnd);

		},

		remove:function() {

			this.el.removeEventListener("raycaster-intersected",this.eventScalingBegining);
			this.el.removeEventListener("raycaster-intersected-cleared",this.eventScalingEnding);
			this.el.removeEventListener("hover-start",this.hoverStart);
			this.el.removeEventListener("hover-end",this.hoverEnd);

		}

});
