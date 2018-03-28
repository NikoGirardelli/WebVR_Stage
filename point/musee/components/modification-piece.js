/* S'occupe de savoir de replacer la pièce selon celle de choisisse. */
const LES_PIECES = ["Hub","All Countries","Country","Customize"];
var nomContinent = ["Americas","Europe","Asia","Africa"];
var positionNom = [{x:0,y:2,z:-5.65},
									 {x:5.65,y:2,z:0},
									 {x:0,y:2,z:5.65},
									 {x:-5.65,y:2,z:0},
								 	 {x:0,y:2,z:-5.65}];
var rotationNom = [{x:0,y:0,z:0},
									 {x:0,y:270,z:0},
									 {x:0,y:180,z:0},
									 {x:0,y:90,z:0},
								 	 {x:0,y:0,z:0}];
var couleurContinent = [0x9ef03e,0xfff37a,0xff798e,0x33dded,0x999797];

AFRAME.registerComponent("modification-piece", {

	schema: {

		piece: {default:LES_PIECES[1], type:"string", oneOf:LES_PIECES}

	},

	init: function () {

		this.creationTitre();

	},

	creationTitre:function() {

		var	positionCheckpoint = [
					{x:0,y:0,z:0},
					{x:-3,y:0,z:-3},
					{x:0,y:0,z:-3},
					{x:3,y:0,z:-3},
					{x:3,y:0,z:0},
					{x:3,y:0,z:3},
					{x:0,y:0,z:3},
					{x:-3,y:0,z:3},
					{x:-3,y:0,z:0}
				];

		/* Pour les noms des continents */
		for(var i = 0; i < 5; i++) {

			var plane = document.createElement("a-plane");
			plane.setAttribute("text", {
				value:nomContinent[i],
				align:"center",
				width:25,
				zOffset:0.005
			});
			plane.setAttribute("geometry",{height:1.5,width:5});
			plane.setAttribute("material",{color:couleurContinent[i]})
			plane.setAttribute("position",positionNom[i]);
			plane.setAttribute("rotation",rotationNom[i]);
			plane.setAttribute("class","titreContinent");
			this.el.appendChild(plane);

		}

		/* Pour les points de téléportation. */
		for(var i = 0; i < 9; i++) {

			var cylindre = document.createElement("a-cylinder");
			cylindre.setAttribute("geometry", {
				radius:0.5,
				height:0.05
			});
			cylindre.setAttribute("material",{color:0x343434});
			cylindre.setAttribute("position",positionCheckpoint[i]);
			cylindre.setAttribute("class","pointTeleportation");
			cylindre.setAttribute("teleportation","");
			this.el.appendChild(cylindre);

		}

	},

	chargerPiece:function() {

		var lesPanneauxTitre = document.querySelectorAll(".titreContinent"),
				toutesLesStatues = document.querySelector("#toutesLesStatues"),
				quatreStatues = document.querySelector("#quatreStatues"),
				lesCheckpoints = document.querySelectorAll(".pointTeleportation");

				console.log(this.data.piece)

		/* All Countries */
		if(this.data.piece === LES_PIECES[1]) {

			/* Nom et les points de téléportation */
			for(var i = 0; i < 9; i++) {

				lesCheckpoints[i].setAttribute("visible",true);

				if(i < 4) {

					lesPanneauxTitre[i].setAttribute("visible",true);

				}

				if(i == 4) {

					lesPanneauxTitre[i].setAttribute("visible",false);

				}

			}

			toutesLesStatues.setAttribute("visible",true);
			quatreStatues.setAttribute("visible",true);


		}

		/* Country */
		else if(this.data.piece === LES_PIECES[2]) {

			/* Les noms des continents sont visibles */
			for(var i = 0; i < 9; i++) {

				lesCheckpoints[i].setAttribute("visible",false);

				if(i < 4) {

					lesPanneauxTitre[i].setAttribute("visible",false);

				}

				if(i == 4) {

					lesPanneauxTitre[i].setAttribute("visible",true);

				}

				if(i >= 1 && i < 4) {

					lesCheckpoints[i].setAttribute("visible",true);

				}

			}

			toutesLesStatues.setAttribute("visible",false);
			quatreStatues.setAttribute("visible",true);

		}

		else if(this.data.piece === LES_PIECES[3]) {

			/* Les noms des continents sont visibles */
			for(var i = 0; i < 9; i++) {

				lesCheckpoints[i].setAttribute("visible",false);

				if(i < 4) {

					lesPanneauxTitre[i].setAttribute("visible",false);

				}

				if(i == 4) {

					lesPanneauxTitre[i].setAttribute("visible",true);
					lesPanneauxTitre[i].setAttribute("text",{
						value:"Custom"
					});

				}

				if(i >= 1 && i < 4) {

					lesCheckpoints[i].setAttribute("visible",true);

				}

			}

			toutesLesStatues.setAttribute("visible",false);
			quatreStatues.setAttribute("visible",true);

		}

		/* Hub */
		else if(this.data.piece === LES_PIECES[0]) {

			/* Les noms des continents sont visibles */
			for(var i = 0; i < 9; i++) {

				if(i < 4) {

					lesPanneauxTitre[i].setAttribute("visible",false);

				}

				if(i == 4) {

					lesPanneauxTitre[i].setAttribute("visible",true);
					lesPanneauxTitre[i].setAttribute("text",{
						value:"Museum"
					});

				}

				lesCheckpoints[i].setAttribute("visible",true);


			}

			toutesLesStatues.setAttribute("visible",false);
			quatreStatues.setAttribute("visible",false);

		}

	},

	update:function() {

		/* Lorsqu'on change de pièce. */
		this.chargerPiece();

	}

});
