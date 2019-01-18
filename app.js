const contacts = [
    ["Philippe", "Piatti", "philippe@gmail.com"],
    ["Michael", "Cornillon", "michael@gmail.com"],
    ["Daphné", "Cornilon", "daphne@gmail.com"],
    ["René", "Hersent", "rené@gmail.com"],
];

const corpsDuTableauHTML = document.querySelector('tbody');
let index = 0;

window.onkeyup = function() {
    if (index >= contacts.length) {
        return; // Ne retourne rien !!! (stop net la fonction)
    }

    corpsDuTableauHTML.innerHTML += `
        <tr>
            <td>${contacts[index][0]}</td>
            <td>${contacts[index][1]}</td>
            <td>${contacts[index][2]}</td>
        </tr>
    `;
    index++;
};