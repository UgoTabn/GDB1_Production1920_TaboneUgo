class MiniJeuUnUniquement extends Phaser.Scene {
  constructor(){
    super("MiniJeuUnUniquement")
  }

	
preload(){
	this.load.image('victoire', 'assets/victoire.png');
	this.load.image('defaite', 'assets/defaite.png');
	this.load.spritesheet('barreDeVie','assets/barreDeVie.png',{ frameWidth: 500, frameHeight: 500 });
	this.load.image('vide', 'assets/vide.png');
	this.load.image('jauge', 'assets/jaugescore.png');
}

create(){
	this.add.image(0,0, 'vide').setOrigin(0);
	barreDeVie = this.physics.add.sprite(195,550, 'barreDeVie');
	this.anims.create({key : '0pv',frames: this.anims.generateFrameNumbers('barreDeVie', {start: 4, end: 4}),frameRate: 0,repeat: -1});
	this.anims.create({key : '1pv',frames: this.anims.generateFrameNumbers('barreDeVie', {start: 3, end: 3}),frameRate: 0,repeat: -1});
	this.anims.create({key : '2pv',frames: this.anims.generateFrameNumbers('barreDeVie', {start: 2, end: 2}),frameRate: 0,repeat: -1});
	this.anims.create({key : '3pv',frames: this.anims.generateFrameNumbers('barreDeVie', {start: 1, end: 1}),frameRate: 0,repeat: -1});
	this.anims.create({key : '4pv',frames: this.anims.generateFrameNumbers('barreDeVie', {start: 0, end: 0}),frameRate: 0,repeat: -1});
	
	
	
	style = { font: "bold 35px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
	
	if(miniJeu_Reussi===1){
		this.add.image(200,100, 'jauge').setScale(0.5);
		dialogue = this.add.text(190, 100, score, style).setOrigin(0);
		this.add.image(180,333.5, 'victoire').setScale(0.3);
	}
	if(miniJeu_Mort===1){
		this.add.image(200,100, 'jauge').setScale(0.5);
		dialogue = this.add.text(190, 100, score, style).setOrigin(0);
		this.add.image(185,333.5, 'defaite').setScale(0.3);
	}
	
	
	miniJeu_Mort = 0;
	miniJeu_Reussi = 0;
	majHP();

	this.time.addEvent({ delay: 1000, callback:enchainementDeScene, callbackScope: this, loop: false });	



		

}

	
update(){


}
}