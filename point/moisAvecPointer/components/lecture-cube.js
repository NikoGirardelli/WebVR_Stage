// S'occupe de la lecture du cube sur le lecteur.
AFRAME.registerComponent('lecture-cube', {

  /* On lit l'attribut data-mois du cube et on l'affiche sur le lecteur,
  et on l'affecte à une variable globale */
  init: function () {

    var el = this.el;
    this.leMoisChoisi = new String();


    el.addEventListener('drag-drop', this.lectureMois.bind(this));

    el.removeEventListener('drag-drop', this.lectureMois.bind(this));

  },

  lectureMois:function(evt) {

    var el = this.el,
        leMoisChoisi = evt.detail.dropped.getAttribute('data-mois');

    el.setAttribute("data-mois-choisi",leMoisChoisi);
    document.querySelector("#blocSousLecteur").setAttribute(
                           "material", "src:#" +
                            el.getAttribute("data-mois-choisi"));

  }

});
