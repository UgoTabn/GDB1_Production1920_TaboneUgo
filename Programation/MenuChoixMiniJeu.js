class MenuChoixMiniJeu extends Phaser.Scene {
  constructor(){
    super("MenuChoixMiniJeu")
  }

	
preload(){

	
}

create(){
	
	
	this.button = this.add.sprite(10, 10, 'retour').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("Menu");}, this) //bouton pour aller dans le menu "Menu"
	
	this.button = this.add.sprite(50, 10, 'jeuUn').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("MiniJeuUnUniquement");modeEntrainement=1;}, this) //bouton pour lancer le jeu un
	
	this.button = this.add.sprite(100, 10, 'jeuDeux').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("MiniJeuDeuxUniquement");modeEntrainement=1;}, this) //bouton pour lancer le jeu deux
	
	this.button = this.add.sprite(150, 10, 'jeuTrois').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("MiniJeuTroisUniquement");modeEntrainement=1;}, this) //bouton pour lancer le jeu trois
}
	
update(){
 
}
}