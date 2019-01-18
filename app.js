const ages = [15, 24, 3, 58, 42, 17, 85, 2];

// Parcours du tableau ages
for (let i = 0; i < ages.length; i++) {
    console.log("tu a " + ages[i] + " ans");
}


// La même chose encore plus rapide
for (let age of ages) {
    console.log(`tu a ${age} ans`);
}