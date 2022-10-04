const fs = require('fs'); //declaration du module fs

//Création dossier
// if(fs.existsSync('./mesFichiers')){   //vérification de l'existance du dossieur
//     console.log ('Dossier existe déjà')
// }else{
//     fs.mkdir('./mesFichiers', (err) =>{ //si le dossieur n'exite pas encore, ici on le crée
//         if(err){
//             console.log(err);
//         }else{
//             console.log('Dossier créé avec succes')
//         }
//     });
// }

//Suppression d'un dossier
if(fs.existsSync('./mesFichiers')){   //là on vérifie si le dossier existe, on le supprime
    fs.rmdir('./mesFichiers', (err) =>{
        if(err){
            console.log(err);
        }else{
            console.log('Dossier supprimer avec succes')
        }
    });
}else{
    fs.mkdir('./mesFichiers', (err) =>{ //si le dossieur n'exite pas encore, ici on le crée
        if(err){
            console.log(err);
        }else{
            console.log('Dossier créé avec succes')
        }
    });
}

