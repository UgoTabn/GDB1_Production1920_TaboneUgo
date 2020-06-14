class EcranTitre extends Phaser.Scene {
  constructor(){
    super("EcranTitre")
  }

	
preload(){
	//this.load.image('logo', 'assets/logo.png'); //Background de l'ecran titre
}

create(){
this.button = this.add.sprite(10, 10, 'start').setInteractive();
this.button.on('pointerdown', function(){this.scene.start("Menu");}, this)
}
	
update(){

}
}
