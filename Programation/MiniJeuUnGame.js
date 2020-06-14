class MiniJeuUnGame extends Phaser.Scene {
  constructor(){
    super("MiniJeuUnGame")
  }

	
preload(){
    this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
	this.load.image('route', 'assets/map.png');
	this.load.image('arrivee', 'assets/map.png');
	
}

create(){
	//drag and drop de la voiture
	voiture = this.physics.add.sprite(100, 100, 'eye').setInteractive();
	this.input.setDraggable(voiture);
	this.input.dragDistanceThreshold = 16;
	this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
		gameObject.x = dragX;
        gameObject.y = dragY;
	});
	
	let route = this.physics.add.staticGroup();
	let arrivee = this.physics.add.staticGroup();
	route.create(300, 300, 'route').setOrigin(0).refreshBody();
	arrivee.create(200, 200, 'arrivee').setOrigin(0).refreshBody();
	this.physics.add.collider(voiture, route, touche, null, this);
	this.physics.add.collider(voiture, arrivee, finNiveau, null, this);
	
this.time.addEvent({ delay: 5000, callback:chrono, callbackScope: this, loop: false });


}

	
update(){
if(miniJeu_Mort===1 && modeEntrainement ===1){
	this.scene.start("MiniJeuUnUniquement");
}
if(miniJeu_Mort===1 && modeEntrainement ===0){
	this.scene.start("PartieNormale");
}


}
}