//scafo
class Hull{

  constructor(){
    this.hull = new THREE.Object3D();

    var geometry = new THREE.BoxGeometry(1,1,1);

    var materialRed = new THREE.MeshBasicMaterial( { color: 0xff0000 } );

    var boxRed1 = new THREE.Mesh( geometry, materialRed );
    boxRed1.scale.set(50, 1, 2);
    boxRed1.position.set(0, 0, -0.5);
    this.hull.add(boxRed1);

    var boxRed2 = boxRed1.clone();
    boxRed2.scale.set(50, 1, 1);
    boxRed2.position.set(0, 1, 1);
    this.hull.add(boxRed2);

    var boxRed3 = boxRed2.clone();
    boxRed3.position.set(0, 1, -2);
    this.hull.add(boxRed3);

    var materialBlack = new THREE.MeshBasicMaterial( { color: 0x000000 } );

    var boxBlack1 = new THREE.Mesh( geometry, materialBlack );
    boxBlack1.scale.set(46, 1, 1);
    boxBlack1.position.set(0, 2, 2);
    this.hull.add(boxBlack1);

    var boxBlack2 = boxBlack1.clone();
    boxBlack2.position.set(0, 2, -3);
    this.hull.add(boxBlack2);

    var boxBlack3 = boxBlack1.clone();
    boxBlack3.scale.set(44, 2, 1);
    boxBlack3.position.set(-1, 3.5, 3);
    this.hull.add(boxBlack3);

    var boxBlack4 = boxBlack3.clone();
    boxBlack4.position.set(-1, 3.5, -4);
    this.hull.add(boxBlack4);
  }

  getHull(){
    return this.hull;
  }
}
