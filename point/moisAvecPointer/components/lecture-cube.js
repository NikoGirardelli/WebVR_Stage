// S'occupe de la lecture du cube sur le lecteur.
AFRAME.registerComponent('lecture-cube', {

  /* On lit l'attribut data-mois du cube et on l'affiche sur le lecteur,
  et on l'affecte à une variable globale */
  init: function () {

    var el = this.el;
    this.leMoisChoisi = new String();

  },

  play:function() {

    this.el.addEventListener('drag-drop', this.lectureMois.bind(this));

  },

  pause:function() {

    this.el.removeEventListener('drag-drop', this.lectureMois.bind(this));

  },

  lectureMois:function(evt) {

    var el = this.el,
        leMoisChoisi = evt.detail.dropped.getAttribute('data-mois'),
        listeJours = document.querySelectorAll(".choixJour"),
        txtJour = document.querySelector("#textJour");

    /* Modification du texte pour le jour choisi */
    el.setAttribute("data-mois-choisi",leMoisChoisi);
    document.querySelector("#blocSousLecteur").setAttribute(
                           "material", "src:#" +
                            el.getAttribute("data-mois-choisi"));

    /* Remet le texte par défaut */
    txtJour.setAttribute("value", "Day Selected : ");
    sessionStorage.setItem("jourChoisi", JSON.stringify(new Array()));

    /* Si nous avons choisi un mois, on peut choisir la journée */
    if(el.getAttribute("data-mois-choisi") != " ") {

      /* Pour tout les jours */
      for(var i = 0; i < listeJours.length; i++) {

        /* S'il y a une animation comme enfant */
        if(listeJours[i].childNodes[1] != null) {

          listeJours[i].removeChild(listeJours[i].childNodes[1]);

        }

        var anim = document.createElement('a-animation');

        /* Ajout du mixin pour le fade à l'animation */
        anim.setAttribute("mixin","fade");

        listeJours[i].setAttribute("material","color:white");
        listeJours[i].setAttribute("jour-clickable","");
        listeJours[i].appendChild(anim);

      }

      /* Si c'est février on limite à 28 jours, cache le 29,30,31 */
      if(el.getAttribute("data-mois-choisi") == "FEB") {

        for(var j = 28; j < listeJours.length; j++) {

          listeJours[j].removeAttribute("jour-clickable");
          listeJours[j].setAttribute("material","color:red;");

        }

      }

      /* Si c'est un mois avec 30 jours, cache le 31 */
      else if(el.getAttribute("data-mois-choisi") == "NOV" ||
              el.getAttribute("data-mois-choisi") == "APR" ||
              el.getAttribute("data-mois-choisi") == "JUNE" ||
              el.getAttribute("data-mois-choisi") == "SEPT") {

           listeJours[30].removeAttribute("jour-clickable");
           listeJours[30].setAttribute("material","color:red;");

      }


    }

  }

});
