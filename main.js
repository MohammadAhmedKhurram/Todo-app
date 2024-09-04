#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
let todos = [];
console.log(chalk.redBright.bgYellow("Hello! Let's get organized with your tasks."));
let condition = true;
while (condition) {
    let todosQuestions = await inquirer.prompt([
        {
            type: "input",
            name: "question1",
            message: chalk.yellow("Add a task to your list. (You can continue adding more tasks individually.)")
        },
        {
            type: "confirm",
            name: "question2",
            message: chalk.blue("Do you have more tasks to add?"),
            default: "true"
        }
    ]);
    todos.push(todosQuestions.question1);
    condition = todosQuestions.question2;
}
console.log(chalk.green("Your tasks list:"));
todos.forEach(element => {
    console.log(chalk.cyan(element));
});
