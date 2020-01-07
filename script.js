'use strict';


let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");
console.log(money);
console.log(time);

let appData = {
budget:money,
timeData:time,
expenses: {},
income: [],
savings: false
};

console.log(appData);

let importantName = prompt("Введите обязательную статью расходов в этом месяце");

console.log(importantName);

let importantCost = prompt("Во сколько обойдется?");
console.log(importantCost);

appData.expenses.importantName = importantCost;



console.log(appData.expenses.importantName);
alert("Ваш бюджет на 1 день составляет: "+appData.budget/30);