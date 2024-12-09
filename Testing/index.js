const getFullName = (fname, lname) => {
    return `${fname} ${lname}`
}

const actuallFullName = getFullName('p' , 'k')
const expectedFullName ='B k';

if(actuallFullName !== expectedFullName) {
    throw new Error (`${actuallFullName} is not equal yo  ${expectedFullName}`)
}
