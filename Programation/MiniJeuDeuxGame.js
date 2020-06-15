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
	boulon = 0;
	this.input.setDraggable(roue);
	this.input.dragDistanceThreshold = 16;

	
	boulonun = this.button = this.add.sprite(10, 10, 'boulon').setInteractive();
	boulonun.on('pointerdown', function(){boulon = 1;}, this) //bouton pour aller dans le menu "Menu"




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

}
}