const fs = require('fs');

const content = fs.readFileSync('./input.txt', 'utf-8');
const rounds = content.split("\n").map((row) => row.replace("\r", "").split(" "));

// PART ONE
function roundOutcome(val) {
    const enemy = val[0]
    const self = val[1]

    if(('ABC'.indexOf(enemy)+2)%3 == 'XYZ'.indexOf(self)) return 0
    else if(('XYZ'.indexOf(self)+2)%3 == 'ABC'.indexOf(enemy)) return 6
    else if('XYZ'.indexOf(self) == 'ABC'.indexOf(enemy)) return 3
}

const shapeScore = rounds.reduce((acc, value) => acc+'XYZ'.indexOf(value[1])+1, 0)

const roundScore = rounds.reduce((acc, value) => acc+roundOutcome(value), 0)

console.log(shapeScore, roundScore, shapeScore+roundScore)

// PART TWO
function roundOutcome2(val) {
    return 3*'XYZ'.indexOf(val)
}

function shapeOutcome(val) {
    const enemy = val[0]
    const outcome = val[1]

    if(outcome == 'X') return ('ABC'.indexOf(enemy)+2)%3+1
    if(outcome == 'Y') return 'ABC'.indexOf(enemy)+1
    if(outcome == 'Z') return ('ABC'.indexOf(enemy)+1)%3+1 
}

const shapeScore2 = rounds.reduce((acc, value) => acc+shapeOutcome(value), 0)

const roundScore2 = rounds.reduce((acc, value) => acc+roundOutcome2(value[1]), 0)

console.log(shapeScore2, roundScore2, shapeScore2+roundScore2)