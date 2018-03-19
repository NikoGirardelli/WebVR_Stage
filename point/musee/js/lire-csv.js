/* Papa Bless - S'occupe d'enregistrer dans le sessionStorage nos datas - Commentaire à refaire*/
var url_1 = ".../csv/indicator life_expectancy_at_birth.csv",
    url_2 = ".../csv/indicator gapminder gdp_per_capita_ppp.csv",
    url_3 = ".../csv/indicator gapminder population.csv",
    url_4 = ".../csv/Rayon des spheres Population Pays.csv",
    url_5 = ".../csv/mean-years-of-schooling-for-those-aged-15-and-older.csv",
    dataLife = {},
    dataIncome = {},
    dataRayonPopulation = {},
    dataPopulation = {},
    dataEducation = {};

/* Constantes */
const POSITION_STATUE_X = [-5,-3,-1,1,3,5];
const POSITION_STATUE_Z = [-5,-3,-1,1,3,5];
const ANNEE_PAR_DEFAUT = 16; // Les données sont entre 1950 et 2010 - ANNEE_PAR_DEFAUT = 1965

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
                cinquiemeFichier();


    },

    error: function(err, file)
    {
      console.log("ERROR:", err, file);
    }

  });

}

/* Pour le radius - Population */
function cinquiemeFichier() {

  Papa.parse(url_5, {

    download:true,
    dynamicTyping:true,
    complete: function (results,file){

                var data = results.data;
                dataEducation = clone(data);
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
	statue.setAttribute("scale",{x:0.125,y:0.125,z:0.125});
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
  statue.setAttribute("position",{x:paysChoisi,y:0.125,z:0});
  statue.setAttribute('particle-system', {
    preset: 'default',
    color: '#808080',
    maxParticleCount:8,
    type:3,
    maxAge:2,
    size:1.5,
    blending:2,
    randomize:true,
    positionSpread:{x:1,y:1,z:1},
    texture:".../img/smoke.png"

  });
  //sol.setAttribute("particle-system","color","red");

  /* Lorsque le modèle est chargé. Peut seulement avoir 4 morphs d'activer. */
  statue.addEventListener("model-loaded",function() {

    var couleur = {};

    /* Association couleur - Life Expectancy */
    if(dataLife[paysChoisi][ANNEE_PAR_DEFAUT] < 40) {

      couleur = {r:0.33,g:0.42,b:0.18}; // Roche

    }

    else if(dataLife[paysChoisi][ANNEE_PAR_DEFAUT] < 50) {

      couleur = {r:0.80,g:0.50,b:0.20}; // Bronze

    }

    else if(dataLife[paysChoisi][ANNEE_PAR_DEFAUT] < 70) {

      couleur = {r:0.75,g:0.75,b:0.75}; // Argent

    }

    else if(dataLife[paysChoisi][ANNEE_PAR_DEFAUT] > 70) {

      couleur = {r:0.85,g:0.65,b:0.13}; // Or

    }

    /* Life Expectancy - couleur  minimum = 24.76 - max = 82 */
    statue.getObject3D("mesh").children[0].material.color = couleur;

    /* Income - grandeur */
  	statue.getObject3D("mesh").children[0].morphTargetInfluences[2] = dataIncome[paysChoisi][ANNEE_PAR_DEFAUT]/13486;

    /* Année d'éducation en moyen -Rayon Population cerveau */
  	statue.getObject3D("mesh").children[0].morphTargetInfluences[7] = dataEducation[paysChoisi][ANNEE_PAR_DEFAUT]/12;

    /* Income - nez */
  	//statue.getObject3D("mesh").children[0].morphTargetInfluences[4] = paysChoisi*0.25//dataIncome[paysChoisi][ANNEE_PAR_DEFAUT]/134864; 3.2

    /* Pose initiale */
    //statue.getObject3D("mesh").children[0].morphTargetInfluences[9] = 0;

  });

}

/* Boucle qui appelle creerStatue() */
function creationStatues() {

  /* Sauvegarde des datas */
  sessionStorage.setItem("dataLife", JSON.stringify(dataLife));
  sessionStorage.setItem("dataIncome", JSON.stringify(dataIncome));
  sessionStorage.setItem("dataPopulation", JSON.stringify(dataPopulation));
  sessionStorage.setItem("dataRayonPopulation", JSON.stringify(dataRayonPopulation));
  sessionStorage.setItem("dataEducation", JSON.stringify(dataEducation));

  var ensembleStatue = document.querySelector("#ensembleStatue");

  /* Boucle qui parcourt tous les pays */
	for(var i = 1; i < 2; i++) {

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
