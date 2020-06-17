class EcranTitre extends Phaser.Scene {
  constructor(){
    super("EcranTitre")
  }

	
preload(){
	this.load.image('EcranTitre', 'assets/EcranTitre.png'); //Background de l'ecran titre
}

create(){
this.add.image(0,0, 'EcranTitre').setOrigin(0);
miniJeu_RecordUn=0;
miniJeu_RecordDeux=0;
miniJeu_RecordTrois=0;
jeu_Record=0;
	tuto= 0;

this.time.addEvent({ delay: 1250, callback:function(){this.scene.start("Menu");}, callbackScope: this, loop: false });	

	
	
}
	
update(){

}
}
