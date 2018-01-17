AFRAME.registerComponent('horloge', {

  init: function() {

      var monHorloge = document.querySelector('#horloge');

      /* Lorsque que la petite aiguille tombe sur un chiffre*/
      monHorloge.addEventListener('change', function(){

        /* Angle de l'horloge*/
        var angle = knob.rotation.y * 180 / Math.PI;

        /* Grosseur de 25 angles */
        var lesAnglesNegatifs = [-10, -20, -40, -50, -70, -80, -100, -110, -130,
                                 -140, -160, -170, -190, -200, -220, -230, -250,
                                 -260, -280, -290, -310, -320, -340, -350, -360];
       /* Grosseur de 24 angles */
       var lesAnglesPositifs = [0, 10, 30, 40, 60, 70, 90, 110, 130, 140, 160,
                               170, 190, 200, 220, 230, 250, 260, 280, 290, 310,
                               320, 340, 360];

        /* Remet la rotation à zéro lorsqu'on dépasse les angles d'un cercle
        -360 ou 360 */
        if(angle <= lesAnglesNegatifs[24] || angle >= lesAnglesPositifs[23]) {

          knob.rotation.y = 0;

        }

        /* Pour 12h, 10 et -10 ou -350 et 0 */
        if((angle < lesAnglesPositifs[1] && angle > lesAnglesNegatifs[0]) ||
          (angle < lesAnglesNegatifs[23] && angle > lesAnglesPositifs[0])) {
          console.log("12h");
          monHorloge.setAttribute("material", "color:#c9c3c3");

        }

        /* Pour 1,-20 et -40 ou 340 et 320 */
        else if((angle < lesAnglesNegatifs[1] && angle > lesAnglesNegatifs[3]) ||
               (angle < lesAnglesPositifs[22] && angle > lesAnglesPositifs[21])) {
          console.log("1h");
          monHorloge.setAttribute("material", "color:#af9480");
        }

        /* Pour 2, -50 et -70 ou 310 et 290 */
        else if((angle < lesAnglesNegatifs[3] && angle > lesAnglesNegatifs[4]) ||
               (angle < lesAnglesPositifs[20] && angle > lesAnglesPositifs[19])) {
          console.log("2h");
           monHorloge.setAttribute("material", "color:#498446");
        }

        /* Pour 3, -80 et -100 ou 280 et 260 */
        else if((angle < lesAnglesNegatifs[5] && angle > lesAnglesNegatifs[6]) ||
               (angle < lesAnglesPositifs[18] && angle > lesAnglesPositifs[17])) {
          console.log("3h");

          monHorloge.setAttribute("material", "color:#fffb26");
        }

        /* Pour 4, -110 et -130 ou 250 et 230 */
        else if((angle < lesAnglesNegatifs[7] && angle > lesAnglesNegatifs[8]) ||
               (angle < lesAnglesPositifs[16] && angle > lesAnglesPositifs[15])) {
          console.log("4h");

          monHorloge.setAttribute("material", "color:#28ffde");
        }

        /* Pour 5, -140 et -160 ou 220 et 200 */
        else if((angle < lesAnglesNegatifs[9] && angle > lesAnglesNegatifs[10]) ||
               (angle < lesAnglesPositifs[14] && angle > lesAnglesPositifs[13])) {
          console.log("5h");

          monHorloge.setAttribute("material", "color:#2772f4");
        }

        /* Pour 6, -170 et -190 ou 190 ou 170 */
        else if((angle < lesAnglesNegatifs[11] && angle > lesAnglesNegatifs[12]) ||
               (angle < lesAnglesPositifs[12] && angle > lesAnglesPositifs[11])) {
          console.log("6h");

          monHorloge.setAttribute("material", "color:#8e27e8");
        }

        /* Pour 7, -200 et -220 ou 160 et 140 */
        else if((angle < lesAnglesNegatifs[13] && angle > lesAnglesNegatifs[14]) ||
               (angle < lesAnglesPositifs[10] && angle > lesAnglesPositifs[9])) {
          console.log("7h");

          monHorloge.setAttribute("material", "color:#e829be");
        }

        /* Pour 8, -230 et -250 ou 130 et 110  */
        else if((angle < lesAnglesNegatifs[15] && angle > lesAnglesNegatifs[16]) ||
               (angle < lesAnglesPositifs[8] && angle > lesAnglesPositifs[7])) {
          console.log("8h");

          monHorloge.setAttribute("material", "color:#e2266e");
        }

        /* Pour 9, -260 et 280 ou 90 et 70 */
        else if((angle < lesAnglesNegatifs[17] && angle > lesAnglesNegatifs[18]) ||
               (angle < lesAnglesPositifs[6] && angle > lesAnglesPositifs[5])) {
          console.log("9h");

          monHorloge.setAttribute("material", "color:#890000");
        }

        /* Pour 10, -290 et -310 ou 60 et 40 */
        else if((angle < lesAnglesNegatifs[19] && angle > lesAnglesNegatifs[20]) ||
               (angle < lesAnglesPositifs[4] && angle > lesAnglesPositifs[3])) {
          console.log("10h");

          monHorloge.setAttribute("material", "color:#ff9000");
        }

        /* Pour 11, -320 et -340 ou 30 et 10 */
        else if((angle < lesAnglesNegatifs[21] && angle > lesAnglesNegatifs[22]) ||
               (angle < lesAnglesPositifs[2] && angle > lesAnglesPositifs[1])) {
          console.log("11h");

          monHorloge.setAttribute("material", "color:#154c56");
        }

      });

  }

});
