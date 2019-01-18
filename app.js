const ul = document.querySelector("ul");
const menu = ["<i class='fas fa-home'> Accueil</i>"];
let user = 'member';

function ajoutMenu() {
    let onglet = prompt("Crée un onglet");

    if (onglet !== null && onglet !== "") {
        menu.push(onglet);
        afficherMenu(true);
    }

    // console.log(menu);
}

function afficherMenu(ajouterElement) {
    if (ajouterElement) {
        ul.innerHTML += construitUnItemDeMenu(menu.length-1);
    }
    else { // Enlever un élément du menu
        for (let i = 0; i < menu.length; i++) {
            if (i == 0) ul.innerHTML = construitUnItemDeMenu(i);
            else ul.innerHTML += construitUnItemDeMenu(i);
        }
    }
}

function construitUnItemDeMenu(index) {
    return "<li class='nav-item'><a class='nav-link' href='#'>" + menu[index] + "</a></li>";
}

function supprimerMenu() {
    menu.pop();
    afficherMenu();
}

function construitLesBoutonsDAdministration() {
    document.body.innerHTML += `
        <button onclick="ajoutMenu()"><i class="fas fa-plus"></i></button>
        <button onclick="supprimerMenu()"><i class="far fa-trash-alt"></i></button>
    `;
}

afficherMenu(true);

if (user === 'admin') {
    construitLesBoutonsDAdministration();
}
