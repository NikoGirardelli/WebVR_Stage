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

                  /* Crée le parent de la ligne pour le pays */
                  ligneGraphe = document.createElement("a-entity");
                  ligneGraphe.setAttribute("class","ligneGraphe");
                  ligneGraphe.setAttribute("position",{x:-0.81,y:0,z:0.9});
                  lignesGraphe.appendChild(ligneGraphe);

                  var row = data[i];
                  var cells = row.join(",").split(",");
                  var rowLife = dataLife[i];
                  var cellsLife = rowLife.join(",").split(",");

                  for(j=0;j<cells.length -1;j++) {

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

                      ligneGraphe.setAttribute("line__" + j, {

                            start: debut,
                            end: fin,
                            color: "yellow"

                      });

                      ligneGraphe.setAttribute("visible","false");

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
