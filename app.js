fetch('maps.json').then(data => data.json()).then(function(maps) {
    for (let map of maps) {
        const maison = document.querySelector('.maison');
        let myHtml = '<table>';
        
        for (let i = 0; i < map.length; i++) {
            myHtml += '<tr>';
            for (let j = 0; j < map[i].length; j++) {
                switch (map[i][j]) {
                    case 0:
                        myHtml += '<td class="ciel"></td>';
                        break;
                    case 1:
                        myHtml += '<td class="terre"></td>';
                        break;
                    case 2:
                        myHtml += '<td class="mur"></td>';
                        break;
                    case 3:
                        myHtml += '<td class="porte"></td>';
                        break;
                    case 4:
                        myHtml += '<td class="toit"></td>';
                        break;
                    case 5:
                        myHtml += '<td class="nuage"></td>';
                        break;
                    case 6:
                        myHtml += '<td class="tronc"></td>';
                        break;
                    case 7:
                        myHtml += '<td class="cime"></td>';
                        break;
                }
            }
            myHtml += '</tr>';
        }
        
        myHtml += '</table>';
        
        maison.innerHTML += myHtml;
    }
})