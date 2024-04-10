import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
console.log(chalk.bold.red.bgYellow('Welcome To The Only Choice Todo App'));
let condition = true;
while (condition) {
    let todoQuestion = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: chalk.yellow("What would you like to add in your todos?")
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: chalk.blue("Would you like to add more in your todos?"),
            default: true
        }
    ]);
    todos.push(todoQuestion.firstQuestion);
    console.log(chalk.green("Updated todos:"));
    todos.forEach(todo => console.log(chalk.cyan(todo)));
    condition = todoQuestion.secondQuestion;
}
