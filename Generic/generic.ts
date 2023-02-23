
function identityOne(val: number | boolean): number | boolean {
    // return 's'
    return 2
}


function identityTwo(val: any): any {
    return val
}

identityTwo('1')

function identityGeneric<type>(val: type): type {
    return val
}

identityGeneric('s')


let arrouwGeneric = <t>(val: t[]): t => {
    return val[1]

}