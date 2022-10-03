const http = require('http'); //creation d'un serveur

const serveur = http.createServer((requete, reponse) => {
    console.log("serveur crée");
})

serveur.listen(3001,"localhost", () =>{
    console.log("prêt à écouter les requêtes au port 3001");
})