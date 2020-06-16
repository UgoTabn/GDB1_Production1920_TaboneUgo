class MiniJeuTroisGame extends Phaser.Scene {
  constructor(){
    super("MiniJeuTroisGame")
  }

	
preload(){
    this.load.image('pilote', 'assets/pics/lance-overdose-loader-eye.png');
	this.load.image('habit1', 'assets/map.png');
	this.load.image('habit2', 'assets/map.png');
	this.load.image('habit3', 'assets/map.png');
	this.load.image('habit4', 'assets/map.png');
}

create(){
	let habit1 = this.physics.add.sprite(50, 100, 'habit1').setInteractive();
	let habit2 = this.physics.add.sprite(50, 150, 'habit2').setInteractive();
	let habit3 = this.physics.add.sprite(50, 200, 'habit3').setInteractive();
	let habit4 = this.physics.add.sprite(50, 250, 'habit4').setInteractive();
	
	nombreHabitRestant = 2;
	
	this.input.setDraggable(habit1);
	this.input.setDraggable(habit2);
	this.input.setDraggable(habit3);
	this.input.setDraggable(habit4);
	this.input.dragDistanceThreshold = 16;
	
	this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
		gameObject.x = dragX;
        gameObject.y = dragY;
	});
	
	let pilote = this.physics.add.staticGroup();
	pilote.create(200, 200, 'pilote');
	this.physics.add.collider(habit1, pilote,toucheObjetTypeUn, null, this);
	this.physics.add.collider(habit2, pilote,toucheObjetTypeUn, null, this);
	this.physics.add.collider(habit3, pilote,toucheObjetTypeDeux, null, this);
	this.physics.add.collider(habit4, pilote,toucheObjetTypeDeux, null, this);
	

	
	this.time.addEvent({ delay: 5000, callback:chrono, callbackScope: this, loop: false });
}

	
update(){
 	if(miniJeu_Mort===1 && modeEntrainement ===1){
	this.scene.start("MiniJeuTroisUniquement");
}
if(miniJeu_Mort===1 && modeEntrainement ===0){
	this.scene.start("PartieNormale");
}



}
}