console.log('Finds the appearances of different DNA markers in a DNA sequence.')

const fs = require('fs')
const markers = fs.readdirSync(__dirname + '/markers')
const patients = fs.readdirSync(__dirname + '/patients')

for (let i = 0; i < patients.length; i++) {
    for (let z = 0; z < markers.length; z++) {
        const m = fs.readFileSync('C:\\Users\\seamu\\dna/markers/' + markers[z], {encoding: 'utf8', flag: 'r'})
        const p = fs.readFileSync('C:\\Users\\seamu\\dna/patients/' + patients[i], {encoding: 'utf8', flag: 'r'})
        console.log(markers[z].split('.').slice(0, -1).join('.') + ': ' + p.indexOf(m)) 
    }
}
