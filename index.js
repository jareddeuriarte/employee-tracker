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
            switch (response.choose) {
                case 'View employee data':
                    viewEmployee()
                    break;
                case 'Add employee data':
                    addEmployee()
                    break;
                case 'Update employee data':
                    updateEmployee()
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