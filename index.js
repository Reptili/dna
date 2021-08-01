const fs = require('fs')
const DNA = fs.readFileSync('./DNASeq.txt', {encoding: 'utf8', flag: 'r'})
const marker = fs.readFileSync('./marker.txt', {encoding: 'utf8', flag: 'r'})

console.log('Finds the appearances of different DNA markers in a DNA sequence.')
console.log(DNA)
console.log(marker)
console.log(DNA.indexOf(marker))