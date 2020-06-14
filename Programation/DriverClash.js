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
let miniJeu_ReussiOuNon;

function touche(route, voiture){
	miniJeu_Mort = 1;
};

function functionTimer(){
	miniJeu_Mort = 1;
};


this.game = new Phaser.Game(config);

