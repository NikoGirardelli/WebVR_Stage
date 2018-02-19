/* Papa Bless */
var url1 = ".../csv/indicator gapminder gdp_per_capita_ppp.csv",
    url2 = ".../csv/indicator gapminder gdp_per_capita_ppp.csv",
    creationFini = false,
    dataLife = {};

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

function premierFichier(){

  /* Pour l'axe des X - Life Expectency */
  Papa.parse(url2, {

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

function deuxiemeFichier(){

  /* Pour l'axe de z et y - Years And Incomes */
  Papa.parse(url1, {

    download:true,

    complete: function (results,file){

                var lignesGraphe = document.createElement("a-entity");
                lignesGraphe.setAttribute("id","leslignesGraphe");
                var data = results.data;
                //console.log(dataLife)

                for(i=1;i<20;i++) {

                  var row = data[i];
                  var cells = row.join(",").split(",");
                  var rowLife = dataLife[i];
                  var cellsLife = rowLife.join(",").split(",");

                  /* Crée le parent de la ligne pour le pays */
                  var ligneGraphe = document.createElement("a-entity");
                  ligneGraphe.setAttribute("class","ligneGraphe");
                  //ligneGraphe.setAttribute("position",{x:-0.81,y:0,z:0.9});
                  ligneGraphe.object3D.position.set(-0.81,0,0.9);
                  lignesGraphe.appendChild(ligneGraphe);

                  for(j=0;j<cells.length - 1;j++) {

                    var fin = {x:-0.8, y:0.05, z:0.8};
                    var debut = {x:-0.8, y:0.05, z:0.8};

                    if(j==0) {

                      /* Est le titre du pays */
                      //console.log(cells[j +1]);

                    }
                    else {

                      debut.x = ((cellsLife[j] * 0.05) - 1)/350;
                      fin.x = ((cellsLife[j + 1] * 0.05) - 1)/350;
                      debut.y = cells[j]/4000; //629
                      fin.y = cells[j + 1]/4000; //633
                      debut.z = (j * -0.1)/2; //629
                      fin.z = ((j + 1) * -0.1)/2; //633

                      //console.log(debut.y)
                      //console.log(fin.y)
/*
                      ligneGraphe.setAttribute("line__" + j, {

                            start: debut,
                            end: fin,
                            color: "yellow"

                      });

                      ligneGraphe.setAttribute("geometry", {
                            primitive: "sphere",
                            radius:0.01
                            //depth:0.05,
                            //height:0.05,
                            //width:0.05,
                      });

                      ligneGraphe.setAttribute("material", {
                            wireframe:true,
                            color:"#0080ff",
                            shader:"flat"
                      });

                      //ligneGraphe.object3D.position.set(debut.x,debut.y,debut.z);
                      ligneGraphe.setAttribute("position",debut);

                      //ligneGraphe.setAttribute("visible","false");*/

                      //create a blue LineBasicMaterial
                      var material = new THREE.LineBasicMaterial( { color: 0xFF0000 } );
                      var geometry = new THREE.Geometry();

                      /*var r = 800;
              				for ( var i = 0; i < 100; i ++ ) {
              					var x = debut.x;
              					var y = debut.y;
              					var z = debut.z;
              					// positions
              					positions.push( x, y, z );
              					// colors
              					colors.push( ( x / r ) + 0.5 );
              					colors.push( ( y / r ) + 0.5 );
              					colors.push( ( z / r ) + 0.5 );
              				}*/


                      //positions.push(debut.x,debut.y,debut.z);
                      //geometry.addAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ));
                      //geometry.addAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ));
                      geometry.vertices.push(
                      	new THREE.Vector3( debut.x, debut.y, debut.z ),
                      	new THREE.Vector3( fin.x, fin.y, fin.z )
                      );
                      geometry.computeBoundingSphere();
                      ligne = new THREE.Line(geometry,material)
                      ligneGraphe.object3D.add(ligne);
                      //console.log(ligneGraphe)


                    }

                  }

                }

                //console.log(lignesGraphe)
                document.querySelector("#graphe").appendChild(lignesGraphe);

    },

    error: function(err, file)
    {
      console.log("ERROR:", err, file);
    }

  });

}

document.addEventListener("DOMContentLoaded", function(event) {

      premierFichier();

});
