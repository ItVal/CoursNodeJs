const etudiants = [
    {
        nom : "yvette nas",
        niveau : 1
    },
    {
        nom : "Vanilla Js",
        niveau : 2
    },
];

const cours = ["Georgraphie", "Mathematique", "Français"]
// console.log(etudiants);


// module.exports = etudiants; //export du tableau etudiants afin de le rendre accéssible partout où le fichier est appelé
module.exports = {      //export de deux tableaux
    etudiants, cours
};