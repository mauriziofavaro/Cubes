//poppa
class Stern{

  constructor(){
    this.stern = new THREE.Object3D();

    var geometry = new THREE.BoxGeometry(1,1,1);

    var materialRed = new THREE.MeshBasicMaterial( { color: 0xff0000 } );

    var boxRed = new THREE.Mesh( geometry, materialRed );
    boxRed.scale.set(1, 1, 2);
    boxRed.position.set(0, 0, -0.5);
    this.stern.add(boxRed);

    var materialBlack = new THREE.MeshBasicMaterial( { color: 0x000000 } );

    var boxBlack1 = new THREE.Mesh( geometry, materialBlack );
    boxBlack1.scale.set(2, 1, 2);
    boxBlack1.position.set(0.5, 1, -0.5);
    this.stern.add(boxBlack1);

    var boxBlack2 = boxBlack1.clone();
    boxBlack2.scale.set(2, 1, 1);
    boxBlack2.position.set(1.5, 1, -2);
    this.stern.add(boxBlack2);

    var boxBlack3 = boxBlack2.clone();
    boxBlack3.position.set(1.5, 1, 1);
    this.stern.add(boxBlack3);

    var boxBlack4 = boxBlack1.clone();
    boxBlack4.scale.set(1, 1, 6);
    boxBlack4.position.set(2, 2, -0.5);
    this.stern.add(boxBlack4);

    var boxBlack5 = boxBlack1.clone();
    boxBlack5.scale.set(1, 1, 4);
    boxBlack5.position.set(0, 3, -0.5);
    this.stern.add(boxBlack5);

    var boxBlack6 = boxBlack4.clone();
    boxBlack6.position.set(1, 3, -0.5);
    this.stern.add(boxBlack6);

    var boxBlack7 = boxBlack1.clone();
    boxBlack7.scale.set(1, 1, 1);
    boxBlack7.position.set(2, 3, -3);
    this.stern.add(boxBlack7);

    var boxBlack8 = boxBlack7.clone();
    boxBlack8.position.set(2, 3, 2);
    this.stern.add(boxBlack8);

    var materialWhite = new THREE.MeshBasicMaterial( { color: 0xffffff } );

    var boxWhite1 = new THREE.Mesh( geometry, materialWhite );
    boxWhite1.scale.set(1, 1, 2);
    boxWhite1.position.set(-1, 4, -0.5);
    this.stern.add(boxWhite1);

    var boxWhite2 = boxWhite1.clone();
    boxWhite2.scale.set(1, 1, 1);
    boxWhite2.position.set(0, 4, -2);
    this.stern.add(boxWhite2);

    var boxWhite3 = boxWhite2.clone();
    boxWhite3.position.set(0, 4, 1);
    this.stern.add(boxWhite3);

    var boxWhite4 = boxWhite1.clone();
    boxWhite4.scale.set(2, 1, 1);
    boxWhite4.position.set(1.5, 4, -3);
    this.stern.add(boxWhite4);

    var boxWhite5 = boxWhite4.clone();
    boxWhite5.position.set(1.5, 4, 2);
    this.stern.add(boxWhite5);

    var boxWhite6 = boxWhite4.clone();
    boxWhite6.position.set(3.5, 4, -4);
    this.stern.add(boxWhite6);

    var boxWhite7 = boxWhite4.clone();
    boxWhite7.position.set(3.5, 4, 3);
    this.stern.add(boxWhite7);

    var materialBrown = new THREE.MeshBasicMaterial( { color: 0xf5deb3 } );

    var boxBrown1 = new THREE.Mesh( geometry, materialBrown );
    boxBrown1.scale.set(1, 1, 2);
    boxBrown1.position.set(0, 4, -0.5);
    this.stern.add(boxBrown1);

    var boxBrown2 = boxBrown1.clone();
    boxBrown2.scale.set(2, 1, 4);
    boxBrown2.position.set(1.5, 4, -0.5);
    this.stern.add(boxBrown2);

    var boxBrown3 = boxBrown1.clone();
    boxBrown3.scale.set(2, 1, 6);
    boxBrown3.position.set(3.5, 4, -0.5);
    this.stern.add(boxBrown3);
  }

  getStern(){
    return this.stern;
  }
}
