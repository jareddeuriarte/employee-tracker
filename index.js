//Requiring npm inquirer
const inquirer = require('inquirer')
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: 'root',
    // Your password
    password: '',
    database: 'employee_tracker_db',
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
});

// const afterConnection = () => {
//     connection.query('SELECT * FROM songs', (err, res) => {
//       if (err) throw err;
//       console.table(res);
//     });
//   };


// Questions for inquirer prompt
const questions = [
    {
        type: 'list',
        message: 'Select an action',
        choices: ['View employee data', 'Add employee data', 'Update employee data'],
        name: 'action'

    }
]

const addQuestions = [
    {
        type: 'input',
        message: 'Enter employee\'s first name?',
        name: 'firstName'

    },
    {
        type: 'input',
        message: 'Enter employee\'s last name?',
        name: 'lastName'
    },
    {
        type: 'list',
        message: 'Enter employee role?',
        choices:['Admin Assistant', 'Admin Coordinator', 'Youth Counselor', 'Lead Youth Counselor', 'Bookkeeper', 'Program Supervisor', 'Operations Supervisor', 'Executive Director'],
        name: 'role'
    },
    {
        type: 'input',
        message: 'Enter employee salary?',
        name: 'salary'
    }
]


//Initializes inquirer prompts
function init() {
    inquirer.prompt(questions)
        //Accepts response from questions
        .then(response => {
            console.log(response)
            //If the response is _____, then do appropriate function.
            switch (response.action) {
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

};


function addEmployee() {
    console.log('---Add employee---')
    inquirer.prompt(addQuestions)
        //Accepts response from questions
        .then(response => {
            console.table(response)
            //Drilling into response and querying mysql
        })
};






// use connection.query (SELECT ____ FROM ______) in the below functions
// function viewEmployee() {
//     console.log('---View employee---')
// };

// function updateEmployee() {
//     console.log('---Update employee---')
// };

//Calls init function
init();