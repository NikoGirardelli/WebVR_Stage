/* S'occupe de savoir quel piece on visite */
var lesPieces = ["All Countries","Country","Customize","Hub"];
var nomContinent = ["Americas","Europe","Asia","Africa"];
var positionNom = [{x:0,y:2,z:-5.65},
									 {x:5.65,y:2,z:0},
									 {x:0,y:2,z:5.65},
									 {x:-5.65,y:2,z:0}];
var rotationNom = [{x:0,y:0,z:0},
									 {x:0,y:270,z:0},
									 {x:0,y:180,z:0},
									 {x:0,y:90,z:0}];
var couleurContinent = [0x9ef03e,
												0xfff37a,
												0xff798e,
												0x33dded];

AFRAME.registerComponent("teleportation-piece", {

	schema: {

		piece: {default:"All Countries", type:"string", oneOf:lesPieces}

	},

	init: function () {

		this.creationTitre();

	},

	creationTitre:function() {

		/* Pour les noms des continents */
		for(var i = 0; i < 4; i++) {

			var plane = document.createElement("a-plane");
			plane.setAttribute("text", {
				value:nomContinent[i],
				align:"center",
				width:25,
				zOffset:0.002
			});
			plane.setAttribute("geometry",{height:1.5,width:5});
			plane.setAttribute("material",{color:couleurContinent[i]})
			plane.setAttribute("position",positionNom[i]);
			plane.setAttribute("rotation",rotationNom[i]);
			plane.setAttribute("class","titreContinent");
			this.el.appendChild(plane);

		}

	},

	chargerPiece:function() {

		var lesPanneauxTitre = document.querySelectorAll(".titreContinent");

		/* All Countries */
		if(this.data.piece === lesPieces[0]) {

			/* Les noms des continents sont visibles */
			for(var i = 0; i < 4; i++) {

				lesPanneauxTitre[i].setAttribute("visible",true);

			}


		}

		/* Country */
		else if(this.data.piece === lesPieces[1]) {

			/* Les noms des continents sont visibles */
			for(var i = 0; i < 4; i++) {

				lesPanneauxTitre[i].setAttribute("visible",true);

			}

		}

		/* Customize */
		else if(this.data.piece === lesPieces[2]) {

			/* Les noms des continents sont visibles */
			for(var i = 0; i < 4; i++) {

				lesPanneauxTitre[i].setAttribute("visible",false);

			}

		}

		/* Hub */
		else if(this.data.piece === lesPieces[3]) {

			/* Les noms des continents sont visibles */
			for(var i = 0; i < 4; i++) {

				lesPanneauxTitre[i].setAttribute("visible",false);

			}

		}

	},

	update:function() {

		this.chargerPiece();

	}

});
