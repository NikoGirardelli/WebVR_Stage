/* Papa Bless - S'occupe d'enregistrer dans le sessionStorage nos datas - Commentaire à refaire*/
var url_1 = "csv/indicator life_expectancy_at_birth.csv",
    url_2 = "csv/indicator gapminder gdp_per_capita_ppp.csv",
    url_3 = "csv/indicator gapminder population.csv",
    url_4 = "csv/Rayon des spheres Population Pays.csv",
    url_5 = "csv/mean-years-of-schooling-for-those-aged-15-and-older.csv",
    url_6 = "csv/indicator sugar_consumption.csv",
    url_7 = "csv/indicator CDIAC carbon_dioxide_emissions_per_capita.csv",
    url_8 = "csv/indicator alcohol consumption.csv",
    url_9 = "csv/consumption-per-smoker-per-day.csv",
    dataLife = {},
    dataIncome = {},
    dataRayonPopulation = {},
    dataPopulation = {},
    dataSucreConsommation = {},
    dataEducation = {},
    dataPollution = {},
    dataAlcoolConsommation = {},
    dataCigarette = {};

/* Constantes */
const ANNEE_PAR_DEFAUT = 51; //1950 Les données sont entre 1950 et 2010 - ANNEE_PAR_DEFAUT = 1965
const POSITION_ALL = [
  /* Americas */
  {x:-2.25,y:0.125,z:-4.5},
  {x:-1.125,y:0.125,z:-4.5},
  {x:0,y:0.125,z:-4.5},
  {x:1.125,y:0.125,z:-4.5},
  {x:2.25,y:0.125,z:-4.5},
  /* Europe */
  {x:4.5,y:0.125,z:-3},
  {x:4.5,y:0.125,z:-1.875},
  {x:4.5,y:0.125,z:-0.75},
  {x:4.5,y:0.125,z:0.375},
  {x:4.5,y:0.125,z:1.5},
  {x:4.5,y:0.125,z:2.625},
  /* Asia */
  {x:-4.125,y:0.125,z:4.5},
  {x:-3,y:0.125,z:4.5},
  {x:-1.875,y:0.125,z:4.5},
  {x:-0.75,y:0.125,z:4.5},
  {x:0.375,y:0.125,z:4.5},
  {x:1.5,y:0.125,z:4.5},
  {x:2.625,y:0.125,z:4.5},
  {x:3.75,y:0.125,z:4.5},
  /* Africa */
  {x:-4.5,y:0.125,z:-2.25},
  {x:-4.5,y:0.125,z:-1.125},
  {x:-4.5,y:0.125,z:0},
  {x:-4.5,y:0.125,z:1.125},
  {x:-4.5,y:0.125,z:2.25}
];

const ROTATION_ALL = [
  /* Americas */
  {x:0,y:0,z:0},
  /* Europe */
  {x:0,y:270,z:0},
  /* Asia */
  {x:0,y:180,z:0},
  /* Africa */
  {x:0,y:90,z:0}
];

const COULEUR_STATUE = [
  {r:0.33,g:0.42,b:0.18},
  {r:0.80,g:0.50,b:0.20},
  {r:0.75,g:0.75,b:0.75},
  {r:0.85,g:0.65,b:0.13}
];

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

/* Pour le cerveau - Education */
function cinquiemeFichier() {

  Papa.parse(url_5, {

    download:true,
    dynamicTyping:true,
    complete: function (results,file){

                var data = results.data;
                dataEducation = clone(data);
                siziemeFichier();


    },

    error: function(err, file)
    {
      console.log("ERROR:", err, file);
    }

  });

}

/* Pour la consommation de sucre - obese */
function siziemeFichier() {

  Papa.parse(url_6, {

    download:true,
    dynamicTyping:true,
    complete: function (results,file){

                var data = results.data;
                dataSucreConsommation = clone(data);
                septiemeFichier();


    },

    error: function(err, file)
    {
      console.log("ERROR:", err, file);
    }

  });

}

