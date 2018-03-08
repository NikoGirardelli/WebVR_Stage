/* Papa Bless */
var url_1 = ".../csv/indicator life_expectancy_at_birth.csv",
    url_2 = ".../csv/indicator gapminder gdp_per_capita_ppp.csv",
    url_3 = ".../csv/indicator gapminder population.csv",
    url_4=".../csv/Rayon des spheres Population Pays.csv",
    dataLife = {},
    dataIncome = {},
    dataRayonPopulation = {},
    dataPopulation = {};

/* Constantes */
const COULEUR_CONTINENT = [0x9ef03e,0x33dded,0xfff37a,0xff798e]; // Am, Af, Eu, As
const ANNEE_PAR_DEFAUT = 52;
const A_REGLE_POSITION = [0.0025,0.00125,0.000625,0.000313,
                              0.000156,0.000078,0.000039,0.00002];
const B_REGLE_POSITION = [0,1.25,2.5,3.75,5,6.25,75,8.75];

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
                //CreerLignes();
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
                //CreerLignes();
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
                //CreerLignes();
                CreerSpheres();

    },

    error: function(err, file)
    {
      console.log("ERROR:", err, file);
    }

  });

}
/* S'occupe de créer les lignes en passant dans chaque pays
*  et en générant une ligne pour chaque année.
*/
function CreerLignes() {

  var lignesGraphe = document.createElement("a-entity");
  lignesGraphe.setAttribute("id","leslignesGraphe");
  lignesGraphe.setAttribute("position",{x:-0.5,y:-0.5,z:-1.45});

  var i;
  var income_l = 25//dataIncome.length - 1;

  /* Parcourt les pays */
  for(i=1;i<income_l;i++) {

    var rowIncome = dataIncome[i];
    var cellsIncome = rowIncome.join(",").split(",");
    var rowLife = dataLife[i];
    var cellsLife = rowLife.join(",").split(",");

    /* Crée le parent de la ligne pour le pays */
    var ligneGraphe = document.createElement("a-entity");
    ligneGraphe.setAttribute("class","ligneGraphe");
    ligneGraphe.setAttribute("scale",{x:1,y:1,z:-1});
  //ligneGraphe.setAttribute("position",{x:-0.3,y:1,z:-1});
    lignesGraphe.appendChild(ligneGraphe);
    ligneGraphe.setAttribute("data-pays-ligne",cellsLife[0]);

    var couleurLigne;
    var geometry = new THREE.BufferGeometry();
    var material = new THREE.LineBasicMaterial();
    var income_cell_l = cellsIncome.length;
    var positions = new Float32Array((income_cell_l-1)*3);
    var debut = {x:-0.8, y:0.05, z:0.8};
    var texte = document.createElement("a-text");
    var texteD = document.createElement("a-text");

    // position de la ligne = continent
    if(i < 6) {

      couleurLigne = COULEUR_CONTINENT[0];

    }

    else if(i > 5 && i < 12) {

      couleurLigne = COULEUR_CONTINENT[2];

    }

    else if(i > 11 && i < 19) {

      couleurLigne = COULEUR_CONTINENT[3];

    }

    else {

      couleurLigne = COULEUR_CONTINENT[1];

    }

    material.color.set(couleurLigne);

    /* Parcourt les années  j : 1 => 1800, 115 => 1915*/
    for(j=0;j<income_cell_l;j++) {

        if(j == 0) {

          texte.setAttribute("text", {
            zOffset:0,
            yOffset:0,
            color:couleurLigne,
            baseline:"bottom",
            anchor:"right",
            align:"right",
            width:0.79,
            whiteSpace:"pre",
            tabSize:2.83,
            lineHeight:0.1,
            height:0.09,
            value:cellsIncome[0],
            wrapCount:39.79
          });

          texteD.setAttribute("text", {
            zOffset:0,
            yOffset:0,
            color:couleurLigne,
            baseline:"bottom",
            anchor:"left",
            align:"left",
            width:0.79,
            whiteSpace:"pre",
            tabSize:2.83,
            lineHeight:0.1,
            height:0.09,
            value:cellsIncome[0],
            wrapCount:39.79
          })


          /* Formule pour positionner les noms à la fin des lignes */
          debut.z = cellsLife[income_cell_l - 1]/200;
          debut.y = cellsIncome[income_cell_l - 1]/130000;
          debut.x = (income_cell_l - 1)/100;

          texte.setAttribute("position",{x:debut.x,y:debut.y,z:debut.z});
          texteD.setAttribute("position",{x:debut.x,y:debut.y,z:debut.z});
          texte.setAttribute("rotation",{x:0,y:0,z:0});
          texteD.setAttribute("rotation",{x:0,y:180,z:0});
          ligneGraphe.appendChild(texte);
          ligneGraphe.appendChild(texteD);

        }

        else {

          /* Formule pour les positions sur les axes */
          debut.z = cellsLife[j]/200;
          debut.y = cellsIncome[j]/132000;
          debut.x = j/100;

          /* Affectation des valeurs dans notre tableau de position */
          positions[3*(j-1)] = debut.x;
          positions[3*(j-1)+1] = debut.y;
          positions[3*(j-1)+2] = debut.z;

        }


    }

    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions,3));
    geometry.computeBoundingSphere();

    mesh = new THREE.Line( geometry, material);
    ligneGraphe.object3D.add(mesh);
    //ligneGraphe.setAttribute("visible",false);
    console.log(ligneGraphe.object3D)
  }

  document.querySelector("#head").appendChild(lignesGraphe);

}

