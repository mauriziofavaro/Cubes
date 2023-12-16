//prua
class Bow{

  constructor(){
    this.bow = new THREE.Object3D();

    var geometry = new THREE.BoxGeometry(1,1,1);

    var materialRed = new THREE.MeshBasicMaterial( { color: 0xff0000 } );

    var boxRed = new THREE.Mesh( geometry, materialRed );
    boxRed.scale.set(2, 1, 2);
    boxRed.position.set(0, 0, -0.5);
    this.bow.add(boxRed);

    var materialBlack = new THREE.MeshBasicMaterial( { color: 0x000000 } );

    var boxBlack1 = new THREE.Mesh( geometry, materialBlack );
    boxBlack1.scale.set(2, 3, 2);
    boxBlack1.position.set(0, 2, -0.5);
    this.bow.add(boxBlack1);

    var boxBlack2 = boxBlack1.clone();
    boxBlack2.scale.set(2, 3, 1);
    boxBlack2.position.set(-2, 2, -2);
    this.bow.add(boxBlack2);

    var boxBlack3 = boxBlack2.clone();
    boxBlack3.position.set(-2, 2, 1);
    this.bow.add(boxBlack3);

    var boxBlack4 = boxBlack1.clone();
    boxBlack4.scale.set(2, 2, 1);
    boxBlack4.position.set(-4, 2.5, 2);
    this.bow.add(boxBlack4);

    var boxBlack5 = boxBlack4.clone();
    boxBlack5.position.set(-4, 2.5, -3);
    this.bow.add(boxBlack5);

    var materialWhite = new THREE.MeshBasicMaterial( { color: 0xffffff } );

    var boxWhite1 = new THREE.Mesh( geometry, materialWhite );
    boxWhite1.scale.set(2, 1, 2);
    boxWhite1.position.set(0, 4, -0.5);
    this.bow.add(boxWhite1);

    var boxWhite2 = boxWhite1.clone();
    boxWhite2.scale.set(2, 1, 1);
    boxWhite2.position.set(-2, 4, -2);
    this.bow.add(boxWhite2);

    var boxWhite3 = boxWhite2.clone();
    boxWhite3.position.set(-2, 4, 1);
    this.bow.add(boxWhite3);

    var boxWhite4 = boxWhite2.clone();
    boxWhite4.position.set(-4, 4, -3);
    this.bow.add(boxWhite4);

    var boxWhite5 = boxWhite2.clone();
    boxWhite5.position.set(-4, 4, 2);
    this.bow.add(boxWhite5);

    var boxWhite6 = boxWhite2.clone();
    boxWhite6.position.set(-6, 4, -4);
    this.bow.add(boxWhite6);

    var boxWhite7 = boxWhite2.clone();
    boxWhite7.position.set(-6, 4, 3);
    this.bow.add(boxWhite7);

    var materialBrown = new THREE.MeshBasicMaterial( { color: 0xf5deb3 } );

    var boxBrown1 = new THREE.Mesh( geometry, materialBrown );
    boxBrown1.scale.set(2, 1, 2);
    boxBrown1.position.set(-2, 4, -0.5);
    this.bow.add(boxBrown1);

    var boxBrown2 = boxBrown1.clone();
    boxBrown2.scale.set(2, 1, 4);
    boxBrown2.position.set(-4, 4, -0.5);
    this.bow.add(boxBrown2);

    var boxBrown3 = boxBrown1.clone();
    boxBrown3.scale.set(2, 1, 6);
    boxBrown3.position.set(-6, 4, -0.5);
    this.bow.add(boxBrown3);
  }

  getBow(){
    return this.bow;
  }
}
