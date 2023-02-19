// defining an array with type string
let Marvel: string[] = []
// defining an array with type number
let dc: number[] = []


Marvel.push('ironman')
dc.push(1)


// type alias with array

type User = {
    name: string,
    age: number
}

let Multiverse: User[] = []

Multiverse.push({ name: 'daniyal', age: 12 })
