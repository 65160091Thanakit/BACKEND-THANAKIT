function exam01(alice, bob) {
  let c1 = 0; // Initialize c1 to 0
  let c2 = 0; // Initialize c2 to 0
  for (let index = 0; index < alice.length; index++) {
    if (alice[index] > bob[index]) {
      c1 = c1 + 1;
    } else if (bob[index] > alice[index]) {
      c2 = c2 + 1;
    }
  }
  return [c1, c2]; // This will return the final scores
}

const Alice = [1, 2, 3, 10];
const Bob = [7, 1, 3, 5];
console.log(exam01(Alice, Bob));

function average(number) {
  let sum = 0;
  for (const key in number) {
    sum = sum + number[key];
  }
  return sum / number.length;
}

// ตัวอย่างการใช้งาน
console.log(average([1, 2, 3, 4, 5])); // ควรแสดงผล 3

function isPalindrome(input) {
  let result = true;
  let reverse_index = input.length - 1;
  for (const index in input) {
    if (input[index] !== input[reverse_index]) {
      result = false;
      break;
    }
    reverse_index--;
  }
  return result;
}

// ตัวอย่างการใช้งาน
console.log(isPalindrome("madam")); // ควรแสดงผล true
console.log(isPalindrome("hello")); // ควรแสดงผล false

function findMax(input_Array) {
  console.log(input_Array);
  return Math.max(...input_Array);
}
// ตัวอย่างการใช้งาน
console.log(findMax([3, 1, 4, 1, 5, 9, 2, 6, 5])); // ควรแสดงผล 9

function reverseArray(input_Array) {
  let result = [];
  for (let index = input_Array.length - 1; index >= 0; index--) {
    result.push(input_Array[index]);
  }
  return result;
}
// ตัวอย่างการใช้งาน
console.log(reverseArray([1, 2, 3, 4, 5])); // ควรแสดงผล [5, 4, 3, 2, 1]

function isPrime(number) {
  if (number <= 1) return false; // ตัวเลขที่น้อยกว่าหรือเท่ากับ 1 ไม่ใช่จำนวนเฉพาะ
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// ตัวอย่างการใช้งาน
console.log(isPrime(7)); // ควรแสดงผล true
console.log(isPrime(10)); // ควรแสดงผล false

function findLongestWord(Str_input) {
  const input_arr = Str_input.split(" ");
  
  return input_arr.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;}, ""); // เริ่มต้นด้วยสตริงว่าง
}

// ตัวอย่างการใช้งาน
console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // ควรแสดงผล "jumps"



function numberToWord(num) {
  switch (num) {
    case 0:
      return 'zero'
      break;
    case 1:
      return 'one'
      break;
    case 2:
      return 'two'
      break;
    case 3:
      return 'three'
      break;
    case 4:
      return 'four'
      break;
    case 5:
      return 'five'
      break;
    case 6:
      return 'six'
      break;
    case 7:
      return 'seven'
      break;
    case 8:
      return 'eight'
      break;
    case 9:
      return 'nine'
      break;
    default:
      break;
  }
}

// ตัวอย่างการใช้งาน
console.log(numberToWord(3)); // ควรแสดงผล "three"
console.log(numberToWord(7)); // ควรแสดงผล "seven"


function factorial(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorial(num - 1));
  }
}
// ตัวอย่างการใช้งาน
console.log(factorial(5)); // ควรแสดงผล 120 (5 * 4 * 3 * 2 * 1)


function findDuplicates(input_Array) {
  let seen = [];
  let duplicates = []; // ตัวแปรเพื่อเก็บค่าที่ซ้ำกัน

  for (const element of input_Array) {
    if (seen.includes(element)) { // ตรวจสอบว่าค่าถูกพบแล้ว
      if (!duplicates.includes(element)) { // ตรวจสอบว่าไม่เคยถูกเพิ่มไปยัง duplicates
        duplicates.push(element); // เพิ่มค่าที่ซ้ำไปยัง duplicates
      }
    }
    seen.push(element); // เพิ่มค่าลงใน seen
  }

  return duplicates; // คืนค่าอาเรย์ของค่าที่ซ้ำกัน
}

// ตัวอย่างการใช้งาน
console.log(findDuplicates([1, 2, 4, 3, 4, 3, 2, 1])); // ควรแสดงผล [1, 2, 3]


function findMinMax(input_Array){
  return [Math.min(...input_Array),Math.max(...input_Array)]
}
// ตัวอย่างการใช้งาน
console.log(findMinMax([3, 1, 4, 1, 5, 9, 2, 6, 5])); // ควรแสดงผล [1, 9]


function processData(groups) {
  groups.forEach((group, index) => {
    // แปลงค่าทุกตัวในกลุ่มเป็นฐาน 2
    const binaryValues = group.map(num => num.toString(2));

    // รวมค่าฐาน 2 ในแต่ละกลุ่มเป็น string
    console.log(`กลุ่มที่ ${index + 1} ในฐาน 2:`, binaryValues.join(', '));

    // สามารถนำ binaryValues ไปใช้ในการคำนวณเพิ่มเติมได้ เช่น บวก ลบ คูณ หาร
    const sum = group.reduce((total, num) => total + num, 0);
    console.log(`ผลรวมของกลุ่ม ${index + 1}:`, sum);
  });
}

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

processData(data);
