class Menu extends Phaser.Scene {
  constructor(){
    super("Menu")
  }

	
preload(){
	//this.load.image('logo', 'assets/logo.png'); //Background du menu avec les boutons
}

create(){
	//reset des valeurs
	pointDeVie = 4;
	miniJeu_Mort = 0;
	miniJeu_Reussi = -1;
	score = 0;
	modeEntrainement = 0;

	//boutons qui servent à se ballader dans les différents menus, chaque menu etant une scene
	this.button = this.add.sprite(10, 10, 'jouer').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("MenuJouer");}, this) //bouton pour aller dans le menu "Jouer"
	
	this.button = this.add.sprite(50, 10, 'clan').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("MenuClan");}, this) //bouton pour aller dans le menu "Clan"
	
	this.button = this.add.sprite(100, 10, 'option').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("MenuOption");}, this) //bouton pour aller dans le menu "Option"

	this.button = this.add.sprite(150, 10, 'record').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("MenuRecord");}, this) //bouton pour aller dans le menu "Record"
}
	
update(){
 
}
}