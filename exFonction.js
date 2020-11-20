// // fonction sans retour
// var prenom = window.prompt("entrez votre prénom : ")

// function direBonjour(nom) {   // ici le parametre nom 
//     console.log("Bonjour "+ nom);  // ici l'instruction
// }

// direBonjour(prenom); // ici l'argument sera interprété par la fonction comme le parametre



// fonction avec retour
// var nb1 = parseInt(window.prompt("Entrez un nombre entier :" ));
// var nb2 = parseInt(window.prompt("Entrez un deuxième nombre entier :" ));
// var op = window.prompt("Entrez l'opérateur désiré :" );


// function calcul(nbA, nbB) {
//     switch(op) {
//         case "+": return nbA+nbB;
//             break;
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

// var result = calcul(nb1,nb2); // si tu ne stock pas la fonction dans une variable ici... c'est dead pou toi! car la fonction ne stock pas les données
// console.log(result);

// fonction déclarée dans une variable

// var nb1 = parseInt(window.prompt("Entrez un nombre entier :" ));
// var nb2 = parseInt(window.prompt("Entrez un deuxième nombre entier :" ));
// var op = window.prompt("Entrez l'opérateur désiré :" );


// var calcul = function (nbA, nbB) {
//     switch(op) {
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
 
// console.log(calcul(nb1,nb2));



// exo algo compémentaire n2 et n3 tva, calcul du volume d'une spère

        // exo 2 
                // VARIABLES
                    
                //     prixHT EST_DU_TYPE NOMBRE
                //     tva EST_DU_TYPE NOMBRE
                //     prixTTC EST_DU_TYPE NOMBRE
                    
                // DEBUT_ALGORITHME
                    
                //     tva PREND_LA_VALEUR 0.2
                //     // ou LIRE tva (pour un autre taux)
                //     LIRE prixHT
                        
                //     prixTTC PREND_LA_VALEUR prixHT * (tva + 1)
                //     // ou : prixTTC PREND_LA_VALEUR prixHT + prixHT * tva
                    
                //     AFFICHER* "Prix TTC : " + prixTTC
                    
                // FIN_ALGORITHME


// var prixHT= parseInt(window.prompt("Quel prix HT ?"));

// var calcul = function (TVA, HT, TTC) {
//     return TTC = HT*(TVA+1);
// }

// console.log("prix TTC : " + calcul(0.2, prixHT));

        // // exo 3
        //         VARIABLES
                    
        //             diametre EST_DU_TYPE NOMBRE
        //             pi EST_DU_TYPE NOMBRE
        //             resultat EST_DU_TYPE NOMBRE
                    
        //         DEBUT_ALGORITHME
                    
        //             pi PREND_LA_VALEUR Math.PI
        //             // ou pi PREND_LA_VALEUR 3.14 
                    
        //             resultat PREND_LA_VALEUR 0
        //             LIRE diametre
                    
        //             resultat PREND_LA_VALEUR 4/3 * pi * pow(diametre/2, 3)
        //             // ou encore resultat PREND_LA_VALEUR 4/3 * pi * (diametre/2) * (diametre/2) * (diametre/2)
                    
        //             AFFICHER* resultat
                    
        //         FIN_ALGORITHME


// var pi = Math.PI;
// var result = 0;
// var diametre = parseInt(window.prompt("Quel diametre?"));


// var calcul = function(PI, diametre, resultat) {
//     return resultat = 4/3 * PI * Math.pow(diametre/2, 3);
// }

// console.log("Le résultat : " + calcul(pi, diametre, result ));
