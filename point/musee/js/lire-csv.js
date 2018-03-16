/* Papa Bless - S'occupe d'enregistrer dans le sessionStorage nos datas - Commentaire à refaire*/
var url_1 = ".../csv/indicator life_expectancy_at_birth.csv",
    url_2 = ".../csv/indicator gapminder gdp_per_capita_ppp.csv",
    url_3 = ".../csv/indicator gapminder population.csv",
    url_4=".../csv/Rayon des spheres Population Pays.csv",
    dataLife = {},
    dataIncome = {},
    dataRayonPopulation = {},
    dataPopulation = {};

/* Constantes
const COULEUR_CONTINENT = [0x9ef03e,0x33dded,0xfff37a,0xff798e]; // Am, Af, Eu, As
const A_REGLE_POSITION = [0.0025,0.00125,0.000625,0.000313,
                              0.000156,0.000078,0.000039,0.00002];
const B_REGLE_POSITION = [0,1.25,2.5,3.75,5,6.25,75,8.75];*/
const ANNEE_PAR_DEFAUT = 52;


/* S'occupe de copier le JSON -
*  http://outset.ws/blog/article/clone-duplicate-json-object-in-javascript
*/
function clone(obj) {

  var outpurArr = new Array();

  for (var i in obj) {

    outpurArr[i] = typeof (obj[i]) == 'object' ? this.clone(obj[i]) : obj[i];

  }

  return outpurArr;

}

/* Pour l'axe des y - Life Expectency */
function premierFichier() {

  Papa.parse(url_1, {

    download:true,

    complete: function (results,file){

                var data = results.data;
                dataLife = clone(data);
                deuxiemeFichier();

    },

    error: function(err, file)
    {
      console.log("ERROR:", err, file);
    }

  });

}

/* Pour l'axe de z et x - Years And Incomes */
function deuxiemeFichier() {

  Papa.parse(url_2, {

    download:true,

    complete: function (results,file){

                var data = results.data;
                dataIncome = clone(data);
                troisiemeFichier();

    },

    error: function(err, file)
    {
      console.log("ERROR:", err, file);
    }

  });

}

/* Pour le nombre de la population */
function troisiemeFichier() {

  Papa.parse(url_3, {

    download:true,
    dynamicTyping:true,
    complete: function (results,file){

                var data = results.data;
                dataPopulation = clone(data);
                quatriemeFichier();

    },

    error: function(err, file)
    {
      console.log("ERROR:", err, file);
    }

  });

}

/* Pour le radius - Population */
function quatriemeFichier() {

  Papa.parse(url_4, {

    download:true,
    dynamicTyping:true,
    complete: function (results,file){

                var data = results.data;
                dataRayonPopulation = clone(data);
                creationStatues();


    },

    error: function(err, file)
    {
      console.log("ERROR:", err, file);
    }

  });

}

