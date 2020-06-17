class MenuJouer extends Phaser.Scene {
  constructor(){
    super("MenuJouer")
  }

	
preload(){
	this.load.image('background2', 'assets/background2.png'); //Background du menu avec les boutons
	this.load.image('retour', 'assets/boutonretour.png'); //Background du menu avec les boutons
	this.load.image('jouer', 'assets/boutonpartienormale.png'); //Background du menu avec les boutons
	this.load.image('jouerminijeu', 'assets/boutonminijeux.png'); //Background du menu avec les boutons
}

create(){
	this.add.image(0,0, 'background2').setOrigin(0);
	this.button = this.add.sprite(55.8, 46.9, 'retour').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("Menu");}, this) //bouton pour aller dans le menu "Menu"
	
	this.button = this.add.sprite(55.8, 210, 'jouer').setInteractive().setOrigin(0);
	this.button.on('pointerdown', function(){this.scene.start("PartieNormale");}, this) //bouton pour commencer une partie normale
	
	this.button = this.add.sprite(55.8, 330, 'jouerminijeu').setInteractive().setOrigin(0);
	this.button.on('pointerdown', function(){this.scene.start("MenuChoixMiniJeu");}, this) //bouton pour aller dans le menu "MiniJeux"
}
	
update(){
 
}
}