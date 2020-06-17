class Menu extends Phaser.Scene {
  constructor(){
    super("Menu")
  }

	
preload(){
	this.load.image('background', 'assets/background.png'); //Background du menu avec les boutons
	this.load.image('boutonplay', 'assets/boutonplay.png'); //Background du menu avec les boutons
	this.load.image('boutonclan', 'assets/boutonclan.png'); //Background du menu avec les boutons
	this.load.image('option', 'assets/boutonoption.png'); //Background du menu avec les boutons
	this.load.image('record', 'assets/boutonrecord.png'); //Background du menu avec les boutons
}

create(){

	
	
	this.add.image(0,0, 'background').setOrigin(0);
	//reset des valeurs
	pointDeVie = 4;
	miniJeu_Mort = 0;
	miniJeu_Reussi = -1;
	score = 0;
	modeEntrainement = 0;

	//boutons qui servent à se ballader dans les différents menus, chaque menu etant une scene
	this.button = this.add.sprite(187.5, 201.75, 'boutonplay').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("MenuJouer");}, this) //bouton pour aller dans le menu "Jouer"
	1
	this.button = this.add.sprite(187.5, 441.25, 'boutonclan').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("MenuClan");}, this) //bouton pour aller dans le menu "Clan"
	
	this.button = this.add.sprite(55.5, 545.5, 'option').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("MenuOption");}, this) //bouton pour aller dans le menu "Option"

	this.button = this.add.sprite(55.5, 464.3, 'record').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("MenuRecord");}, this) //bouton pour aller dans le menu "Record"

	//this.add.image(0,0, 'Menu').setOrigin(0);
}
	
update(){
 
}
}