/* S'occupe de créer une statue pour un pays choisi */
function creerStatue(ensembleStatue,paysChoisi) {

  var income_l = 25//dataIncome.length - 1;

	/* Créer le sol */
	var sol = document.createElement("a-box"),
			statue = document.createElement("a-entity");

	statue.setAttribute("gltf-model","#statuette_v3-gltf"); // Modèle middle res
	statue.appendChild(sol);
	sol.setAttribute("position",{x:0,y:-0.55,z:0});
	sol.setAttribute("geometry",{depth:3,height:1,width:3});
	statue.setAttribute("scale",{x:0.25,y:0.25,z:0.25});
  statue.setAttribute("class","statue");

	ensembleStatue.appendChild(statue);

	/* Modifie les valeurs de la statue */
  var rowIncome = dataIncome[paysChoisi];
  var rowLife = dataLife[paysChoisi];

  var //scale = dataRayonPopulation[i][ANNEE_PAR_DEFAUT]/1.125,
      income_cell_l = dataIncome[paysChoisi][ANNEE_PAR_DEFAUT].length,
      position = {x:-0.8, y:0.05, z:0},
      texte = document.createElement("a-text"),
      texteLife = document.createElement("a-text"),
      texteIncome = document.createElement("a-text"),
      texteNom = document.createElement("a-text"),
      textePopulation = document.createElement("a-text"),
      ui = document.createElement("a-entity");

  ui.setAttribute("mixin","ui-hover-pays");

  texteNom.setAttribute("text", {
    zOffset:0.02,
    yOffset:0,
    color:0xffffff,
    baseline:"top",
    anchor:"center",
    align:"center",
    width:2.3,
    whiteSpace:"pre",
    tabSize:2.83,
    lineHeight:35,
    height:0.5,
    value:dataIncome[paysChoisi][0],
    wrapCount:15,
    alphaTest:1
  });

  texteIncome.setAttribute("text", {
    zOffset:0.02,
    yOffset:0,
    color:0xffffff,
    baseline:"center",
    anchor:"center",
    align:"center",
    width:2.2,
    whiteSpace:"pre",
    tabSize:2.83,
    lineHeight:35,
    height:0.5,
    value:"Income: " + dataIncome[paysChoisi][ANNEE_PAR_DEFAUT] + " $",
    wrapCount:15,
    alphaTest:1
  });

  texteLife.setAttribute("text", {
    zOffset:0.02,
    yOffset:0,
    color:0xffffff,
    baseline:"center",
    anchor:"center",
    align:"center",
    width:3.5,
    whiteSpace:"pre",
    tabSize:2.83,
    lineHeight:35,
    height:0.5,
    value:"Life Expectancy: " + dataLife[paysChoisi][ANNEE_PAR_DEFAUT] + " years",
    wrapCount:25,
    alphaTest:1
  });

  textePopulation.setAttribute("text", {
    zOffset:0.02,
    yOffset:0,
    color:0xffffff,
    baseline:"center",
    anchor:"center",
    align:"center",
    width:3.5,
    whiteSpace:"pre",
    tabSize:2.83,
    lineHeight:35,
    height:0.5,
    value:"Population : " + dataPopulation[paysChoisi][ANNEE_PAR_DEFAUT],
    wrapCount:25,
    alphaTest:1
  });

  texte.setAttribute("text", {
    zOffset:0.02,
    yOffset:0,
    color:0x191919,
    baseline:"center",
    anchor:"center",
    align:"center",
    width:1.5,
    whiteSpace:"pre",
    tabSize:2.83,
    lineHeight:35,
    height:0.5,
    value:dataIncome[paysChoisi][0],
    wrapCount:9
  });

  texte.setAttribute("position",{x:0,y:0,z:1.5});
  sol.appendChild(texte);
  statue.appendChild(ui);
  ui.appendChild(texteIncome);
  ui.appendChild(texteLife);
  ui.appendChild(textePopulation);
  ui.appendChild(texteNom);
  ui.setAttribute("position",{x:0,y:6,z:4});
  texteIncome.setAttribute("position",{x:0,y:0.1,z:0});
  texteLife.setAttribute("position",{x:0,y:-0.3,z:0});
  textePopulation.setAttribute("position",{x:0,y:-0.7,z:0});
  texteNom.setAttribute("position",{x:0,y:0.775,z:0});
  statue.setAttribute("position",{x:paysChoisi,y:0,z:0});

  /* Lorsque le modèle est chargé. */
  statue.addEventListener("model-loaded",function() {

      //console.log(statue.getObject3D("mesh"))
      /* Life Expectancy - costaud  */
    	statue.getObject3D("mesh").children[0].morphTargetInfluences[0] = dataLife[paysChoisi][ANNEE_PAR_DEFAUT]/100;

      /* Income - grandeur */
    	statue.getObject3D("mesh").children[0].morphTargetInfluences[2] = paysChoisi*0.4//dataIncome[paysChoisi][ANNEE_PAR_DEFAUT]/134864;

  });

}

/* Boucle qui appelle creerStatue() */
function creationStatues() {

  /* Sauvegarde des datas */
  sessionStorage.setItem("dataLife", JSON.stringify(dataLife));
  sessionStorage.setItem("dataIncome", JSON.stringify(dataIncome));
  sessionStorage.setItem("dataPopulation", JSON.stringify(dataPopulation));
  sessionStorage.setItem("dataRayonPopulation", JSON.stringify(dataRayonPopulation));

  var ensembleStatue = document.querySelector("#ensembleStatue");

  /* Boucle qui parcourt tous les pays */
	for(var i = 1; i < 25; i++) {

		creerStatue(ensembleStatue,i);

	}

}

/* Dès le chargement de la page on lit les fichiers et
*  copie son contenu dans le sessionStorage.
*/
document.addEventListener("DOMContentLoaded", function(event) {

  sessionStorage.clear();
  premierFichier();

});
