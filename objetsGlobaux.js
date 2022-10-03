// console.log(global);


// cette fonction affiche salut monsieur valentin en console après 2000 mili-secondes
setTimeout(() => {
    console.log("salut monsieur valentin !");
    clearInterval(temps) ;
}, 2000);

// cette fonction affiche le Exécution en cours plusieurs fois après chaque 500 mili-secondes
var temps = setInterval(() =>{
    console.log("Exécution en cours ...");
}, 500);
