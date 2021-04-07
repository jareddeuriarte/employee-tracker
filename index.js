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
    // run the start function after the connection is made to prompt the user
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

// use connection.query (SELECT ____ FROM ______) in the below functions
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