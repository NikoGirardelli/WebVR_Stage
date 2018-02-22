AFRAME.registerComponent('horloge', {

  init:function() {

    /* Met le soleil à la bonne place */
    this.el.sceneEl.setAttribute("environment","lightPosition",{x:0,y:0.35,z:0});

  },

  play: function() {

    /* Lorsque que la petite aiguille tombe sur un chiffre*/
    this.el.addEventListener('change', this.changerHeure.bind(this));

  },

  pause:function() {

    this.el.removeEventListener("change",this.changerHeure.bind(this));

  },

  changerHeure:function() {

    var fond = document.querySelector("#fondHorloge"),
        scene = this.el.sceneEl,
        poignee = this.el.childNodes[1].components["ui-rotary"].knob,

      /* Angle de l'horloge*/
      angle = poignee.rotation.y * 180 / Math.PI,

      /* Grosseur de 25 angles */
      lesAnglesNegatifs = [-10, -20, -40, -50, -70, -80, -100, -110, -130,
                           -140, -160, -170, -190, -200, -220, -230, -250,
                           -260, -280, -290, -310, -320, -340, -350, -360],
      /* Grosseur de 24 angles */
      lesAnglesPositifs = [0, 10, 30, 40, 60, 70, 90, 110, 130, 140, 160,
                           170, 190, 200, 220, 230, 250, 260, 280, 290, 310,
                           320, 340, 360];

    /* Remet la rotation à zéro lorsqu'on dépasse les angles d'un cercle
    -360 ou 360 */
    if(angle <= lesAnglesNegatifs[24] || angle >= lesAnglesPositifs[23]) {

      poignee.rotation.y = 0;

    }
//console.log(scene.getAttribute("environment").lightPosition);
    /* Pour 12h, 10 et -10 ou -350 et 0 */
    if((angle < lesAnglesPositifs[1] && angle > lesAnglesNegatifs[0]) ||
      (angle < lesAnglesNegatifs[23] && angle > lesAnglesPositifs[0])) {

      fond.setAttribute("material", "color:#FFFFFF");
      this.el.setAttribute("data-heure-choisisse",12);

      if(this.el.getAttribute("data-am-pm") == "PM") {

        scene.setAttribute("environment","lightPosition",{x:0,y:0.35,z:0});

      }

      if(this.el.getAttribute("data-am-pm") == "AM") {

        scene.setAttribute("environment","lightPosition", {x:0,y:0,z:0});

      }


    }

    /* Pour 1,-20 et -40 ou 340 et 320 */
    else if((angle < lesAnglesNegatifs[1] && angle > lesAnglesNegatifs[3]) ||
           (angle < lesAnglesPositifs[22] && angle > lesAnglesPositifs[21])) {

      fond.setAttribute("material", "color:#af9480");
      this.el.setAttribute("data-heure-choisisse",1);

      if(this.el.getAttribute("data-am-pm") == "PM") {

        scene.setAttribute("environment","lightPosition",{x:0,y:0.35,z:-0.325});

      }

      if(this.el.getAttribute("data-am-pm") == "AM") {

        scene.setAttribute("environment","lightPosition",{x:0,y:-0.1,z:2});

      }


    }

    /* Pour 2, -50 et -70 ou 310 et 290 */
    else if((angle < lesAnglesNegatifs[3] && angle > lesAnglesNegatifs[4]) ||
           (angle < lesAnglesPositifs[20] && angle > lesAnglesPositifs[19])) {

       fond.setAttribute("material", "color:#498446");
       this.el.setAttribute("data-heure-choisisse",2);

       if(this.el.getAttribute("data-am-pm") == "PM") {

         scene.setAttribute("environment","lightPosition",{x:0,y:0.35,z:-0.65});

       }

       if(this.el.getAttribute("data-am-pm") == "AM") {

         scene.setAttribute("environment","lightPosition",{x:0,y:-0.1,z:4});

       }

    }

    /* Pour 3, -80 et -100 ou 280 et 260 */
    else if((angle < lesAnglesNegatifs[5] && angle > lesAnglesNegatifs[6]) ||
           (angle < lesAnglesPositifs[18] && angle > lesAnglesPositifs[17])) {

      fond.setAttribute("material", "color:#fffb26");
      this.el.setAttribute("data-heure-choisisse",3);

      if(this.el.getAttribute("data-am-pm") == "PM") {

        scene.setAttribute("environment","lightPosition",{x:0,y:0.35,z:-0.975});

      }

      if(this.el.getAttribute("data-am-pm") == "AM") {

        scene.setAttribute("environment","lightPosition",{x:0,y:-0.1,z:6});

      }

    }

    /* Pour 4, -110 et -130 ou 250 et 230 */
    else if((angle < lesAnglesNegatifs[7] && angle > lesAnglesNegatifs[8]) ||
           (angle < lesAnglesPositifs[16] && angle > lesAnglesPositifs[15])) {

      fond.setAttribute("material", "color:#28ffde");
      this.el.setAttribute("data-heure-choisisse",4);

      if(this.el.getAttribute("data-am-pm") == "PM") {

        scene.setAttribute("environment","lightPosition",{x:0,y:0.35,z:-1.3});

      }

      if(this.el.getAttribute("data-am-pm") == "AM") {

        scene.setAttribute("environment","lightPosition",{x:0,y:-0.1,z:8});

      }

    }

    /* Pour 5, -140 et -160 ou 220 et 200 */
    else if((angle < lesAnglesNegatifs[9] && angle > lesAnglesNegatifs[10]) ||
           (angle < lesAnglesPositifs[14] && angle > lesAnglesPositifs[13])) {

      fond.setAttribute("material", "color:#2772f4");
      this.el.setAttribute("data-heure-choisisse",5);

      if(this.el.getAttribute("data-am-pm") == "PM") {

        scene.setAttribute("environment","lightPosition",{x:0,y:0.35,z:-4});

      }

      if(this.el.getAttribute("data-am-pm") == "AM") {

        scene.setAttribute("environment","lightPosition",{x:0,y:-0.04,z:4});

      }

    }

    /* Pour 6, -170 et -190 ou 190 ou 170 */
    else if((angle < lesAnglesNegatifs[11] && angle > lesAnglesNegatifs[12]) ||
           (angle < lesAnglesPositifs[12] && angle > lesAnglesPositifs[11])) {

      fond.setAttribute("material", "color:#8e27e8");
      this.el.setAttribute("data-heure-choisisse",6);

      if(this.el.getAttribute("data-am-pm") == "PM") {

        scene.setAttribute("environment","lightPosition",{x:0,y:0.01,z:-4});

      }

      if(this.el.getAttribute("data-am-pm") == "AM" &&
        (angle < lesAnglesNegatifs[11] && angle > lesAnglesNegatifs[12])) {

        scene.setAttribute("environment","lightPosition",{x:0,y:0.01,z:4});

      }

    }

    /* Pour 7, -200 et -220 ou 160 et 140 */
    else if((angle < lesAnglesNegatifs[13] && angle > lesAnglesNegatifs[14]) ||
           (angle < lesAnglesPositifs[10] && angle > lesAnglesPositifs[9])) {

      fond.setAttribute("material", "color:#e829be");
      this.el.setAttribute("data-heure-choisisse",7);

      if(this.el.getAttribute("data-am-pm") == "PM") {

        scene.setAttribute("environment","lightPosition",{x:0,y:-0.04,z:-4});

      }

      if(this.el.getAttribute("data-am-pm") == "AM") {

        scene.setAttribute("environment","lightPosition",{x:0,y:0.35,z:4});

      }

    }

    /* Pour 8, -230 et -250 ou 130 et 110  */
    else if((angle < lesAnglesNegatifs[15] && angle > lesAnglesNegatifs[16]) ||
           (angle < lesAnglesPositifs[8] && angle > lesAnglesPositifs[7])) {

      fond.setAttribute("material", "color:#e2266e");
      this.el.setAttribute("data-heure-choisisse",8);

      if(this.el.getAttribute("data-am-pm") == "PM") {

        scene.setAttribute("environment","lightPosition",{x:0,y:-0.1,z:-8});

      }

      if(this.el.getAttribute("data-am-pm") == "AM") {

        scene.setAttribute("environment","lightPosition",{x:0,y:0.35,z:1.3});

      }

    }

    /* Pour 9, -260 et 280 ou 90 et 70 */
    else if((angle < lesAnglesNegatifs[17] && angle > lesAnglesNegatifs[18]) ||
           (angle < lesAnglesPositifs[6] && angle > lesAnglesPositifs[5])) {

      fond.setAttribute("material", "color:#890000");
      this.el.setAttribute("data-heure-choisisse",9);

      if(this.el.getAttribute("data-am-pm") == "PM") {

        scene.setAttribute("environment","lightPosition",{x:0,y:-0.1,z:-6});

      }

      if(this.el.getAttribute("data-am-pm") == "AM") {

        scene.setAttribute("environment","lightPosition",{x:0,y:0.35,z:0.975});

      }

    }

    /* Pour 10, -290 et -310 ou 60 et 40 */
    else if((angle < lesAnglesNegatifs[19] && angle > lesAnglesNegatifs[20]) ||
           (angle < lesAnglesPositifs[4] && angle > lesAnglesPositifs[3])) {

      fond.setAttribute("material", "color:#ff9000");
      this.el.setAttribute("data-heure-choisisse",10);

      if(this.el.getAttribute("data-am-pm") == "PM") {

        scene.setAttribute("environment","lightPosition",{x:0,y:-0.1,z:-4});

      }

      if(this.el.getAttribute("data-am-pm") == "AM") {

        scene.setAttribute("environment","lightPosition",{x:0,y:0.35,z:0.65});

      }

    }

    /* Pour 11, -320 et -340 ou 30 et 10 */
    else if((angle < lesAnglesNegatifs[21] && angle > lesAnglesNegatifs[22]) ||
           (angle < lesAnglesPositifs[2] && angle > lesAnglesPositifs[1])) {

      fond.setAttribute("material", "color:#154c56");
      this.el.setAttribute("data-heure-choisisse",11);

      if(this.el.getAttribute("data-am-pm") == "PM") {

        scene.setAttribute("environment","lightPosition",{x:0,y:-0.1,z:-2});

      }

      if(this.el.getAttribute("data-am-pm") == "AM") {

        scene.setAttribute("environment","lightPosition",{x:0,y:0.35,z:0.325});

      }

    }

  }

});
