function addtwo(num: number) {
    return num + 2
}
// addtwo('d') this wont work as paramater is numb type
addtwo(1)


function upperCase(str: string) {
    return str.toUpperCase()
}
upperCase('hllo')

function giveNumber(num: number): number {
    // return 'I am a Number' this wont work anymore beacuses the fucntion return type is string
    return 112
}
upperCase('hllo')

// for arrow funcitons
let arr = (): boolean => {
    return true
}


// #### IN callbacks 
const marvel = ['Superman', 'Flash', 'Cyborg']

marvel.map((val): string => {
    return `This hero name is ${val}`
})

// Type Void in typscirpt


let Handlemessage = (): void => {
    // lets say this fucntion doesnt returns anything ### then we use Type void 
    console.log('Hi am fucntion without any return statment ')
}

let Handleerror = (err: string): never => {
    // we use never for handling error or exception in a funtion 
    throw new Error(err)
}