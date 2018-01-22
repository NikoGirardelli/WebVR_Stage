// S'occupe de la lecture du cube sur le lecteur.
AFRAME.registerComponent('lecture-stretching', {

  /* On afin un jour selon le scale de l'objet. Plus il est gros, plus que le jour est haut */
  update: function () {

    var el = this.el;
    var leJour = " ";
    var tabGrosseur =[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,
                      1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2,
                      2.1,2.2,2.3,2.4,2.5,2.6,2.7,2.8,2.9,3,3.1];

                        /* [0.3, 0.6, 0.9, 1.2, 1.5, 1.8, 2.1, 2.4, 2.7, 3.0,
                       3.3, 3.6, 3.9, 4.2, 4.5, 4.8, 5.1, 5.4, 5.7, 6.0,
                       6.3, 6.6 , 6.9, 7.2, 7.5, 7.8, 8.1, 8.4, 8.7, 9.0,
                       9.3]; 30 length */

    el.addEventListener('grab-start', function (evt) {
    // 0.0965
      console.log(el.getAttribute("scale"));
      /*
      if(el.getAttribute("scale").x === tabGrosseur[0]) {

        console.log("jour 1 " + 1.0965);

      }*/

      /* Changer la valeur du jour de choisi */
      if(el.getAttribute("scale").x/2 >= tabGrosseur[1] && el.getAttribute("scale").x/2 <= tabGrosseur[2]) {

        console.log(el.getAttribute("scale").x/2);

      }



    });

    el.addEventListener('stretch-end', function (evt) {
      // 0.3

      /* Changer la valeur du jour de choisi */
      if(el.getAttribute("scale").x >= tabGrosseur[1] && el.getAttribute("scale").x <= tabGrosseur[2]) {

        console.log("jour 1 " + 1.0965);

      }

      else if(el.getAttribute("scale").x >= tabGrosseur[2] && el.getAttribute("scale").x <= tabGrosseur[3]) {

        console.log("jour 2  " + 1.193);

      }

      else if(el.getAttribute("scale").x >= tabGrosseur[3] && el.getAttribute("scale").x <= tabGrosseur[4]) {

        console.log("jour 3  " + 1.193);

      }

      else if(el.getAttribute("scale").x >= tabGrosseur[4] && el.getAttribute("scale").x <= tabGrosseur[5]) {

        console.log("jour 4  " + 1.193);

      }

      else if(el.getAttribute("scale").x >= tabGrosseur[5] && el.getAttribute("scale").x <= tabGrosseur[6]) {

        console.log("jour 5  " + 1.193);

      }

      else if(el.getAttribute("scale").x >= tabGrosseur[6] && el.getAttribute("scale").x <= tabGrosseur[7]) {

        console.log("jour 6 " + 1.193);

      }

      else if(el.getAttribute("scale").x >= tabGrosseur[7] && el.getAttribute("scale").x <= tabGrosseur[8]) {

        console.log("jour 7  " + 1.193);

      }
      else if(el.getAttribute("scale").x >= tabGrosseur[8] && el.getAttribute("scale").x <= tabGrosseur[9]) {

        console.log("jour 8  " + 1.193);

      }

      else if(el.getAttribute("scale").x >= tabGrosseur[9] && el.getAttribute("scale").x <= tabGrosseur[10]) {

        console.log("jour 9  " + 1.193);

      }

      else if(el.getAttribute("scale").x >= tabGrosseur[10] && el.getAttribute("scale").x <= tabGrosseur[11]) {

        console.log("jour 10 " + 1.193);

      }

      else if(el.getAttribute("scale").x >= tabGrosseur[11] && el.getAttribute("scale").x <= tabGrosseur[12]) {

        console.log("jour 11 " + 1.193);

      }

      else if(el.getAttribute("scale").x >= tabGrosseur[12] && el.getAttribute("scale").x <= tabGrosseur[13]) {

        console.log("jour 12 " + 1.193);

      }

      else if(el.getAttribute("scale").x >= tabGrosseur[13] && el.getAttribute("scale").x <= tabGrosseur[14]) {

        console.log("jour 13 " + 1.193);

      }

      else if(el.getAttribute("scale").x >= tabGrosseur[14] && el.getAttribute("scale").x <= tabGrosseur[15]) {

        console.log("jour 14 " + 1.193);

      }

      else if(el.getAttribute("scale").x >= tabGrosseur[15] && el.getAttribute("scale").x <= tabGrosseur[16]) {

        console.log("jour 15 " + 1.193);

      }

      else if(el.getAttribute("scale").x >= tabGrosseur[16] && el.getAttribute("scale").x <= tabGrosseur[17]) {

        console.log("jour 16 " + 1.193);

      }

      else if(el.getAttribute("scale").x >= tabGrosseur[17] && el.getAttribute("scale").x <= tabGrosseur[18]) {

        console.log("jour 17 " + 1.193);

      }
      else if(el.getAttribute("scale").x >= tabGrosseur[18] && el.getAttribute("scale").x <= tabGrosseur[19]) {

        console.log("jour 18 " + 1.193);

      }

      else if(el.getAttribute("scale").x >= tabGrosseur[19] && el.getAttribute("scale").x <= tabGrosseur[20]) {

        console.log("jour 19 " + 1.193);

      }

      else if(el.getAttribute("scale").x >= tabGrosseur[20] && el.getAttribute("scale").x <= tabGrosseur[21]) {

        console.log("jour 20 " + 1.193);

      }

      else if(el.getAttribute("scale").x >= tabGrosseur[21] && el.getAttribute("scale").x <= tabGrosseur[22]) {

        console.log("jour 21 " + 1.193);

      }

      else if(el.getAttribute("scale").x >= tabGrosseur[22] && el.getAttribute("scale").x <= tabGrosseur[23]) {

        console.log("jour 22 " + 1.193);

      }

      else if(el.getAttribute("scale").x >= tabGrosseur[23] && el.getAttribute("scale").x <= tabGrosseur[24]) {

        console.log("jour 23 " + 1.193);

      }

      else if(el.getAttribute("scale").x >= tabGrosseur[24] && el.getAttribute("scale").x <= tabGrosseur[25]) {

        console.log("jour 24 " + 1.193);

      }

      else if(el.getAttribute("scale").x >= tabGrosseur[25] && el.getAttribute("scale").x <= tabGrosseur[26]) {

        console.log("jour 25  " + 1.193);

      }

      else if(el.getAttribute("scale").x >= tabGrosseur[26] && el.getAttribute("scale").x <= tabGrosseur[27]) {

        console.log("jour 26 " + 1.193);

      }

      else if(el.getAttribute("scale").x >= tabGrosseur[27] && el.getAttribute("scale").x <= tabGrosseur[28]) {

        console.log("jour 27 " + 1.193);

      }
      else if(el.getAttribute("scale").x >= tabGrosseur[28] && el.getAttribute("scale").x <= tabGrosseur[29]) {

        console.log("jour 28 " + 1.193);

      }

      else if(el.getAttribute("scale").x >= tabGrosseur[29] && el.getAttribute("scale").x <= tabGrosseur[30]) {

        console.log("jour 29  " + 1.193);

      }

      else if(el.getAttribute("scale").x >= tabGrosseur[30] && el.getAttribute("scale").x <= tabGrosseur[31]) {

        console.log("jour 30 " + 1.193);

      }

      else if(el.getAttribute("scale").x >= tabGrosseur[31] && el.getAttribute("scale").x <= tabGrosseur[31]) {

        console.log("jour 31  " + 1.193);

      }


      /*
      leMoisChoisi = evt.detail.dropped.getAttribute('data-mois');
      el.setAttribute("data-mois-choisi",leMoisChoisi);

      bloc.setAttribute("material", "src:#" + el.getAttribute("data-mois-choisi"));*/
    });

  }

});
