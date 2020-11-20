// "use strict"

// // compréhention des DOM

// // pour pouvoir manipulerles objets,il faut les récupérer.

// //on récupère les éléments du DOM avec des méthodes : 

//     //exemples avec le forumulaire calculatrice du cours


// var formulaire = document.getElementById("formulaire") 

// // document est l'objet qui permet d'accéder aux objets html
// // getElementById("formulaire") permet de récupérer le formulaire en passant par l'id html

// console.log(formulaire)   // juste là pour vérif qu'on trouve bien l'élément créer

// // en déroulant dans la console, on a accès à ses propriétés et methodes ( dans prototype) qui seront destinées à contenir des fonctions

    

//     // récupérer un tableau d'élement avec getElementsByClassName

// var inputs = document.getElementsByClassName("nb_input") 
// console.log(inputs)

// // soit on récupère l'objet avec l'id, soit avec un propriété -> ici, nb1, nb2

// console.log(inputs[0])

// // fonctionne comme un tableau


//     // recup un élément avec la balise avec getElementByTagName
//     // recup un élément par l'attribut name (nécessaire pour PHP) avec getElementByName


// // il est aussi possible de récupérer les éléments par rapport aux selecteurs CSS (CF cours pdf 03 JS)

// //modif des regles des propriétés css
// // exemple de la propriété style qui permet d'accéder à l'attribut style des éléments (très utiles avec JS car la modif à la priorité sur toutes les autres)

// inputs[0].style.backgroundColor = "blue";


// afficher les propriétés css : getComputedStyle

// console.log(getComputedStyle(formulaire)); // pour obtenir les propriétés

// console.log(getComputedStyle(formulaire).borderBlockStartColor); // pour accéder aux propiétées (ce sont les propriétées CSS mais en camelcase)