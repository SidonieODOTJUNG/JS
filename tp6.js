"use strict";

// tp : concevoir une  calculatrice étape par étape


// Exercice 1 :
// Écrivez un code JS qui permette à l’utilisateur d’entrer 2 nombres, et affichez dans la console les
// résultats suivants :
// → addition des 2 nombres
// → soustraction des 2 nombres
// → multiplication des 2 nombres
// → division des 2 nombres
// NB : Pour demander une saisie utilisateur, on utilisera dans un premier temps la fonction prompt()

// var nb1 = parseInt(window.prompt("Entrez un nombre entier :" ));
// var nb2 = parseInt(window.prompt("Entrez un deuxième nombre entier :" ));

// console.log (nb1+nb2);
// console.log (nb1-nb2);
// console.log (nb1*nb2);
// if (nb2 !== 0) {
//     console.log (nb1/nb2);
// } else {
//     console.log("Erreur, vous ne pouvez pas diviser par 0");
// }

// Exercice 2 :
// Améliorez votre code pour permettre la saisie de l’opérateur par l’utilisateur, et affichez le résultat
// de l’opération choisie dans la console.

// var nb1 = parseInt(window.prompt("Entrez un nombre entier :" ));
// var nb2 = parseInt(window.prompt("Entrez un deuxième nombre entier :" ));
// var op = window.prompt("Entrez l'opérateur désiré :" );

// switch (op) {
//     case "+": console.log (nb1+nb2);
//         break;
//     case "-": console.log (nb1-nb2);
//     break;
//     case "*": console.log (nb1*nb2);
//     break;
//     case "/": 
//         if (nb2 !== 0) {
//             console.log (nb1/nb2);
//         } else {
//             console.log("Erreur, vous ne pouvez pas diviser par 0");
//         }
//     break;
//     default : console.log("Erreur, vous pouvez choisir entre les signes +, -, * et /");
// }


// Exercice 3 :
// Transformez votre procédure afin que suite à la saisie des informations par l’utilisateur, soit appelée
// une fonction de calcul, prenant la saisie de l’utilisateur en paramètres (la sortie console doit être
// inchangée)

// var nb1 = parseInt(window.prompt("Entrez un nombre entier :" ));
// var nb2 = parseInt(window.prompt("Entrez un deuxième nombre entier :" ));
// var op = window.prompt("Entrez l'opérateur désiré :" );


// var calcul = function (nbA, nbB, operateur) {
//     switch(operateur) {
//         case "+": return nbA+nbB;
//         break;
//         case "-": return nbA-nbB;
//         break;
//         case "*": return nbA*nbB;
//         break;
//         case "/": 
//             if (nbB !== 0) {
//                 return nbA/nbB;
//             } else {
//                 return "Erreur, vous ne pouvez pas diviser par 0";
//             }
//         break;
//         default : return "Erreur, vous pouvez choisir entre les signes +, -, * et /";
//     }
// }
 
// console.log(calcul(nb1,nb2,op));


// Exercice 4 :
// Écrivez un formulaire de contact HTML, permettant la saisie de 2 nombres, ainsi que le choix de
// l’opération à effectuer dans une liste déroulante.

// attention de ne pas enlever les commentaires car code HTML dans fichier JS

/*     
    <form method="POST" action="traitement.php">
        <input type="number" name="nb1" id="nb1">
        <select name="operateur" id="operateur">
            <option value="" selected disabled >Choisir un opérateur</option>    
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <input type="number" name="nb2" id="nb2">
        <input type="submit" value="Calculer"/>
    </form>
*/

// Exercice 5 :
// Ajoutez un événement qui, lors de l’envoi du formulaire, effectue l’opération demandée et modifie
// un élément du DOM pour afficher le résultat sur la page.
// NB : Pour bloquer le comportement par défaut de l’événement, on utilisera ici la méthode
// preventDefault() de celui-ci


// var envoie = document.getElementById("envoyer");

