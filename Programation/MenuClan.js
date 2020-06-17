class MenuClan extends Phaser.Scene {
  constructor(){
    super("MenuClan")
  }

	
preload(){
	this.load.image('backgroundclan', 'assets/backgroundclan.png'); //Background du menu avec les boutons
	this.load.image('retour', 'assets/boutonretour.png'); //Background du menu avec les boutons
}

create(){
	this.add.image(0,0, 'backgroundclan').setOrigin(0);
	this.button = this.add.sprite(55.8, 46.9, 'retour').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("Menu");}, this) //bouton pour aller dans le menu "Menu"
	
	//indication sur le clan
}
	
update(){
 
}
}