class MenuRecord extends Phaser.Scene {
  constructor(){
    super("MenuRecord")
  }

	
preload(){
	this.load.image('background3', 'assets/background3.png'); //Background du menu avec les boutons
	this.load.image('retour', 'assets/boutonretour.png'); //Background du menu avec les boutons
}

create(){
	this.add.image(0,0, 'background3').setOrigin(0);
	this.button = this.add.sprite(55.8, 46.9, 'retour').setInteractive();
	this.button.on('pointerdown', function(){this.scene.start("Menu");}, this) //bouton pour aller dans le menu "Menu"
	
	//Affichage des records avec les variables
	style = { font: "bold 23px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
	style2 = { font: "bold 20px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
	let dialogueRecordUn = this.add.text(103, 280,'Course Folle : '+ miniJeu_RecordUn, style).setOrigin(0);
	let dialogueRecordDeux = this.add.text(61, 397,'Changement de roue : '+ miniJeu_RecordDeux, style2).setOrigin(0);
	let dialogueRecordTrois = this.add.text(61, 515,'Habillage technique : '+ miniJeu_RecordTrois, style2).setOrigin(0);
	let dialogueRecord = this.add.text(103, 162,'Mode Normal : '+ jeu_Record, style).setOrigin(0);
}
	
update(){
 
}
}