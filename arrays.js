"use strict"

// var livres = ["les Misérables", "le Petit Prince", "voyage au bout de la nuit", "le rouge et le noir", "l'écume des jours", "fables", "le seigneur des anneaux", "candide", "voyage au centre de la terre"];

// // creer un input                   OK
// // récupérer l'input                OK
// // ajouter l'input au tableau       OK
// // afficher le tableau en console   OK
// // affichier liste livres triés par ordre alphabetique  OK
// // afficher liste en html           OK



// var livre = document.getElementById("liste");

// var afficherListe = function () {
//     var html = "";
//     var len = livres.length;
//     for (var i=0; i<len; i++) {
//         html = html + "<li>" + livres[i] + "</li>";
//     };
//     document.getElementById("afficherLivres").innerHTML = html;
// };


// livre.addEventListener("blur", function() {
//     livres.push(livre.value);
//     var afficher = document.getElementById("affichageListe");
//     livres = livres.sort();
//     afficher.innerHTML = "La liste de livres : ";
//     afficherListe();
// });



// // Exercice 4 : (revoir charAt() dans doc, ainsi que slice() )
// // Une chaîne de caractères, est considérée en JS, comme un tableau de caractères. Chaque caractère a donc, un indice, qui exprime sa position dans la chaîne.
// // 4.0. Mettre toutes les premières lettres des titres en minuscules (pour ne pas s'embêter avec la saisie)
// // 4.1. A l'aide de la documentation, afficher l'ensemble des premiers caractères du tableau, en Majuscules.
// // 4.2. Afficher cette fois, pour l'ensemble des éléments du tableau, les chaînes de caractères à partir de leur deuxième caractère
// // 4.3 A partir des observations précédentes, modifier chacun des éléments, en reconstituant les chaînes de caractères avec leur première lettre en majuscule.


// for (var i = 0; i<livres.length ; i++) {
//     var titre = livres [i];
//     var majuscule = titre.charAt(0).toUpperCase();
//     console.log(majuscule);
//     // console.log(titre.substring(1));   // tu ne peux pas parcourir ta chaine par la fin avec les arguments négatifs
//     console.log(titre.slice(1));
//     // console.log(majuscule+titre.substring(1));  // tu peux mettre un argument négatif pour parcourir ta chaine par la fin
//     console.log(majuscule + titre.slice(1));
// };


// // 4.4 construire un tableau d'objets




// // var bibliotheque = {
// //     titre : ["Les misérables", "Le Petit Prince", "Voyage au bout de la nuit", "Le rouge et le noir", "L'écume des jours", "Fables", "Le seigneur des anneaux", "Candide", "Voyage au centre de la terre"],
// //     auteur : ["Victor Hugo", "Antoine de Saint-Exupéry", "Céline", "Stendhal", "Boris Vian", "La Fontaine", "J.R.R. Tolkien", "Voltaire", "Jules Verne" ],
// //     genre : ["Roman d'aventure", "Conte philosophie et poétique", "Autobiographie d'apprentissage", "Roman de formation et d'analyse psychologique", "Roman", "Fables allégoriques", "Roman fantastique ", "Conte philosophique", "Roman de science-fiction"]
// // };


// // console.log(bibliotheque[0].auteur); // attention c'est bien le livre que l'on manipule avec l'indice, pas les propriétés
// // console.log(bibliotheque[2].titre); // pour accéder au deuxième livre
// // bibliotheque.titre =  "aaaaa"; // pour changer la valeur
// // bibliotheque.annee = 2017; // pour ajouté une propriété
// // var bibliotheque = new Object(); // pareil que var bibliotheque = {}; 
// // bibliotheque.titre = "Les misérables";  // ici on crée la propriété
// // bibliotheque.auteur = "Victor Hugo"; // ici on créer une autre

// constructeur d'objet avec Bibliotheque en prototype

var Bibliotheque = function(Titre, Auteur, Genre) {
    this.titre = Titre;    // this = ceci
    this.auteur = Auteur;
    this.genre = Genre;
};

var bibliotheque1 = new Bibliotheque ("Les Misérables", "Victor Hugo", "Roman d'aventure"); // j'apelle la fonction constructeur d'objet
var bibliotheque2 = new Bibliotheque ("Le petit Prince", "Antoine de Saint-Exupéry", "Conte philosophie et poétique");
var bibliotheque3 = new Bibliotheque ("Voyage au bout de la nuit", "Céline", "Autobiographie d'apprentissage");
var bibliotheque4 = new Bibliotheque ("Le rouge et le noir", "Stendhal", "Roman de formation et d'analyse psychologique");
var bibliotheque5 = new Bibliotheque ("L'écume des jours", "Boris Vian", "Roman");
var bibliotheque6 = new Bibliotheque ("Fables", "La Fontaine", "Fables allégoriques");
var bibliotheque7 = new Bibliotheque ("Le seigneur des anneaux", "JRR Tolkien", "Roman fantastique");
var bibliotheque8 = new Bibliotheque ("Candide", "Voltaire", "Conte philosophique");
var bibliotheque9 = new Bibliotheque ("Voyage au centre de la terre", "Jules Verne", "Roman de science-fiction");
 
var bibliotheque = [bibliotheque1, bibliotheque2, bibliotheque3, bibliotheque4, bibliotheque5, bibliotheque6, bibliotheque7, bibliotheque8, bibliotheque9];

var newBib = JSON.stringify(bibliotheque, null, "\t");  //conversion en JSON
console.log(newBib);                                   // affichage en console

// // // reprendre les exo précédents en manipulant les objets
 

var ajoutLivre = document.getElementById("ajoutLivre");

// construire la fonction MAJ qui permettra de mettre à jour l'affiche des inputs
for (var i = 0; i<bibliotheque.length ; i++) {
    bibliotheque[i].titre = MAJ(bibliotheque[i].titre) ;
};

function MAJ(str) {
    str = str.charAt(0).toUpperCase() + str.slice(1) ;
    return str;
};

var afficherListe = function () {
    var html = "";
    var len = bibliotheque.length;
    for (var i=0; i<len; i++) {
        html = html + "<li>" + "Titre : " + bibliotheque[i].titre + "<br>" + "Auteur : " + bibliotheque[i].auteur + "<br>" + "Genre : " + bibliotheque[i].genre + "</li>" ;
    };
    document.getElementById("afficherLivres").innerHTML = html;
};


ajoutLivre.addEventListener("submit", function(e) {
    e.preventDefault();
    var title = document.getElementById("titre");
    var author = document.getElementById("auteur");
    var gender = document.getElementById("genre");
    var bibliotheque10 = new Bibliotheque (MAJ(title.value), MAJ(author.value), MAJ(gender.value))  // la fonction de MAJ des inputs est reprise ici
    bibliotheque.push(bibliotheque10);
    bibliotheque.sort(function tri(a,b) {
        if (a.titre < b.titre) {
            return -1; 
        } else if (a.titre > b.titre) {
            return 1;
        } else {
            return 0;
        } 
    });
    afficherListe();

});


