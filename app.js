const ul = document.querySelector("ul");
const menu = ["coco", "jaco"];

for (let i = 0; i < menu.length; i++) {
    ul.innerHTML += "<li>" + menu[i] + "</li>";
}

 function ajoutMenu() {
     let onglet = prompt("Crée un onglet");
     menu.push(onglet);
     console.log(menu);
 }