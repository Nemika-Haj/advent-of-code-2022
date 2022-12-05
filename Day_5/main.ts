import fs from "fs"

const content = fs.readFileSync("./input.txt", 'utf-8').split("\n").map(line => line.replace("\r", ""))

type Instruction = {
    amount: number,
    from: number,
    to: number
}

const instructions: Instruction[] = content.filter(line => line.includes("move")).map(line => {
    const [_, amount, __, from, ___, to] = line.split(" ").map(i => parseInt(i))
    return {
        amount,
        from: from-1,
        to: to-1
    }
})

// The best part of this challenge
const unorderedBoxes: string[][] = content.filter(line => line.includes("[")).map(line => line.match(/.{1,4}/g)).map(line => line!.map(box => box.replace(" ", "")))
const boxes: string[][] = []

for(let i = 0; i < unorderedBoxes[0].length; i++) {
    const row = []
    for(let j = 0; j < unorderedBoxes.length; j++) {
        if(unorderedBoxes[j][i].includes("[")) row.push(unorderedBoxes[j][i])
    }

    boxes.push(row)
}

for(let instruction of instructions) {

    const transferBoxes: string[] = []

    for(let i = 0; i < instruction.amount; i++) {
        transferBoxes.push(boxes[instruction.from][0])
        boxes[instruction.from] = boxes[instruction.from].slice(1)
    }

    // part 1
    boxes[instruction.to].unshift(...(transferBoxes.reverse()))

    // part 2
    // boxes[instruction.to].unshift(...transferBoxes)
}

console.log(boxes.map(box => box[0]))