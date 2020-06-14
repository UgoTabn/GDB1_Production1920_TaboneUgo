class MenuJouer extends Phaser.Scene {
  constructor(){
    super("MenuJouer")
  }

	
preload(){

}

create(){
	this.button = this.add.sprite(10, 10, 'retour').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("Menu");}, this) //bouton pour aller dans le menu "Menu"
	
	this.button = this.add.sprite(50, 10, 'jouer').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("PartieNormale");}, this) //bouton pour commencer une partie normale
	
	this.button = this.add.sprite(100, 10, 'jouerminijeu').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("MenuChoixMiniJeu");}, this) //bouton pour aller dans le menu "MiniJeux"
}
	
update(){
 
}
}