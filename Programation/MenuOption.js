class MenuOption extends Phaser.Scene {
  constructor(){
    super("MenuOption")
  }

	
preload(){

}

create(){
	this.button = this.add.sprite(10, 10, 'retour').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("Menu");}, this) //bouton pour aller dans le menu "Menu"
	
	//Reinitialisation des records
}
	
update(){
 
}
}