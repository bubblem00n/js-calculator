function calculator() {
  let numberFirst = prompt("Введите первое число");
  let numberSecond = prompt("Введите второе число");

  let sum = Number(numberFirst) + Number(numberSecond);
  let minus = Number(numberFirst) - Number(numberSecond);
  let multiply = Number(numberFirst) * Number(numberSecond);
  let devide = Number(numberFirst) / Number(numberSecond);

  console.log(`Сложение: ${numberFirst} + ${numberSecond} = ${sum}`);
  console.log(`Вычитание: ${numberFirst} - ${numberSecond} = ${minus}`);
  console.log(`Умножение: ${numberFirst} * ${numberSecond} = ${multiply}`);
  console.log(`Деление: ${numberFirst} / ${numberSecond} = ${devide}`);
}

calculator();
