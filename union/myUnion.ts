// with the union symbol | we can set many type to varible
let id: string | number = 12
id = '12'
// id=false not allowed 

type user = {
    name: string,
    id: number
}
type admin = {
    role: string,
    access: boolean
}

let Rohit: user | admin = { name: 'rohit', id: 1 }


Rohit = { role: 'ht', access: false }


// Union with arrays


const data: number[] = [1, 23, 33]
const data1: string[] = ['1', '21', '12']
const data2: string[] | number[] = [12, 21, 22]
const data3: string[] | number[] = ['12', '21', '22']
const data4: (string | number | Boolean)[] = [122, '12', 22, true]
const data5: any[] = [122, '12', 22, true]  // both are same



// literal allotement to vairble
let seatallowed: 'Leftwindow' | 'rightwindow' | 'Lowerwindow'
seatallowed = 'Leftwindow'