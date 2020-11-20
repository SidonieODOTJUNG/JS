// "use strict";

// // var bouton = document.getElementById("button");
// // console.log(bouton);

// // bouton.addEventListener("click", function () {
// //     bouton.style.backgroundColor = "red";
// //     console.log("Vous avez cliqué sur moi !");
// // });


// // exo 1 / exo 2 
// var button = document.getElementById("afficherTexte");  //DOM
// var paragraphe = document.getElementById("texteAafficher");  //DOM
// var valider = document.getElementById("validation")  //DOM

// button.addEventListener("click", function() {
//     valider.style.display = "flex";
//     valider.addEventListener("click", function() {
//         texteAafficher.style.display = "flex";
//     });
// });


// // exo 3

// var bouton = document.getElementById("button");
// var red = false;


// bouton.addEventListener("click", function () {
//     // l'op non va permettre de récup l'inverse d'un booleen
//     red = !red;  // permet de récuperer le booleen qui permettra de penser click / non-click
//     if (red) {  //tu peux ensuite faire ta condition
//         bouton.style.backgroundColor = "red";
//     } else {
//         bouton.style = "none";
//     }
// });


// // exo 4

// var text = document.getElementById("texte");

// text.addEventListener("keyup", function(e) {
//     console.log(text.value);
//     // console.log(e.target.value); qui permet la même chose mais en partant de l'élément input
// });