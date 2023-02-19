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


export { }