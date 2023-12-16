//creazione terrain
class Terrain{

  constructor(data, img){
    this.terrain = new THREE.Object3D();

    var geometry = new THREE.BoxGeometry(1,1,1);

    var seaTexture = new THREE.TextureLoader().load( 'textures/sea.png' );
    var iceTexture = new THREE.TextureLoader().load( 'textures/ice.jpg' );

    var materialSea = new THREE.MeshBasicMaterial( { map: seaTexture } );
    var materialIce = new THREE.MeshBasicMaterial( { map: iceTexture } );

    var boxSea = new THREE.Mesh( geometry, materialSea );
    var boxIce = new THREE.Mesh( geometry, materialIce );

    for (var i=0; i<img.width*img.height; i++){
      if (data[i] == 0){
        var box = boxSea.clone();
        box.position.set(i%img.width, 0, Math.floor(i/img.height));
        this.terrain.add(box);

      } else if (data[i]>0 && data[i]<13){
        var box = boxIce.clone();
        box.position.set(i%img.width, 0.5, Math.floor(i/img.height));
        box.scale.y = 2;
        this.terrain.add(box);

      } else if (data[i]>13 && data[i]<15){
        var box = boxIce.clone();
        box.position.set(i%img.width, 1, Math.floor(i/img.height));
        box.scale.y = 3;
        this.terrain.add(box);

      } else if (data[i]>15 && data[i]<20){
        var box = boxIce.clone();
        box.position.set(i%img.width, 1.5, Math.floor(i/img.height));
        box.scale.y = 4;
        this.terrain.add(box);

      } else{
        var box = boxIce.clone();
        box.position.set(i%img.width, 2, Math.floor(i/img.height));
        box.scale.y = 5;
        this.terrain.add(box);
      }
    }
  }

  getTerrain(){
    return this.terrain;
  }
}

//return array with height data from img, taken from: http://danni-three.blogspot.it/2013/09/threejs-heightmaps.html
function getHeightData(img,scale) {

 if (scale == undefined) scale=1;

    var canvas = document.createElement( 'canvas' );
    canvas.width = img.width;
    canvas.height = img.height;
    var context = canvas.getContext( '2d' );

    var size = img.width * img.height;
    console.log(size);
    var data = new Float32Array( size );

    context.drawImage(img,0,0);

    for ( var i = 0; i < size; i ++ ) {
        data[i] = 0
    }

    var imgd = context.getImageData(0, 0, img.width, img.height);
    var pix = imgd.data;

    var j=0;
    for (var i = 0; i<pix.length; i +=4) {
        var all = pix[i]+pix[i+1]+pix[i+2];  // all is in range 0 - 255*3
        data[j++] = scale*all/3;
    }

    return data;
}