/* Pour l'émission annuelle de CO2 par 1000 tones */
function septiemeFichier() {

  Papa.parse(url_7, {

    download:true,
    dynamicTyping:true,
    complete: function (results,file){

                var data = results.data;
                dataPollution = clone(data);
                huitiemeFichier();


    },

    error: function(err, file)
    {
      console.log("ERROR:", err, file);
    }

  });

}

/* Pour la consommation d'alcool */
function huitiemeFichier() {

  Papa.parse(url_8, {

    download:true,
    dynamicTyping:true,
    complete: function (results,file){

                var data = results.data;
                dataAlcoolConsommation = clone(data);
                neuviemeFichier();


    },

    error: function(err, file)
    {
      console.log("ERROR:", err, file);
    }

  });

}

/* Pour la consommation de cigarette */
function neuviemeFichier() {

  Papa.parse(url_9, {

    download:true,
    dynamicTyping:true,
    complete: function (results,file){

                var data = results.data;
                dataCigarette = clone(data);
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

	/* Créer le sol */
	var sol = document.createElement("a-box"),
			statue = document.createElement("a-entity"),
      couleur = {},
      texteNomBase = document.createElement("a-text"),
      texteNom = document.createElement("a-text"),
      texteData1 = document.createElement("a-text"),
      texteData2 = document.createElement("a-text"),
      texteData3 = document.createElement("a-text"),
      texteData4 = document.createElement("a-text"),
      texteData5 = document.createElement("a-text"),
      ui = document.createElement("a-entity"),
      bouteille = document.createElement("a-obj-model"),
      alcohol = document.createElement("a-obj-model"),
      nuage = document.createElement("a-obj-model"),
      argent = document.createElement("a-obj-model"),
      cigarette = document.createElement("a-obj-model");

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

  texteData1.setAttribute("text", {
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

  texteData2.setAttribute("text", {
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

  texteData3.setAttribute("text", {
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

  texteData4.setAttribute("text", {
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
    value:"Mean Years of Schooling : " + dataEducation[paysChoisi][ANNEE_PAR_DEFAUT],
    wrapCount:26,
    alphaTest:1
  });

  texteData5.setAttribute("text", {
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
    value:"Sugar per person (g/day) : " + dataSucreConsommation[paysChoisi][ANNEE_PAR_DEFAUT],
    wrapCount:29,
    alphaTest:1
  });

  texteNomBase.setAttribute("text", {
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

  /* Textes UI */
  texteNomBase.setAttribute("position",{x:0,y:0,z:1.5});
  texteNom.setAttribute("position",{x:0,y:1.25,z:0});
  texteData1.setAttribute("position",{x:0,y:0.5,z:0});
  texteData2.setAttribute("position",{x:0,y:0.1,z:0});
  texteData3.setAttribute("position",{x:0,y:-0.3,z:0});
  texteData4.setAttribute("position",{x:0,y:-0.7,z:0});
  texteData5.setAttribute("position",{x:0,y:-1.1,z:0});

  /* Statue */
  /* Rotation statue */
  if(paysChoisi - 1 < 5) {
    statue.setAttribute("rotation",ROTATION_ALL[0]);
  }
  else if(paysChoisi - 1 < 11) {
    statue.setAttribute("rotation",ROTATION_ALL[1]);
  }
  else if(paysChoisi - 1 < 19) {
    statue.setAttribute("rotation",ROTATION_ALL[2]);
  }
  else {
    statue.setAttribute("rotation",ROTATION_ALL[3]);
  }

  statue.setAttribute("gltf-model","#statuette_v3-gltf"); // Modèle middle res
	statue.setAttribute("scale",{x:0.125,y:0.125,z:0.125});
  statue.setAttribute("class","statue");
  statue.setAttribute("statue",{numeroPays:paysChoisi});
  statue.setAttribute("position",POSITION_ALL[paysChoisi - 1]);
  statue.appendChild(ui);
  statue.appendChild(bouteille);
  statue.appendChild(nuage);
  statue.appendChild(sol);
  statue.appendChild(argent);
  statue.appendChild(cigarette);

  /* Cigarette */
  cigarette.setAttribute("src","#cigarette-obj");
  cigarette.setAttribute("mtl","#cigarette-mtl");
  cigarette.setAttribute("position",{
    x:-0.3,
    y:-0.06,
    z:0.9
  });
  cigarette.setAttribute("scale",{
    x:0.15,
    y:0.1+ (0.0075*dataCigarette[paysChoisi][ANNEE_PAR_DEFAUT]),
    z:0.15
  });

  /* Ensemble Statue */
	ensembleStatue.appendChild(statue);
  ensembleStatue.setAttribute("position",{x:0,y:0,z:0});

  /* Bouteille */
  bouteille.setAttribute("position",{x:0.5,y:-0.125,z:1});
  bouteille.setAttribute("material",{opacity:0.5});
  bouteille.setAttribute("src","#bouteille-obj");
  bouteille.appendChild(alcohol);

  /* Alcool */
  alcohol.setAttribute("material",{color:"#74330F"});
  alcohol.setAttribute("src","#alcohol-obj");
  alcohol.setAttribute("scale",{
    x:1,
    y:dataAlcoolConsommation[paysChoisi][ANNEE_PAR_DEFAUT]/19.15,
    z:1
  });

  /* Nuage */
  nuage.setAttribute("src","#nuage-obj");
  nuage.setAttribute("material",{color:"#3A3A3A"});
  nuage.setAttribute("scale",{
    x:0.3 + (3*dataPollution[paysChoisi][ANNEE_PAR_DEFAUT]/69),
    y:0.3 + (3*dataPollution[paysChoisi][ANNEE_PAR_DEFAUT]/69),
    z:0.3 + (3*dataPollution[paysChoisi][ANNEE_PAR_DEFAUT]/69)
  });
  nuage.setAttribute("position",{
    x:0,
    y:10 + (6.5*dataRayonPopulation[paysChoisi][ANNEE_PAR_DEFAUT]),
    z:0
  });

  /* Argent */
  argent.setAttribute("src","#money-obj");
  argent.setAttribute("material",{color:"#02b530"});
  argent.setAttribute("scale",{
    x:0.5 + (0.125*dataIncome[paysChoisi][ANNEE_PAR_DEFAUT]/13486),
    y:0.5 + (0.125*dataIncome[paysChoisi][ANNEE_PAR_DEFAUT]/13486),
    z:0.5 + (0.125*dataIncome[paysChoisi][ANNEE_PAR_DEFAUT]/13486)
  });
  argent.setAttribute("position",{
    x:0,
    y:0,
    z:-3
  });

  /* Sol */
  sol.appendChild(texteNomBase);
  sol.setAttribute("position",{x:0,y:-0.55,z:0});
	sol.setAttribute("geometry",{
    depth:3,
    height:1,
    width:3
  });

  /* Désactivation */
  argent.setAttribute('visible',false);
  nuage.setAttribute('visible',false);
  alcohol.setAttribute('visible',false);
  bouteille.setAttribute('visible',false);
  cigarette.setAttribute('visible',false);

  /* Ui */
  ui.appendChild(texteNom);
  ui.appendChild(texteData1);
  ui.appendChild(texteData2);
  ui.appendChild(texteData3);
  ui.appendChild(texteData4);
  ui.appendChild(texteData5);
  ui.setAttribute("mixin","ui-hover-pays");
  ui.setAttribute("position",{x:0,y:6,z:4});
  ui.setAttribute("rotation",{x:-30,y:0,z:0});

}

/* Boucle qui appelle creerStatue() */
function creationStatues() {

  var toutesLesStatues = document.querySelector("#toutesLesStatues");
  var cinqStatues = document.querySelector("#cinqStatues");

  /* Boucle qui parcourt tous les pays 25*/
	for(var i = 1; i < 25; i++) {

		creerStatue(toutesLesStatues,i);

	}

  /* Boucle qui crée 5 statue pour un pays/personalisable. */
	for(var i = 1; i < 6; i++) {

		creerStatue(cinqStatues,i);

	}

  cinqStatues.setAttribute("visible",false);

}

/* Dès le chargement de la page on lit les fichiers et
*  copie son contenu dans le sessionStorage.
*/
document.addEventListener("DOMContentLoaded", function(event) {

  sessionStorage.clear();
  premierFichier();

});
