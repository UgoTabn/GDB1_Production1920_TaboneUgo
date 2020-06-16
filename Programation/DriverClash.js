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
let jeu_Record;
let pointDeVie;
let DebutJeuUn;
let voiture;
let score;
let miniJeu_Reussi;
let dialogue;
let style;
let barreDeVie;
let modeEntrainement;
let boulon;
let boulonun;
let nombreHabitRestant;

function touche(route, voiture){
	miniJeu_Mort = 1;
	pointDeVie -=1;
};

function finNiveau(arrivee, voiture){
	score +=1;
	miniJeu_Reussi = 1;
	if(modeEntrainement===1){
	this.scene.start("MiniJeuUnUniquement");
	}
	else if(modeEntrainement===0){
	this.scene.start("PartieNormale");
	}
};
function finNiveauDeux(arrivee, roue){
	score +=1;
	miniJeu_Reussi = 1;
	if(modeEntrainement===1){
	this.scene.start("MiniJeuDeuxUniquement");
	}
	else if(modeEntrainement===0){
	this.scene.start("PartieNormale");
	}
};

function chrono(){
	miniJeu_Mort = 1;
	pointDeVie -=1;
};
function enchainementDeScene(){
	if(modeEntrainement===1){
	if(pointDeVie>0){this.scene.start("MiniJeuUnGame");}
	else if(pointDeVie===0){if(miniJeu_RecordUn<score){miniJeu_RecordUn = score;}this.scene.start("Menu");}
	}
	else if(modeEntrainement===0){
	if(pointDeVie>0){this.scene.start("PartieNormale");}
	else if(pointDeVie===0){if(jeu_Record<score){jeu_Record = score;}this.scene.start("Menu");}
	}
};
function enchainementDeSceneDeux(){
	if(modeEntrainement===1){
	if(pointDeVie>0){this.scene.start("MiniJeuDeuxGame");}
	else if(pointDeVie===0){if(miniJeu_RecordDeux<score){miniJeu_RecordDeux = score;}this.scene.start("Menu");}
	}
	else if(modeEntrainement===0){
	if(pointDeVie>0){this.scene.start("PartieNormale");}
	else if(pointDeVie===0){if(jeu_Record<score){jeu_Record = score;}this.scene.start("Menu");}
	}
};
function enchainementDeSceneTrois(){
	if(modeEntrainement===1){
	if(pointDeVie>0){this.scene.start("MiniJeuTroisGame");}
	else if(pointDeVie===0){if(miniJeu_RecordTrois<score){miniJeu_RecordTrois = score;}this.scene.start("Menu");}
	}
	else if(modeEntrainement===0){
	if(pointDeVie>0){this.scene.start("PartieNormale");}
	else if(pointDeVie===0){if(jeu_Record<score){jeu_Record = score;}this.scene.start("Menu");}
	}

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
function toucheObjetTypeUn(habit, pilote){
	habit.destroy();
	nombreHabitRestant-=1;
	if(nombreHabitRestant===0){
	score +=1;
	miniJeu_Reussi = 1;
	if(modeEntrainement===1){
	this.scene.start("MiniJeuTroisUniquement");
	}
	else if(modeEntrainement===0){
	this.scene.start("PartieNormale");
	}
}
};
function toucheObjetTypeDeux(habit, pilote){
	miniJeu_Mort = 1;
	pointDeVie -=1;
};






this.game = new Phaser.Game(config);

