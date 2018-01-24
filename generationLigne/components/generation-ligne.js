/* S'occupe de savoir quel journée est saisie lorsque les boutons sont cliqué */
AFRAME.registerComponent("generation-ligne", {

	  init: function () {

			/* Référence  = 86 fps début
      var el = this.el;

			for(var x=0;x<40;x++) {

				for(var i=1; i < 40; i++) {


					var ligne = document.createElement('a-entity');
					var sx = 0.5*i;
					var	sy = 0.75*i;
					var	sz =1*i;
					var ex = 0.5*(2*i);
					var	ey = 0.75*(2*i);
					var	ez =1*(2*i);

					ligne.setAttribute("position", x + ' ' + 0 + ' ' + 0);
					ligne.setAttribute("line", "start:" +  sx+ " "+ sy+ " "+sz);
					ligne.setAttribute("line", "end:" +ex+ " "+ ey+ " "+ez);
					ligne.setAttribute("line","color:#ff0;");
					el.appendChild(ligne);

				}

			}


			console.log("devrait marcher");

	  }*/

		var el = this.el;
		var ligne = document.createElement('a-entity');

		for(var i=1; i < 2000; i++) {

			var sx = 0.5*i;
			var	sy = 0.75*i;
			var	sz =1*i;
			var ex = 1.5*i;
			var	ey = 2.75*i;
			var	ez =3*2*i;

			ligne.setAttribute("line__"+i, "start:" +  sx+ " "+ sy+ " "+sz);
			ligne.setAttribute("line__"+i, "end:" +ex+ " "+ ey+ " "+ez);
			ligne.setAttribute("line__"+i,"color:green;");


		}

		el.appendChild(ligne);


		console.log("devrait marcher");

	}

});
