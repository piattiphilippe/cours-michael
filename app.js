let prenoms = [];
let noms = [];

const ul = document.querySelector('ul');

function ajouterPersonne() {
    let prenom = prompt("Renseigner un prénom de personne :");
    let nom = prompt("Renseigner un nom cette fois-ci :");
    prenoms.push(prenom);
    noms.push(nom);

    console.log(prenoms);
}

function afficherPersonne() {
    ul.innerHTML = "";
    
    for (let i = 0; i < prenoms.length; i++) {
        ul.innerHTML += "<li>Nom : " + noms[i] + " - Prénom : " + prenoms[i] + "</li>";
    }
}