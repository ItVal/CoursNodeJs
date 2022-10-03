const http = require('http'); //creation d'un serveur

const serveur = http.createServer((requete, reponse) => {
    // recuperons maintenant les reponses et affichons les sur le navigateur suivant les demandes des utilisateurs
    reponse.setHeader('content-type', 'text/plain') ; //definition de l'entête de la reponse

    //definition de la reponse selon la demande du client (utulisateur)
    if (requete.url === "/accueil") {
        reponse.write("bienvenu cher dev"); //affiche du texte bienvenu cher dev sur le navigateur
    }else if(requete.url === "/profil"){
        reponse.write("vous êtes un developpeur back end"); //affiche vous êtes un dev back end
    }else{
        reponse.write("url invalid"); //affiche url invalid
    }

    //finalisation de la reponse à  envoyer
    reponse.end();
})

serveur.listen(3001,"localhost", () =>{  //nous demandons au serveur d'écouter sur le port 3001, au domaine localhost
    console.log("prêt à écouter les requêtes au port 3001");
})