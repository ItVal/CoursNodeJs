// const scolarite = require("./scolarite"); //affichera les contenus du fichier scolarite
//  console.log(scolarite);

//  const {cours} = require("./scolarite"); //là on essaie d'optimiser en affichant juste le tableau cours se trouvant dans le finchier soclarite 
//  console.log(cours);

// utilisation des modules (OS) déjà pre-intégrer lors de l'installation de node
const systeme = require("os")  //ça donne plusieurs informations en rapport avec le système d'exploitation
console.log(systeme.userInfo(), systeme.version());