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
});

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
        choices: [
            'Admin Assistant',
            'Admin Coordinator',
            'Youth Counselor',
            'Bookkeeper',
            'Program Supervisor',
            'Operations Supervisor',
            'Executive Director'],
        name: 'role'
    },
    {
        type: 'input',
        message: 'Enter employee salary?',
        name: 'salary'
    },
    {
        type: 'list',
        message: 'Would you like to perform another task?',
        choices: ['Yes', 'No'],
        name: 'addAnother'

    }
]

//Keys
const departmentKeys = [
    {
        department: 'Administration',
        departmentID: 111
    },
    {
        department: 'Youth Program',
        departmentID: 222
    },
    {
        department: 'Executive',
        departmentID: 333
    },
]
const roleKeys = [
    {
        role: 'Admin Assistant',
        roleID: 20,
        department: 'Administration',
        manager: 101
    },
    {
        role: 'Admin Coordinator',
        roleID: 21,
        department: 'Administration',
        manager: 101
    },
    {
        role: 'Youth Counselor',
        roleID: 22,
        department: 'Youth Program',
        manager: 102
    },
    {
        role: 'Bookkeeper',
        roleID: 23,
        department: 'Administration',
        manager: 101
    },
    {
        role: 'Program Supervisor',
        roleID: 24,
        department: 'Executive',
    },
    {
        role: 'Operations Supervisor',
        roleID: 25,
        department: 'Executive',
    },
    {
        role: 'Executive Director',
        roleID: 26,
        department: 'Executive',
    },
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
                default:
            }

        })

};

function addEmployee() {
    console.log('---Adding employee---')
    inquirer.prompt(addQuestions)
        //Accepts response from questions
        .then(response => {
            console.table(response)
            //Determining employee role, then adding employee by querying mysql appropriately
            switch (response.role) {
                case 'Admin Assistant':
                    //Querying MySql
                    connection.query(
                        'INSERT INTO employee SET ?',
                        {
                            first_name: response.firstName,
                            last_name: response.lastName,
                            role_id: roleKeys[0].roleID,
                            manager_id: roleKeys[0].manager
                        },
                        (err, res) => {
                            if (err) throw err;
                            console.table(res);
                        });
                    connection.query(
                        'INSERT INTO role SET ?',
                        {
                            id: roleKeys[0].roleID,
                            title: response.role,
                            salary: response.salary,
                            department_id: departmentKeys[0].departmentID
                        },
                        (err, res) => {
                            if (err) throw err;
                            console.table(res);
                        });
                    doMore(response.addAnother)
                    break;
                case 'Admin Coordinator':
                    //Querying MySql
                    connection.query(
                        'INSERT INTO employee SET ?',
                        {
                            first_name: response.firstName,
                            last_name: response.lastName,
                            role_id: roleKeys[1].roleID,
                            manager_id: roleKeys[1].manager
                        },
                        (err, res) => {
                            if (err) throw err;
                            console.table(res);
                        });
                    connection.query(
                        'INSERT INTO role SET ?',
                        {
                            id: roleKeys[1].roleID,
                            title: response.role,
                            salary: response.salary,
                            department_id: departmentKeys[0].departmentID
                        },
                        (err, res) => {
                            if (err) throw err;
                            console.table(res);
                        });
                    doMOre(response.addAnother)
                    break;
                case 'Youth Counselor':
                    //Querying MySql
                    connection.query(
                        'INSERT INTO employee SET ?',
                        {
                            first_name: response.firstName,
                            last_name: response.lastName,
                            role_id: roleKeys[2].roleID,
                            manager_id: roleKeys[2].manager
                        },
                        (err, res) => {
                            if (err) throw err;
                        });
                    connection.query(
                        'INSERT INTO role SET ?',
                        {
                            id: roleKeys[2].roleID,
                            title: response.role,
                            salary: response.salary,
                            department_id: departmentKeys[1].departmentID
                        },
                        (err, res) => {
                            if (err) throw err;
                        });
                    doMore(response.addAnother)
                    break;
                case 'Bookkeeper':
                    //Querying MySql
                    connection.query(
                        'INSERT INTO employee SET ?',
                        {
                            first_name: response.firstName,
                            last_name: response.lastName,
                            role_id: roleKeys[3].roleID,
                            manager_id: roleKeys[3].manager
                        },
                        (err, res) => {
                            if (err) throw err;
                        });
                    connection.query(
                        'INSERT INTO role SET ?',
                        {
                            id: roleKeys[3].roleID,
                            title: response.role,
                            salary: response.salary,
                            department_id: departmentKeys[0].departmentID
                        },
                        (err, res) => {
                            if (err) throw err;
                        });
                    doMore(response.addAnother)
                    break;
                case 'Program Supervisor':
                    //Querying MySql
                    connection.query(
                        'INSERT INTO employee SET ?',
                        {
                            first_name: response.firstName,
                            last_name: response.lastName,
                            role_id: roleKeys[4].roleID,
                        },
                        (err, res) => {
                            if (err) throw err;
                        });
                    connection.query(
                        'INSERT INTO role SET ?',
                        {
                            id: roleKeys[4].roleID,
                            title: response.role,
                            salary: response.salary,
                            department_id: departmentKeys[2].departmentID
                        },
                        (err, res) => {
                            if (err) throw err;
                        });
                    doMore(response.addAnother)
                    break;
                case 'Operations Supervisor':
                    //Querying MySql
                    connection.query(
                        'INSERT INTO employee SET ?',
                        {
                            first_name: response.firstName,
                            last_name: response.lastName,
                            role_id: roleKeys[5].roleID,
                        },
                        (err, res) => {
                            if (err) throw err;
                        });
                    connection.query(
                        'INSERT INTO role SET ?',
                        {
                            id: roleKeys[5].roleID,
                            title: response.role,
                            salary: response.salary,
                            department_id: departmentKeys[2].departmentID
                        },
                        (err, res) => {
                            if (err) throw err;
                        });
                    doMore(response.addAnother)
                    break;
                case 'Executive Director':
                    //Querying MySql
                    connection.query(
                        'INSERT INTO employee SET ?',
                        {
                            first_name: response.firstName,
                            last_name: response.lastName,
                            role_id: roleKeys[6].roleID,
                        },
                        (err, res) => {
                            if (err) throw err;
                        });
                    connection.query(
                        'INSERT INTO role SET ?',
                        {
                            id: roleKeys[6].roleID,
                            title: response.role,
                            salary: response.salary,
                            department_id: departmentKeys[2].departmentID
                        },
                        (err, res) => {
                            if (err) throw err;
                        });
                    doMore(response.addAnother)
                    break;
            }
        })
};

function doMore(response) {

    if (response === 'Yes') {
        init();
    }
    else {
        console.log('No new emplpoyees to add.')
    }
}

//Calls init function
init();