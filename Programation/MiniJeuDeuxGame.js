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
	this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
		gameObject.x = dragX;
        gameObject.y = dragY;
	});
	




}

	
update(){
 	



}
}