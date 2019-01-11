
const titleTag = document.querySelector('h1');
const colors = ['green', 'blue', 'purple', 'red', 'gray'];
let compteur = 0;

function addTitle() {
    let newTitle = prompt("Ajouter un titre ?");

    if (compteur == 5) {
        compteur = 0;
    }

    titleTag.innerHTML = `<span style='color:${colors[compteur]}'>${newTitle}</span>`;

    // console.log(colors)
    // console.log('compteur =', compteur, 'DONC colors['+compteur+'] =', colors[compteur])
    // console.log('\n')
    compteur++;
}