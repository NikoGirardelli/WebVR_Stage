/* Papa Bless */
document.addEventListener("DOMContentLoaded", function(event) {

  var url = ".../csv/indicator gapminder gdp_per_capita_ppp_v2.csv";

  Papa.parse(url, {

    download:true,

    complete: function (results,file){
/*
              	var markup = "<table class='table'>";
              	var data = results.data;

              	for(i=0;i<data.length;i++){
              		markup+= "<tr>";
              		var row = data[i];
              		var cells = row.join(",").split(",");

              		for(j=0;j<cells.length;j++){
              			markup+= "<td>";
              			//console.log(cells[j]);
              			markup+= cells[j];
              			markup+= "</th>";
              		}
              		markup+= "</tr>";
              	}
              	markup+= "</table>";


              	document.querySelector("a-scene").innerHTML = markup;
*/
    },

    error: function(err, file)
    {
      console.log("ERROR:", err, file);
    }

  });

});
