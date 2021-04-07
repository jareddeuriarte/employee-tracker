//Requiring npm inquirer
const inquirer = require('inquirer')

// Questions for inquirer prompt
const questions = [
    {
        name: 'choose',
        type: 'list',
        message: 'Select an action',
        choices: ['View employee data', 'Add employee data', 'Update employee data']
    }
]

//Initializes inquirer prompts
function init() {
    inquirer.prompt(questions)
        //Accepts response from questions
        .then(response => {
            console.log(response)
            //If the response is _____, then do appropriate function
            switch (response) {
                case 'View employee data':
                    console.log('---View employee---')
                    // viewEmployee()
                    break;
                case 'Add employee data':
                    console.log('---Add employee---')
                    // addEmployee()
                    break;
                case 'Update employee data':
                    console.log('---Update employee---')
                    // updateEmployee()
                    break;
            }
        })

}


function viewEmployee() {
    console.log('---View employee---')
};
function addEmployee() {
    console.log('---Add employee---')
};
function updateEmployee() {
    console.log('---Update employee---')
};



//Calls init function
init();