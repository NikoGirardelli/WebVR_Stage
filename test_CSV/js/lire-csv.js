/* Papa Bless */
document.addEventListener("DOMContentLoaded", function(event) {

  var url = ".../csv/indicator gapminder gdp_per_capita_ppp.csv";

  Papa.parse(url, {

    download:true,

    complete: function (results,file){
/*
              	var lignesGraphe = "<table class='table'>";
              	var data = results.data;

              	for(i=0;i<data.length;i++){
              		lignesGraphe+= "<tr>";
              		var row = data[i];
              		var cells = row.join(",").split(",");

              		for(j=0;j<cells.length;j++){
              			lignesGraphe+= "<td>";
              			console.log(cells[j]);
              			lignesGraphe+= cells[j];
              			lignesGraphe+= "</th>";
              		}
              		lignesGraphe+= "</tr>";
              	}
              	lignesGraphe+= "</table>";


              	document.querySelector("a-scene").innerHTML = lignesGraphe;*/

                var lignesGraphe = document.createElement("a-entity");
                lignesGraphe.setAttribute("id","leslignesGraphe");
                var data = results.data;


                for(i=1;i<2;i++) {

                  /* Crée le parent de la ligne pour le pays */
                  ligneGraphe = document.createElement("a-entity");
                  ligneGraphe.setAttribute("id","ligneGraphe");
                  ligneGraphe.setAttribute("position",{x:0,y:0,z:0.9});
                  lignesGraphe.appendChild(ligneGraphe);

                  var row = data[i];
                  var cells = row.join(",").split(",");

                  for(j=0;j<cells.length -1;j++) {

                    var fin = {x:-0.8, y:0.05, z:0.8};
                    var debut = {x:-0.8, y:0.05, z:0.8};

                    if(j==0) {

                      /* Est le titre du pays */
                      console.log(cells[j +1]);

                    }
                    else {

                      debut.y = (cells[j] * 0.05)/100; //629
                      fin.y = (cells[j + 1] * 0.05)/100; //633
                      debut.z = (j * -0.1); //629
                      fin.z = ((j + 1) * -0.1); //633
                      console.log(debut)
                      console.log(fin)

                      ligneGraphe.setAttribute("line__" + j, {

                            start: debut,
                            end: fin,
                            color: "yellow"

                      });


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

});
