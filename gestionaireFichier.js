const fs = require('fs'); //declaration du module fs

//Création et suppression du dossier

// if(fs.existsSync('./mesFichiers')){   //là on vérifie si le dossier existe, on le supprime
//     fs.rmdir('./mesFichiers', (err) =>{
//         if(err){
//             console.log(err);
//         }else{
//             console.log('Dossier supprimer avec succes')
//         }
//     });
// }else{
//     fs.mkdir('./mesFichiers', (err) =>{ //si le dossieur n'exite pas encore, ici on le crée
//         if(err){
//             console.log(err);
//         }else{
//             console.log('Dossier créé avec succes')
//         }
//     });
// }

//Création d'un fichier et modification de ses contenus
// fs.writeFile('./mesFichiers/fichier1.txt', 'Je programme en Node JS', () =>{
//     console.log('fichier bien créer');
// })

//Lecture d'un fichier
// fs.readFile('./mesFichiers/fichier1.txt', (err, data) =>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }

// })

//Suppression d'un vichier
if (fs.existsSync('./mesFichiers/fichier1.txt')){ //vérification si le fichier existe
   fs.unlink('./mesFichiers/fichier1.txt', (err) =>{ //si oui, on supprime et on affiche un message de suppressioin
    if (err){
        console.log('erreur')
    }else{
        console.log('Suppression reussi')
    }
   })

}else{       //si le fichier n'existe pas
    console.log('impossible de supprimer un fichier qui n\'existe pas !');
};
