/* Papa Bless */
var url_1 = "../csv/indicator life_expectancy_at_birth.csv",
    url_2 = "../csv/indicator gapminder gdp_per_capita_ppp.csv",
    creationFini = false,
    dataLife = {},
    dataIncome = {};

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

function CreerLignes() {

  var lignesGraphe = document.createElement("a-entity");
  lignesGraphe.setAttribute("id","leslignesGraphe");
  var i;
  /* Parcourt les pays */
  for(i=1;i<25;i++) {

    var rowIncome = dataIncome[i];
    var cellsIncome = rowIncome.join(",").split(",");
    var rowLife = dataLife[i];
    var cellsLife = rowLife.join(",").split(",");

    /* Crée le parent de la ligne pour le pays */
    var ligneGraphe = document.createElement("a-entity");
    ligneGraphe.setAttribute("class","ligneGraphe");
    //ligneGraphe.setAttribute("position",{x:-0.81,y:0,z:0.9});
    ligneGraphe.object3D.position.set(-0.81,0,0.9);
    lignesGraphe.appendChild(ligneGraphe);

    var geometry = new THREE.BufferGeometry();
    var material = new THREE.LineBasicMaterial( { color:0xFF0000} );
    var l = cellsIncome.length;
    var positions = new Float32Array((cellsIncome.length-1)*3);


    /* Parcourt les années */
    for(j=1;j<l;j++) {

      var debut = {x:-0.8, y:0.05, z:0.8};

      debut.x = cellsLife[j]/100;
      debut.y = cellsIncome[j]/100000;
      debut.z = j/300;

      console.log(cellsLife[j]/100 + ' vie ' + i);
      positions[3*(j-1)] = debut.x;
      positions[3*(j-1)+1] = debut.y;
      positions[3*(j-1)+2] = debut.z;

    }
  //  console.log(positions);
    geometry.addAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ));
    geometry.computeBoundingSphere();

    mesh = new THREE.Line( geometry, material );
    ligneGraphe.object3D.add(mesh);

  }

  //console.log(lignesGraphe)
  document.querySelector("#graphe").appendChild(lignesGraphe);

}

document.addEventListener("DOMContentLoaded", function(event) {

      premierFichier();

});
