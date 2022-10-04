const http = require('http'); //creation d'un serveur

const serveur = http.createServer((requete, reponse) => {
    // // recuperons maintenant les reponses au format texte brut et affichons les sur le navigateur suivant les demandes des utilisateurs
    // reponse.setHeader('content-type', 'text/plain') ; //definition de l'entête qui va renvoyer une reponse au format texte brut

    // //definition de la reponse selon la demande du client (utulisateur)
    // if (requete.url === "/accueil") {
    //     reponse.write("bienvenu cher dev"); //affiche du texte bienvenu cher dev sur le navigateur
    // }else if(requete.url === "/profil"){
    //     reponse.write("vous êtes un developpeur back end"); //affiche vous êtes un dev back end
    // }else{
    //     reponse.write("url invalid"); //affiche url invalid
    // }


    //on peut aussi renvoyer des reponses sous forme de html
    reponse.setHeader('content-type', 'text/html') ; //definition de l'entête qui va renvoyer une reponse au format html

    //on peut aussi mettre à jour le propriété d'une balise existante

    reponse.write("<head><meta charset='utf8'><head>"); 

    //definition de la reponse selon la demande du client (utulisateur)
    if (requete.url === "/accueil") {
        reponse.write("<h1>Accueil</h1> <p>Bienvenu cher dev<p>"); //affiche du texte de la balise p (bienvenu cher dev) sur le navigateur
    }else if(requete.url === "/profil"){
        reponse.write("<h1>Profil</h1><p>vous êtes un developpeur back end<p>"); //affiche du texte de la balise p vous êtes un dev back end
    }else{
        reponse.write("<h1>404, Page introuvable</h1><p>url invalid<p>"); //affiche url invalid
    }



    //finalisation de la reponse à  envoyer
    reponse.end();
})

serveur.listen(3001,"localhost", () =>{  //nous demandons au serveur d'écouter sur le port 3001, au domaine localhost
    console.log("prêt à écouter les requêtes au port 3001");
})