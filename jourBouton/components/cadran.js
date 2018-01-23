AFRAME.registerComponent('cadran', {

  init: function() {

      var monCadran = document.querySelector('#cadran');
      var btnMonterHeure = document.querySelector("#monterHeure");
      var btnDiminuerHeure = document.querySelector("#diminuerHeure");
      var heure = document.querySelector("#heure");

      /* Contient les heures */
      var lesHeures = ["01", "02", "03", "04", "05", "06",
                       "07","08", "09", "10", "11", "12"];

      /* Permet d'afficher la bonne heure, 01 par défaut */
      var compteur = 0;

      /* Lorsque qu'on appuit le bouton pour monter l'heure */
      btnMonterHeure.addEventListener('pressed', function() {

        if(compteur == 11) compteur = 0;

        else compteur ++;

        heure.setAttribute("text", "value:" + lesHeures[compteur]);

      });

      /* Lorsque qu'on appuit le bouton pour monter l'heure */
      btnDiminuerHeure.addEventListener('pressed', function() {

        if(compteur == 0) compteur = 11;

        else compteur --;

        heure.setAttribute("text", "value:" + lesHeures[compteur]);

      });

  }

});
