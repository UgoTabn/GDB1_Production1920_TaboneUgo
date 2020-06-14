class MiniJeuDeuxGame extends Phaser.Scene {
  constructor(){
    super("MiniJeuDeuxGame")
  }

	
preload(){
    this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
	this.load.image('route', 'assets/map.png');
}

create(){
	//drag and drop de la voiture
	let voiture = this.physics.add.sprite(100, 100, 'eye').setInteractive();;
	this.input.setDraggable(voiture);
	this.input.dragDistanceThreshold = 16;
	this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
		gameObject.x = dragX;
        gameObject.y = dragY;
	});
	
	let route = this.physics.add.staticGroup();
	route.create(300, 300, 'route').setOrigin(0).refreshBody();
	this.physics.add.collider(voiture, route, touche, null, this);



}

	
update(){
 	



}
}