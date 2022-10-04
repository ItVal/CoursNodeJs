const fs = require('fs'); //declaration du module fs

//Gestion dossiers
if(fs.existsSync('./mesFichiers')){   //vérification de l'existance du dossieur
    console.log ('Dossier existe déjà')
}else{
    fs.mkdir('./mesFichiers', (err) =>{ //si le dossieur n'exite pas encore, ici on le crée
        if(err){
            console.log(err);
        }else{
            console.log('Dossier créé avec succes')
        }
    });
}

