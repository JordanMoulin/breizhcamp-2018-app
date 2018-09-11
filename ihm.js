var service = require('./service');

exports.start = function() {
    var readline = require('readline');
    var menu = 0;
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

        console.log('** Application BreizhCamp 2018 **');
        console.log('*************************');
        console.log('1. Rafraichir les données');
        console.log('2. Lister les sessions');
        console.log('99. Quitter');
        rl.question('Quel service voulez-vous ? : ', function(saisie) {
            switch(saisie){
                case '1' : service.init(function(nb) {
                    console.log('... Données mises à jour')});
                    break;
                case '2' : service.listerSessions(function(sessions) {
                            sessions.forEach(function(element){
                                console.log(element.name,"=>",element.speakers)
                            }) 
                        });
                    break;
                case '3' : 
                    break;
                default : console.log('YOU FAIL !')
                    break;
            }
            rl.close();// attention, une fois l'interface fermée, la saisie n'est plus possible
        });
};