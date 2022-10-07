const http = require("http"); //creation d'un serveur
const fs = require("fs"); //variable du fichier

const serveur = http.createServer((requete, reponse) => {
  console.log("serveur is ready, requête effectuée avec succès ");
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

  //     //ici maintenant, on souhaite renvoyer des reponses sous forme de html
  //     reponse.setHeader('content-type', 'text/html') ; //definition de l'entête qui va renvoyer une reponse au format html

  //     //on peut aussi mettre à jour le propriété d'une balise existante

  //     reponse.write("<head><meta charset='utf8'><head>");

  //     //definition de la reponse selon la demande du client (utulisateur)
  //     if (requete.url === "/accueil") {
  //         reponse.write("<h1>Accueil</h1> <p>Bienvenu cher dev<p>"); //affiche du texte de la balise p (bienvenu cher dev) sur le navigateur
  //     }else if(requete.url === "/profil"){
  //         reponse.write("<h1>Profil</h1><p>vous êtes un developpeur back end<p>"); //affiche du texte de la balise p vous êtes un dev back end
  //     }else{
  //         reponse.write("<h1>404, Page introuvable</h1><p>url invalid<p>"); //affiche url invalid
  //     }

  //     //finalisation de la reponse à  envoyer
  //     reponse.end();
  // })

  // ================================================================================================

  // à la place de créer de balise HTML ici dans node, nous allons créer nos page html à part et de l'afficher directement
  //definition  de la variable 'variable fs créer ci-haut' de fichier que le serveur va renvoyer comme reponse

  reponse.setHeader("content-type", "text/html"); //definition de l'entête qui va renvoyer une reponse du type fichier HTML
  let fichier = ""; //c'est sur cette variable qu'on va stocker les url de chaque page html à afficher selon le demande de l'utilisateur
  if (requete.url === "/accueil") {
    //si la requete est égale à
    fichier = "./IHM/Accueil.html";
  } else if (requete.url === "/profil") {
    fichier = "./IHM/Profil.html";
  } else {
    fichier = "./IHM/erreur.html";
  }
  //Lecture du fichier HTML et envoie de la réponse côté client
  fs.readFile(fichier, (erreur, data) => {
    if (erreur) {
      console.log(erreur); 
      reponse.end();
    } else {
      reponse.write(data);
      reponse.end();
    }
  });
});
serveur.listen(3001, "localhost", () => {
  //nous demandons au serveur d'écouter sur le port 3001, au domaine localhost
  console.log("prêt à écouter les requêtes au port 3001");
});
