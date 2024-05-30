const firstLine = ['Shrimp of Gold so fair', 'Holy Crustacean', 'O Ye Shrimp of Lore']
const secondLine = ['Swimming alone, silent song', 'Awakens at Dawn, new life', 'Divine creation it be']
const thirdLine = ['Becomes God-like, thus', 'Solemnly glances', 'Thrice butters itself']

function generate() {
    let first = firstLine[Math.floor(Math.random()) * firstLine.length];
    let second = secondLine[Math.floor(Math.random()) * secondLine.length];
    let third = thirdLine[Math.floor(Math.random()) * thirdLine.length];
    console.log(`${first}
    ${second}
    ${third}`)
}