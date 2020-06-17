class MiniJeuUnGame extends Phaser.Scene {
  constructor(){
    super("MiniJeuUnGame")
  }

	
preload(){
    this.load.image('voiture', 'assets/voiture.png');
	this.load.image('route', 'assets/route.png');
	this.load.image('arrivee', 'assets/arrivee.png');
	this.load.image('backgroundroute', 'assets/backgroundroute.png');
	
	
}

create(){
	this.add.image(0,0, 'backgroundroute').setOrigin(0);
	//drag and drop de la voiture
	voiture = this.physics.add.sprite(197.5, 650, 'voiture').setInteractive().setScale(0.1);
	this.input.setDraggable(voiture);
	this.input.dragDistanceThreshold = 16;
	this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
		gameObject.x = dragX;
        gameObject.y = dragY;
	});
	
	let routes = this.physics.add.staticGroup();
	
	
	routes.create(Phaser.Math.Between(0,375),Phaser.Math.Between(0, 400), 'route').setScale(0.1).refreshBody();
	routes.create(Phaser.Math.Between(0,375),Phaser.Math.Between(0, 400), 'route').setScale(0.1).refreshBody();


	
	
	
	let arrivee = this.physics.add.staticGroup();
	arrivee.create(200, 200, 'arrivee').setOrigin(0).setScale(0.2).refreshBody();
	this.physics.add.collider(voiture, routes, touche, null, this);
	this.physics.add.collider(voiture, arrivee, finNiveau, null, this);
	
	temps = 5500 - ((score/10)*1100);
	if(temps<1750){temps = 1750;}
	this.time.addEvent({ delay: temps, callback:enchainementDeScene, callbackScope: this, loop: false });	
	
	
this.time.addEvent({ delay: temps, callback:chrono, callbackScope: this, loop: false });


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