/* S'occupe de créer des spheres pour chaque pays */
function CreerSpheres() {

  var i;
  var income_l = 25//dataIncome.length - 1;

  /* Supprime l'ancienne sauvegarde */
  sessionStorage.clear();

  /* Enregistrement de la variable paysChoisi dans la sessionStorage */
  sessionStorage.setItem("dataIncome", JSON.stringify(dataIncome));
  sessionStorage.setItem("dataLife", JSON.stringify(dataLife));
  sessionStorage.setItem("dataRayonPopulation", JSON.stringify(dataRayonPopulation));
  sessionStorage.setItem("dataPopulation", JSON.stringify(dataPopulation));


  var graphe = document.querySelector("#graphe");

  /* Mur contenant les pays d'un continent */
  var tabMurs = [];

  for(var k=0;k<4;k++) {

    var spheresGraphe = document.createElement("a-entity");
    spheresGraphe.setAttribute("class","murSpheres");
    tabMurs.push(spheresGraphe);
    graphe.appendChild(tabMurs[k]);

  }

  tabMurs[0].setAttribute("position",{x:1.25,y:0,z:0.2});
  tabMurs[1].setAttribute("position",{x:1.25,y:0,z:0.3});
  tabMurs[2].setAttribute("position",{x:1.25,y:0,z:0.1});
  tabMurs[3].setAttribute("position",{x:1.25,y:0,z:0.4});

  graphe.setAttribute("position",{x:10,y:-1.5,z:-7});
  graphe.setAttribute("rotation",{x:0,y:270,z:0});

  /* Parcourt les pays */
  for(i=1;i<income_l;i++) {

    var rowIncome = dataIncome[i];
    var cellsIncome = rowIncome.join(",").split(",");
    var rowLife = dataLife[i];
    var cellsLife = rowLife.join(",").split(",");

    /* Crée le parent de la ligne pour le pays */
    var sphereGraphe = document.createElement("a-entity");
    sphereGraphe.setAttribute("class","sphereGraphe");
    sphereGraphe.setAttribute("data-pays-sphere",cellsLife[0]);

    var couleurLigne,
        scale = dataRayonPopulation[i][ANNEE_PAR_DEFAUT]/1.125,
        geometry = new THREE.SphereBufferGeometry(1, 16, 16),
        material = new THREE.MeshBasicMaterial(),
        income_cell_l = cellsIncome.length,
        position = {x:-0.8, y:0.05, z:0},
        debut = {x:-0.8, y:0.05, z:0.8},
        texte = document.createElement("a-text"),
        texteLife = document.createElement("a-text"),
        texteIncome = document.createElement("a-text"),
        texteNom = document.createElement("a-text"),
        textePopulation = document.createElement("a-text"),
        ui = document.createElement("a-entity");

    /* Americas */
    if(i < 6) {

      tabMurs[0].setAttribute("data-mur-continent","Americas");
      tabMurs[0].appendChild(sphereGraphe);
      couleurLigne = COULEUR_CONTINENT[0];

    }
    /* Europe */
    else if(i > 5 && i < 12) {

      tabMurs[1].setAttribute("data-mur-continent","Europe");
      tabMurs[1].appendChild(sphereGraphe);
      couleurLigne = COULEUR_CONTINENT[2];

    }
    /* Asia */
    else if(i > 11 && i < 19) {

      tabMurs[2].setAttribute("data-mur-continent","Asia");
      tabMurs[2].appendChild(sphereGraphe);
      couleurLigne = COULEUR_CONTINENT[3];

    }
    /* Africa */
    else {

      tabMurs[3].setAttribute("data-mur-continent","Africa");
      tabMurs[3].appendChild(sphereGraphe);
      couleurLigne = COULEUR_CONTINENT[1];

    }

    material.color.set(couleurLigne);
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
      value:cellsIncome[0],
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
      value:"Income: " + cellsIncome[ANNEE_PAR_DEFAUT] + " $",
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
      value:"Life Expectency: " + cellsLife[ANNEE_PAR_DEFAUT] + " years",
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
      value:"Population : " + dataPopulation[i][ANNEE_PAR_DEFAUT],
      wrapCount:25,
      alphaTest:1
    });

    texte.setAttribute("text", {
      zOffset:0,
      yOffset:0,
      color:0x191919,
      baseline:"top",
      anchor:"center",
      align:"center",
      width:1.5,
      whiteSpace:"pre",
      tabSize:2.83,
      lineHeight:35,
      height:0.5,
      value:cellsIncome[0],
      wrapCount:9
    });

    /* Formule pour positionner les noms sous les pays */
    debut.x = 0;
    debut.y = -0.5;
    debut.z = 0;

    texte.setAttribute("position",debut);
    texte.setAttribute("rotation",{x:0,y:0,z:0});
    texte.setAttribute("visible",false);
    sphereGraphe.appendChild(texte)
    ui.appendChild(texteIncome);
    ui.appendChild(texteLife);
    ui.appendChild(textePopulation);
    ui.appendChild(texteNom);
    ui.setAttribute("position",{x:0,y:1,z:0.5});
    texteIncome.setAttribute("position",{x:0,y:0.1,z:0});
    texteLife.setAttribute("position",{x:0,y:-0.3,z:0});
    textePopulation.setAttribute("position",{x:0,y:-0.7,z:0});
    texteNom.setAttribute("position",{x:0,y:0.775,z:0});
    sphereGraphe.appendChild(ui);
    ui.setAttribute("visible",false);
    //geometry.computeBoundingSphere();
    mesh = new THREE.Mesh( geometry, material);
    mesh.material.opacity = 0.3;
    mesh.material.transparent = true;

    /* Income position x*/
    if(cellsIncome[ANNEE_PAR_DEFAUT] <= 1000) {

      position.x = (A_REGLE_POSITION[0]*cellsIncome[ANNEE_PAR_DEFAUT]) +
                    B_REGLE_POSITION[0];

    }

    else if(cellsIncome[ANNEE_PAR_DEFAUT] >= 1000 && cellsIncome[ANNEE_PAR_DEFAUT] <= 2000) {

      position.x = (A_REGLE_POSITION[1]*cellsIncome[ANNEE_PAR_DEFAUT]) +
                    B_REGLE_POSITION[1];

    }

    else if(cellsIncome[ANNEE_PAR_DEFAUT] >= 2000 && cellsIncome[ANNEE_PAR_DEFAUT] <= 4000) {

      position.x = (A_REGLE_POSITION[2]*cellsIncome[ANNEE_PAR_DEFAUT]) +
                    B_REGLE_POSITION[2];

    }
    else if(cellsIncome[ANNEE_PAR_DEFAUT] >= 4000 && cellsIncome[ANNEE_PAR_DEFAUT] <= 8000) {

      position.x = (A_REGLE_POSITION[3]*cellsIncome[ANNEE_PAR_DEFAUT]) +
                    B_REGLE_POSITION[3];

    }

    else if(cellsIncome[ANNEE_PAR_DEFAUT] >= 8000 && cellsIncome[ANNEE_PAR_DEFAUT] <= 16000) {

      position.x = (A_REGLE_POSITION[4]*cellsIncome[ANNEE_PAR_DEFAUT]) +
                    B_REGLE_POSITION[4];

    }
    else if(cellsIncome[ANNEE_PAR_DEFAUT] >= 16000 && cellsIncome[ANNEE_PAR_DEFAUT] <= 32000) {

      position.x = (A_REGLE_POSITION[5]*cellsIncome[ANNEE_PAR_DEFAUT]) +
                    B_REGLE_POSITION[5];

    }

    else if(cellsIncome[ANNEE_PAR_DEFAUT] >= 32000 && cellsIncome[ANNEE_PAR_DEFAUT] <= 64000) {

      position.x = (A_REGLE_POSITION[6]*cellsIncome[ANNEE_PAR_DEFAUT]) +
                    B_REGLE_POSITION[6];

    }
    else if(cellsIncome[ANNEE_PAR_DEFAUT] >= 64000 && cellsIncome[ANNEE_PAR_DEFAUT] <= 128000) {

      position.x = (A_REGLE_POSITION[7]*cellsIncome[ANNEE_PAR_DEFAUT]) +
                    B_REGLE_POSITION[7];

    }

    /* Formule pour position le pays sur le Y */
    position.y = (cellsLife[ANNEE_PAR_DEFAUT]*0.08) + 0.655;

    sphereGraphe.setAttribute("position",position);
    sphereGraphe.setAttribute("sphere-hover","");

    sphereGraphe.setAttribute("material",{color:0x000000,visible:true,fog:false,transparent:true});
    sphereGraphe.setAttribute("geometry",{primitive:"circle",radius:scale*1.125})
    sphereGraphe.object3D.add(mesh);
    sphereGraphe.object3D.children[0].scale.set(scale,scale,0.05);
  //sphereGraphe.setAttribute("visible",false);

  }

}

/* S'occupe de générer une couleur aléatoirement
*  https://stackoverflow.com/questions/1484506/random-color-generator
*/
function makeRandomColor() {

  var c = '';

  while (c.length < 6) {

    c += (Math.random()).toString(16).substr(-6).substr(-1)

  }

  return '#'+c;

}

/* Dès le chargement de la page on lit les fichiers et copie son contenu
*  afin de génerer les lignes pour chaque pays.
*/
document.addEventListener("DOMContentLoaded", function(event) {

      premierFichier();

});
