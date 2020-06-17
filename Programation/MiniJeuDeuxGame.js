class MiniJeuDeuxGame extends Phaser.Scene {
  constructor(){
    super("MiniJeuDeuxGame")
  }

	
preload(){
    this.load.image('roue', 'assets/roue.png');
	this.load.image('boulon', 'assets/boulon.png');
	this.load.image('backgroundroute', 'assets/backgroundroute.png');
		this.load.image('arrivee', 'assets/arrivee.png');

}

create(){
	//drag and drop de la voiture
	this.add.image(0,0, 'backgroundroute').setOrigin(0);
	let roue = this.physics.add.sprite(187.5, 333.5, 'roue').setInteractive().setScale(0.6);
	
	this.input.setDraggable(roue);
	this.input.dragDistanceThreshold = 16;

	
	boulonun = this.button = this.add.sprite(Phaser.Math.Between(0,375),Phaser.Math.Between(0, 400),'boulon').setInteractive().setScale(0.3);
	boulonun.on('pointerdown', function(){boulon = 1;}, this) //bouton pour aller dans le menu "Menu"

	let arrivee = this.physics.add.staticGroup();
	arrivee.create(200, 600, 'arrivee').setOrigin(0).refreshBody();
	this.physics.add.collider(roue, arrivee, finNiveauDeux, null, this);

	temps = 4800 - ((score/10)*1500);
	if(temps<1750){temps = 1750;}
	this.time.addEvent({ delay: temps, callback:chrono, callbackScope: this, loop: false });


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