// var calcul = function (nbA, nbB, operateur) {
//     switch(operateur) {
//         case "+": return nbA+nbB;
//         break;
//         case "-": return nbA-nbB;
//         break;
//         case "*": return nbA*nbB;
//         break;
//         case "/": 
//             if (nbB !== 0) {
//                 return nbA/nbB;
//             } else {
//                 return "Erreur, vous ne pouvez pas diviser par 0";
//             }
//         break;
//         default : return "Erreur, vous pouvez choisir entre les signes +, -, * et /";
//     }
// }

// envoie.addEventListener("click", function(e) {
//     e.preventDefault();
//     var nb1 = document.getElementById("nb1");
//     var nb2 = document.getElementById("nb2");
//     var op = document.getElementById("operateur");
//     var resultat = document.getElementById("result");
//     resultat.innerHTML = "Le résultat est : " + calcul(parseInt(nb1.value),parseInt(nb2.value),op.value);
// });


// // // Exercice 6 : Ajoutez un menu/fonctionnalité permettant à l’utilisateur de choisir entre 2 styles
// // // personnalisés pour la calculatrice (faites simple pour les styles genre light theme/ dark theme...!)

var mode = document.getElementById("button");
var op = document.getElementById("operateur");

console.log(getComputedStyle(nb1));
var on = false;

mode.addEventListener("click",function() {
    on = !on;
    var calculatrice = document.getElementById("calculatrice");
    var nb1 = document.getElementById("nb1");
    var nb2 = document.getElementById("nb2");
    var resultat = document.getElementById("result");
    if (on) {  
        mode.innerHTML = "Mode Sombre";
        calculatrice.style.backgroundColor = "rgb(160, 36, 197)";
        calculatrice.style.color = "rgb(228, 177, 241)";
        calculatrice.style.border = "2px solid rgb(160, 36, 197)";
        mode.style.backgroundColor = "rgb(228, 177, 241)";
        mode.style.color = "rgb(160, 36, 197)";
        mode.style.fontWeight = "normal";
        nb1.style.backgroundColor = "rgb(228, 177, 241)";
        nb1.style.color = "rgb(160, 36, 197)";
        nb1.style.fontWeight = "normal";
        nb2.style.backgroundColor = "rgb(228, 177, 241)";
        nb2.style.color = "rgb(160, 36, 197)";
        nb2.style.fontWeight = "normal";
        op.style.backgroundColor = "rgb(228, 177, 241)";
        op.style.color = "rgb(160, 36, 197)";
        op.style.fontWeight = "normal";
        envoie.style.backgroundColor = "rgb(160, 36, 197)";
        envoie.style.color = "rgb(228, 177, 241)";
        envoie.style.fontWeight = "normal";
        resultat.style.backgroundColor = "rgb(228, 177, 241)";
        resultat.style.color = "rgb(160, 36, 197)";
        resultat.style.fontWeight = "normal";


    } else {
        mode.innerHTML = "Mode Clair";
        calculatrice.style.backgroundColor = "rgb(228, 177, 241)";
        calculatrice.style.color = "rgb(160, 36, 197)";
        calculatrice.style.border = "2px solid rgb(228, 177, 241)";
        mode.style.backgroundColor = "rgb(160, 36, 197)" ;
        mode.style.color = "rgb(228, 177, 241)";
        mode.style.fontWeight = "bold";
        nb1.style.backgroundColor = "rgb(160, 36, 197)";
        nb1.style.color = "rgb(228, 177, 241)";
        nb1.style.fontWeight = "bold";
        nb2.style.backgroundColor = "rgb(160, 36, 197)";
        nb2.style.color = "rgb(228, 177, 241)";
        nb2.style.fontWeight = "bold";
        op.style.backgroundColor = "rgb(160, 36, 197)";
        op.style.color = "rgb(228, 177, 241)";
        op.style.fontWeight = "bolder";
        envoie.style.backgroundColor = "rgb(228, 177, 241)";
        envoie.style.color = "rgb(160, 36, 197)";
        envoie.style.fontWeight = "bold";
        resultat.style.backgroundColor = "rgb(160, 36, 197)";
        resultat.style.color = "rgb(228, 177, 241)";
        resultat.style.fontWeight = "bold";
    }
})

