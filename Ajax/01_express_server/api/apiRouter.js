const express = require('express');
const router = express.Router();

let employees = [
    {
        id:'cmxncxm',
        first_name:'John',
        last_name: 'wilson',
        email: 'john@gmail.com',
        gender: 'Male',
        ipaddress: '127.0.0.1'
    },
    {
        id:'fsfsf',
        first_name:'Laura',
        last_name: 'wilson',
        email: 'laura@gmail.com',
        gender: 'Female',
        ipaddress: '127.0.0.1'
    },
]

let getID = () => {
    return '_'+ Math.random().toString(36).substr(2,9)
}
// Get employees

router.get('/employees', (request, response)=>{
    response.json(employees);
    console.log(`GET request received at server : ${new Date().toLocaleTimeString()}`);
    // response.json({msg: 'GET request is success'})
});

router.post('/employees', (request, response) => {
let employee = {
    id: getID(),
    first_name: request.body.first_name,
    last_name: request.body.last_name,
    email: request.body.email,
    gender: request.body.gender,
    ipaddress: request.body.ipaddress
}
    employees.push(employee);
console.log(`Post request received at server : ${new Date().toLocaleTimeString()}`);
response.json({msg: 'post request is success'})
})

router.put('/employees:id', (request, response) => {
    let empId= request.params.id;
    let updateEmployee = {
        id: empId,
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        email: request.body.email,
        gender: request.body.gender,
        ipaddress: request.body.ipaddress
    }
    let existingemployee = employees.find((employee) => {
        return employee.id === empId;
    });
    employees.splice(employees.indexOf(existingemployee), 1, updateEmployee )
    console.log(`Put request received at server : ${new Date().toLocaleTimeString()}`);
    response.json({msg: 'Put request is success'})
})
    router.delete('/employees:id', (request, response) => {

        let empId= request.params.id;
        employees = employees.filter((employee) => {
            return employee.id !== empId;
        })
        console.log(`Delete request received at server : ${new Date().toLocaleTimeString()}`);
        response.json({msg: 'Delete request is success'})
})


module.exports = router;
