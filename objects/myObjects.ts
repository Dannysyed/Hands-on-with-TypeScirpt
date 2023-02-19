const User = {
    name: 'Daniyal',
    email: 'dan@gmail.com',
    isActive: true
}


// function passing object with defined parameter
function createUser({ name: string, isPaid: boolean }) {
    console.log('dd')

}
console.log(createUser)
createUser({ name: 'danny', isPaid: false })

// function with required object that must return a object with predefined requirments
function createBook(): { name: string } {
    return { name: 'san' }
}
createBook()



// Type Alias  ### making a custom type
type User = {
    name: string,
    email: string,
    age: number
}

function createNewUser(user: User): User {
    return { name: '', email: 'asdf', age: 12 }

}
createNewUser({ name: '', email: 'asdf', age: 12 })

// One more example

type Points = {
    x: string,
    y: string
}

function printCoors(pt: Points) {
    return pt
}
printCoors({ x: '2', y: '1' })


// Read only in type script
type Users = {
    readonly _id: string,
    name: string,
    email: string,
    creditcard?: number
}




export { }