const inquirer = require('inquirer')


const questions = [
    {
        name:'choose',
        type: 'list',
        message: 'Select an action',
        choices: ['View employee data', 'Add employee data', 'Update employee data', ]

    }
]




function init(){
    inquirer.prompt(questions)
    .then(response => {
        console.log(response)
    })

}

init();