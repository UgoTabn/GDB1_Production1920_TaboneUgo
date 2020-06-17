class MiniJeuTroisGame extends Phaser.Scene {
  constructor(){
    super("MiniJeuTroisGame")
  }

	
preload(){
    this.load.image('pilote', 'assets/pilote.png');
	this.load.image('habit1', 'assets/habit1.png');
	this.load.image('habit2', 'assets/habit2.png');
	this.load.image('habit3', 'assets/habit3.png');
	this.load.image('backgroundroute', 'assets/backgroundroute.png');
}

create(){
	let y = 50;
	this.add.image(0,0, 'backgroundroute').setOrigin(0);
	let habit1 = this.physics.add.sprite(Phaser.Math.Between(0,375),Phaser.Math.Between(0, 400), 'habit1').setInteractive().setScale(0.23);
	let habit2 = this.physics.add.sprite(Phaser.Math.Between(0,375),Phaser.Math.Between(0, 400), 'habit2').setInteractive().setScale(0.23);
	let habit3 = this.physics.add.sprite(Phaser.Math.Between(0,375),Phaser.Math.Between(0, 400), 'habit3').setInteractive().setScale(0.23);
	let habit4 = this.physics.add.sprite(Phaser.Math.Between(0,375),Phaser.Math.Between(0, 400), 'habit3').setInteractive().setScale(0.23);
	
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
	pilote.create(190, 600, 'pilote');
	this.physics.add.collider(habit1, pilote,toucheObjetTypeUn, null, this);
	this.physics.add.collider(habit2, pilote,toucheObjetTypeUn, null, this);
	this.physics.add.collider(habit3, pilote,toucheObjetTypeDeux, null, this);
	this.physics.add.collider(habit4, pilote,toucheObjetTypeDeux, null, this);
	

	temps = 6500 - ((score/10)*850);
	if(temps<2250){temps = 2250;}
	this.time.addEvent({ delay: temps, callback:chrono, callbackScope: this, loop: false });
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