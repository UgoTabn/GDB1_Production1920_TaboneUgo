class MiniJeuDeuxGame extends Phaser.Scene {
  constructor(){
    super("MiniJeuDeuxGame")
  }

	
preload(){
    this.load.image('roue', 'assets/pics/lance-overdose-loader-eye.png');
	this.load.image('boulon', 'assets/map.png');
	this.load.image('fond', 'assets/map.png');
}

create(){
	//drag and drop de la voiture
	let roue = this.physics.add.sprite(100, 100, 'roue').setInteractive();
	
	this.input.setDraggable(roue);
	this.input.dragDistanceThreshold = 16;

	
	boulonun = this.button = this.add.sprite(10, 10, 'boulon').setInteractive();
	boulonun.on('pointerdown', function(){boulon = 1;}, this) //bouton pour aller dans le menu "Menu"

	let arrivee = this.physics.add.staticGroup();
	arrivee.create(200, 600, 'arrivee').setOrigin(0).refreshBody();
	this.physics.add.collider(roue, arrivee, finNiveauDeux, null, this);

	
	this.time.addEvent({ delay: 5000, callback:chrono, callbackScope: this, loop: false });


}

	
update(){
 	
	if(boulon === 1){
	this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
		gameObject.x = dragX;
        gameObject.y = dragY;
	});
	}
	
	if(boulon === 1){
		boulonun.destroy();
	}
	
	if(miniJeu_Mort===1 && modeEntrainement ===1){
	this.scene.start("MiniJeuDeuxUniquement");
	}
	if(miniJeu_Mort===1 && modeEntrainement ===0){
	this.scene.start("PartieNormale");
}

}
}