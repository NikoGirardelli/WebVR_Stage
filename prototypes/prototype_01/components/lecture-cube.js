// S'occupe de la lecture du cube sur le lecteur.
AFRAME.registerComponent('lecture-cube', {

  /* On lit l'attribut data-mois du cube et on l'affiche sur le lecteur,
  et on l'affecte à une variable globale */
  update: function () {

    var el = this.el;
    var leMoisChoisi = " ";
    var bloc = document.querySelector("#blocSousLecteur");

    el.addEventListener('drag-drop', function (evt) {

      leMoisChoisi = evt.detail.dropped.getAttribute('data-mois');
      el.setAttribute("data-mois-choisi",leMoisChoisi);
      bloc.setAttribute("material", "src:#" + el.getAttribute("data-mois-choisi"));

    });

    if(el.getAttribute("data-mois-choisi") == "") {

        bloc.setAttribute("material", "color:white");

    }

  }

});
