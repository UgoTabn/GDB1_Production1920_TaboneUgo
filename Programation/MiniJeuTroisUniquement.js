class MiniJeuTroisUniquement extends Phaser.Scene {
  constructor(){
    super("MiniJeuTroisUniquement")
  }

	
preload(){
	this.load.image('victoire', 'assets/map.png');
	this.load.image('defaite', 'assets/map.png');
	this.load.spritesheet('barreDeVie','assets/barreDeVie.png',{ frameWidth: 500, frameHeight: 250 });
}

create(){
	barreDeVie = this.physics.add.sprite(300,300, 'barreDeVie');
	this.anims.create({key : 'trpv',frames: this.anims.generateFrameNumbers('barreDeVie', {start: 0, end: 1}),frameRate: 20,repeat: -1});
	this.anims.create({key : 'depv',frames: this.anims.generateFrameNumbers('barreDeVie', {start: 1, end: 2}),frameRate: 20,repeat: -1});
	this.anims.create({key : 'unpv',frames: this.anims.generateFrameNumbers('barreDeVie', {start: 2, end: 3}),frameRate: 20,repeat: -1});
	
	
	
	style = { font: "bold 17px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
	
		if(miniJeu_Reussi===1){
		dialogue = this.add.text(200, 200, score, style).setOrigin(0);
		this.add.image(0,0, 'victoire').setOrigin(0);
	}
	if(miniJeu_Mort===1){
		dialogue = this.add.text(200, 200, score, style).setOrigin(0);
		this.add.image(0,0, 'defaite').setOrigin(0);
	}

	miniJeu_Mort = 0;
	miniJeu_Reussi = 0;
	majHP();
	this.time.addEvent({ delay: 1250, callback:enchainementDeSceneTrois, callbackScope: this, loop: false });	

}
	
update(){
 
}
}