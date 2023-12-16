//ponte
class Deck{

  constructor(){
    this.deck = new THREE.Object3D();

    var geometry = new THREE.BoxGeometry(1,1,1);

    var materialWhite = new THREE.MeshBasicMaterial( { color: 0xffffff } );

    var boxWhite1 = new THREE.Mesh( geometry, materialWhite );
    boxWhite1.scale.set(35, 1, 1);
    boxWhite1.position.set(0, 0, 3);
    this.deck.add(boxWhite1);

    var boxWhite2 = boxWhite1.clone();
    boxWhite2.position.set(0, 0, -4);
    this.deck.add(boxWhite2);

    var boxWhite3 = boxWhite1.clone();
    boxWhite3.scale.set(33, 1, 1);
    boxWhite3.position.set(0, 1, 3);
    this.deck.add(boxWhite3);

    var boxWhite4 = boxWhite3.clone();
    boxWhite4.position.set(0, 1, -4);
    this.deck.add(boxWhite4);

    var boxWhite5 = boxWhite1.clone();
    boxWhite5.scale.set(30, 1, 1);
    boxWhite5.position.set(1.5, 2, 3);
    this.deck.add(boxWhite5);

    var boxWhite6 = boxWhite5.clone();
    boxWhite6.position.set(1.5, 2, -4);
    this.deck.add(boxWhite6);

    var boxWhite7 = boxWhite1.clone();
    boxWhite7.scale.set(1, 1, 6);
    boxWhite7.position.set(17, 0, -0.5);
    this.deck.add(boxWhite7);

    var boxWhite8 = boxWhite7.clone();
    boxWhite8.scale.set(1, 2, 6);
    boxWhite8.position.set(16, 1.5, -0.5);
    this.deck.add(boxWhite8);

    var boxWhite9 = boxWhite7.clone();
    boxWhite9.position.set(-17, 0, -0.5);
    this.deck.add(boxWhite9);

    var boxWhite10 = boxWhite7.clone();
    boxWhite10.position.set(-16, 1, -0.5);
    this.deck.add(boxWhite10);

    var boxWhite11 = boxWhite7.clone();
    boxWhite11.position.set(-13, 2, -0.5);
    this.deck.add(boxWhite11);

    var materialBrown = new THREE.MeshBasicMaterial( { color: 0xf5deb3 } );

    var boxBrown1 = new THREE.Mesh( geometry, materialBrown );
    boxBrown1.scale.set(2, 1, 6);
    boxBrown1.position.set(18.5, -1, -0.5);
    this.deck.add(boxBrown1);

    var boxBrown2 = boxBrown1.clone();
    boxBrown2.position.set(-14.5, 1, -0.5);
    this.deck.add(boxBrown2);

    var boxBrown3 = boxBrown1.clone();
    boxBrown3.scale.set(3, 1, 6);
    boxBrown3.position.set(-19, -1, -0.5);
    this.deck.add(boxBrown3);

    var boxBrown4 = boxBrown1.clone();
    boxBrown4.scale.set(28, 1, 6);
    boxBrown4.position.set(1.5, 2, -0.5);
    this.deck.add(boxBrown4);
  }

  getDeck(){
    return this.deck;
  }
}
