#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter Your Height (In Ft)", type: "number", name: "hFt" },
    { message: "Enter Your Height (In Inch)", type: "number", name: "hInch" },
    { message: "Enter Your Weight (In KGs)", type: "number", name: "wKg" },
    {
        message: "Please Select Apna BMI Calculator for your desired result Or Select Exit",
        type: "list",
        name: "BMI",
        choices: ["BMI Calculator", "Exit"],
    },
]);
// console.log(answer)
if (answer.BMI === "BMI Calculator") {
    console.log(`Your BMI result is ${answer.wKg /
        (((answer.hFt * 12 + answer.hInch) / 39.7) *
            ((answer.hFt * 12 + answer.hInch) / 39.7))}\n \t\n Thanks for using Apna BMI Calculator \t\n`);
}
else if (answer.BMI === "Exit") {
    console.log(`\t\n You have not performed BMI Operation. Please type again "npx mar24apna-bmi-calculator". Thank you!`);
}
// Checking an equation
// console.log(78 / ((((5 * 12) + 3) / 39.7) * (((5 * 12) + 3) / 39.7)));
