/* Papa Bless */
var url_1 = ".../csv/indicator life_expectancy_at_birth.csv",
    url_2 = ".../csv/indicator gapminder gdp_per_capita_ppp.csv",
    url_3 = ".../csv/test_birth.csv",
    url_4 = ".../csv/test_income.csv",
    creationFini = false,
    dataLife = {},
    dataIncome = {};

const couleurContinent = [0x9ef03e,0x33dded,0xfff37a,0xff798e]; // Am, Af, Eu, As

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

function premierFichier() {

  /* Pour l'axe des X - Life Expectency */
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

function deuxiemeFichier() {

  /* Pour l'axe de z et y - Years And Incomes */
  Papa.parse(url_2, {

    download:true,

    complete: function (results,file){

                var data = results.data;
                dataIncome = clone(data);
                CreerLignes();

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
  lignesGraphe.setAttribute("position",{x:-0.315,y:0.171,z:0.45});

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
    ligneGraphe.setAttribute("grabbable","");
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

      couleurLigne = couleurContinent[0];

    }

    else if(i > 5 && i < 12) {

      couleurLigne = couleurContinent[2];

    }

    else if(i > 11 && i < 19) {

      couleurLigne = couleurContinent[3];

    }

    else {

      couleurLigne = couleurContinent[1];

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
          debut.x = cellsLife[income_cell_l - 1]/200;
          debut.y = cellsIncome[income_cell_l - 1]/130000;
          debut.z = (income_cell_l - 1)/100;

          texte.setAttribute("position",{x:debut.x,y:debut.y,z:debut.z});
          texteD.setAttribute("position",{x:debut.x,y:debut.y,z:debut.z});
          texte.setAttribute("rotation",{x:0,y:90,z:0});
          texteD.setAttribute("rotation",{x:0,y:270,z:0});
          ligneGraphe.appendChild(texte);
          ligneGraphe.appendChild(texteD);

        }

        else {

          /* Formule pour les positions sur les axes */
          debut.x = cellsLife[j]/200;
          debut.y = cellsIncome[j]/132000;
          debut.z = j/100;

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
    ligneGraphe.setAttribute("visible",false);

  }

  document.querySelector(".graphe").appendChild(lignesGraphe);

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
