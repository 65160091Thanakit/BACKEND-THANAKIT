const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function 1: Sum Numbers
function sumNumbers(input) {
  const values = Array.isArray(input) ? input : input.split(" ");
  let sum = 0;
  values.forEach((item) => {
    item = item.toString();
    const numbers = item.match(/\d+/g);
    if (numbers) {
      sum += parseInt(numbers.join(""), 10);
    }
  });
  return sum;
}

// Function 2: Find Max and Min
function findMaxMin(input) {
  const max = Math.max(...input);
  const min = Math.min(...input);
  return { max, min };
}

// Function 3: Sort Numbers
function sortNumbers(inputArray, order) {
  let filteredNumbers = inputArray.filter(item => !isNaN(item));
  filteredNumbers.sort((a, b) => order === 'asc' ? a - b : b - a);
  return filteredNumbers;
}

// Function 4: Swap Array Elements
function pushArray(input, step) {
  for (let index = 0; index < step; index++) {
    input.unshift(input.pop());
  }
  return input;
}

// Function 5: Process Binary Data
function processData(groups) {
  groups.forEach((group, index) => {
    const binaryValues = group.map(num => num.toString(2));
    console.log(`Group ${index + 1} in binary:`, binaryValues.join(', '));
    const sum = group.reduce((total, num) => total + num, 0);
    console.log(`Sum of group ${index + 1}:`, sum);
  });
}

// Menu-driven CLI
function showMenu() {
  console.log(`
  Choose an option:
  1. Sum Numbers
  2. Find Max and Min
  3. Sort Numbers
  4. Swap Array Elements
  5. Process Binary Data
  6. Exit
  `);
}

function main() {
  showMenu();
  rl.question('Enter your choice: ', (choice) => {
    switch (choice.trim()) {
      case '1':
        rl.question('Enter numbers or strings separated by space: ', (input) => {
          const result = sumNumbers(input);
          console.log(`The sum is: ${result}`);
          main();
        });
        break;

      case '2':
        rl.question('Enter numbers separated by space: ', (input) => {
          const array = input.split(' ').map(Number);
          const { max, min } = findMaxMin(array);
          console.log(`Max: ${max}, Min: ${min}`);
          main();
        });
        break;

      case '3':
        rl.question('Enter numbers and strings separated by space: ', (input) => {
          rl.question('Enter sort order (asc/desc): ', (order) => {
            const array = input.split(' ').map(item => (isNaN(item) ? item : Number(item)));
            const sortedArray = sortNumbers(array, order);
            console.log(`Sorted Array: ${sortedArray}`);
            main();
          });
        });
        break;

      case '4':
        rl.question('Enter array elements separated by space: ', (input) => {
          const array = input.split(' ').map(Number);
          rl.question('Enter the number of rotations: ', (steps) => {
            const result = pushArray(array, parseInt(steps, 10));
            console.log(`Array after rotations: ${result}`);
            main();
          });
        });
        break;

      case '5':
        rl.question('Enter groups (comma-separated for each group, space-separated within group): ', (input) => {
          const groups = input.split(',').map(group => group.trim().split(' ').map(Number));
          processData(groups);
          main();
        });
        break;

      case '6':
        console.log('Goodbye!');
        rl.close();
        break;

      default:
        console.log('Invalid choice, please try again.');
        main();
        break;
    }
  });
}

// Start the CLI
main();
