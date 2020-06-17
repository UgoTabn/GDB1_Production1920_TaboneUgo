class MenuChoixMiniJeu extends Phaser.Scene {
  constructor(){
    super("MenuChoixMiniJeu")
  }

	
preload(){
	this.load.image('background2', 'assets/background2.png'); //Background du menu avec les boutons
	this.load.image('jeuUn', 'assets/boutoncourse.png'); //Background du menu avec les boutons
	this.load.image('jeuDeux', 'assets/boutonroue.png'); //Background du menu avec les boutons
	this.load.image('jeuTrois', 'assets/boutonhabit.png'); //Background du menu avec les boutons
	
}

create(){
		this.add.image(0,0, 'background2').setOrigin(0);

	
	this.button = this.add.sprite(55.8, 46.9, 'retour').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("Menu");}, this) //bouton pour aller dans le menu "Menu"
	
	this.button = this.add.sprite(55.8, 200, 'jeuUn').setInteractive().setOrigin(0);
	this.button.on('pointerdown', function(){this.scene.start("MiniJeuUnUniquement");modeEntrainement=1;}, this) //bouton pour lancer le jeu un
	
	this.button = this.add.sprite(55.8, 300, 'jeuDeux').setInteractive().setOrigin(0);
	this.button.on('pointerdown', function(){this.scene.start("MiniJeuDeuxUniquement");modeEntrainement=1;}, this) //bouton pour lancer le jeu deux
	
	this.button = this.add.sprite(55.8, 400, 'jeuTrois').setInteractive().setOrigin(0);
	this.button.on('pointerdown', function(){this.scene.start("MiniJeuTroisUniquement");modeEntrainement=1;}, this) //bouton pour lancer le jeu trois
}
	
update(){
 
}
}