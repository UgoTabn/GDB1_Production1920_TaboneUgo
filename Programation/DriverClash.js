var config = {
	type: Phaser.AUTO,
	width: 375,
	height: 667,
physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },

scene: [EcranTitre,Menu,MenuChoixMiniJeu,MenuClan,MenuJouer,MenuOption,MenuRecord,MiniJeuUnUniquement,MiniJeuDeuxUniquement,MiniJeuTroisUniquement,PartieNormale,MiniJeuDeuxGame,MiniJeuUnGame,MiniJeuTroisGame]

};

let miniJeu_Mort;
let miniJeu_RecordUn;
let miniJeu_RecordDeux;
let miniJeu_RecordTrois;
let pointDeVie;
let DebutJeuUn;
let voiture;
let score;
let miniJeu_Reussi;
let dialogue;
let style;
let barreDeVie;
let modeEntrainement;

function touche(route, voiture){
	miniJeu_Mort = 1;
	pointDeVie -=1;
};

function finNiveau(arrivee, voiture){
	score +=1;
	miniJeu_Reussi = 1;
	this.scene.start("MiniJeuUnUniquement");
};

function chrono(){
	miniJeu_Mort = 1;
	pointDeVie -=1;
};
function enchainementDeScene(){
	if(pointDeVie>0){this.scene.start("MiniJeuUnGame");}
	else if(pointDeVie===0){this.scene.start("Menu");miniJeu_RecordUn = score;}
};
function enchainementDeSceneDeux(){
	if(pointDeVie>0){this.scene.start("MiniJeuDeuxGame");}
	else if(pointDeVie===0){this.scene.start("Menu");miniJeu_RecordUn = score;}
};
function majHP(){
			if(pointDeVie===3){
	   barreDeVie.anims.play('unpv',true);
	   }
	 		if(pointDeVie===2){
	   barreDeVie.anims.play('depv',true);
	   }
	 		if(pointDeVie===1){
	   barreDeVie.anims.play('trpv',true);
	   }
};








this.game = new Phaser.Game(config);

