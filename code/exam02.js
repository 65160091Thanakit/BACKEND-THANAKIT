// โจทย์ข้อที่ 1: รวมเลข (Easy)
// รับข้อมูลเข้าที่เป็นทั้งตัวเลขและตัวอักษร แล้วให้บวกเฉพาะตัวเลขเท่านั้น ถ้ามี string ที่มีตัวเลขผสมกับตัวอักษร ให้ใช้วิธีตัด string เอาเฉพาะตัวเลขมาบวกกัน

// ตัวอย่าง Input: '1a', 2, 3, 'b'
// Output: 6
function sumNumbers(input) {
  // แปลง input เป็น array ถ้าเป็น string โดยแยกด้วยช่องว่าง
  const values = Array.isArray(input) ? input : input.split(" ");
  let sum = 0;

  // วนลูปใน array ของข้อมูลที่รับมา
  values.forEach((item) => {
    // แปลง item ให้เป็น string ถ้ายังไม่ใช่ string
    item = item.toString();

    // ใช้ regex เพื่อดึงเฉพาะตัวเลขจาก string
    const numbers = item.match(/\d+/g);

    if (numbers) {
      // แปลงเป็นตัวเลขและบวกเข้าไปในผลรวม
      sum += parseInt(numbers.join(""), 10);
    }
  });

  // แสดงผลรวมของตัวเลขทั้งหมดที่พบ
  return sum;
}
array = [1, '2a', '3abc', 4, 'def5', 'b6'];
console.log(sumNumbers(array)); // ควรได้ผลลัพธ์ 6

// โจทย์ข้อที่ 2: หาค่ามากที่สุด
// รับค่าเป็น array ของตัวเลขแล้วหาค่า Max และ Min โดยต้องเก็บค่าที่มากที่สุด (max) เพื่อนำไปใช้ในการทำอย่างอื่นด้วย

// ตัวอย่าง Input: [5, 8, 1, 10, 3]
// Output: ค่าที่มากที่สุดคือ 10

// โจทย์ข้อที่ 3: เรียงลำดับข้อมูลแบบง่าย (Array Linked List)
// เขียนฟังก์ชันที่รับข้อมูลเข้ามาเป็น array โดยกรองให้เหลือเฉพาะตัวเลข แล้วทำการเรียงลำดับให้ถูกต้อง
function sortNumbers(inputArray, order) {
    // Filter out non-numeric values
    let filteredNumbers = inputArray.filter(item => !isNaN(item));

    // Sort the numbers in ascending or descending order
    filteredNumbers.sort((a, b) => order === 'asc' ? a - b : b - a);

    return filteredNumbers;
}

// Example usage
let input = [10, 'abc', 5, 'xyz', 7, 2];
console.log(sortNumbers(input, 'asc'));  // Output: [2, 5, 7, 10]
console.log(sortNumbers(input, 'desc')); // Output: [10, 7, 5, 2]

  //How (a, b) => a - b Works:
  // If a < b, a - b will be negative, so a is placed before b.
  // If a > b, a - b will be positive, so b is placed before a.
  // If a === b, a - b will be 0, and their relative order remains unchanged.

// ตัวอย่าง Input: [10, 'abc', 3, 7, 'xyz', 1]
// Output: [1, 3, 7, 10]

// โจทย์ข้อที่ 4: สลับค่าใน Array
// ให้สลับตำแหน่งใน array ตามจำนวนรอบที่ไม่แน่นอน โดยยกตัวอย่างเช่น array ที่มี [1, 2, 3] หลังจากสลับแล้วอาจได้เป็น [3, 1, 2]
function pushArray(input,step){
    let temp
    for (let index = 0; index < step; index++) {
        input.unshift(input.pop())
    }
    return input
}


console.log(pushArray([1, 2, 3, 4, 5],3))
// ตัวอย่าง Input: [1, 2, 3] จำนวนรอบ = 2
// Output: [2, 3, 1]

// โจทย์ข้อที่ 5: ตรวจสอบข้อมูลและประมวลผล
// รับชุดข้อมูลหลายกลุ่มและตรวจสอบข้อมูลในแต่ละกลุ่ม โดยในบางกลุ่มให้แปลงข้อมูลเป็นเลขฐาน 2 และทำการบวก ลบ คูณ หาร ตามที่กำหนด
function processData(groups) {
    // วนลูปผ่านแต่ละกลุ่มใน array ของกลุ่ม
    groups.forEach((group, index) => {
      // แปลงค่าทุกตัวในกลุ่มเป็นฐาน 2 โดยใช้ map
      // โดย num.toString(2) จะทำการแปลงตัวเลขเป็น string ในรูปแบบฐาน 2
      const binaryValues = group.map(num => num.toString(2));
  
      // รวมค่าฐาน 2 ในแต่ละกลุ่มเป็น string โดยใช้ join
      // จะทำให้แสดงผลลัพธ์เป็นรูปแบบที่เข้าใจง่ายขึ้น
      console.log(`กลุ่มที่ ${index + 1} ในฐาน 2:`, binaryValues.join(', '));
  
      // นำค่าจากกลุ่มมาคำนวณผลรวม โดยใช้ reduce
      // total จะเริ่มต้นจาก 0 และ num คือแต่ละค่าจากกลุ่ม
      const sum = group.reduce((total, num) => total + num, 0);  
      // แสดงผลรวมของกลุ่มที่คำนวณได้
      console.log(`ผลรวมของกลุ่ม ${index + 1}:`, sum);
    });
  }
  
  // ข้อมูลตัวอย่างที่ใช้ทดสอบ
  const data = [
    [1, 2, 3], // กลุ่มที่ 1
    [4, 5, 6], // กลุ่มที่ 2
    [7, 8, 9]  // กลุ่มที่ 3
  ];
  
  // เรียกใช้ฟังก์ชัน processData เพื่อทำการประมวลผลข้อมูลที่ส่งเข้าไป
  processData(data);
  
// ตัวอย่าง Input:
// กลุ่มที่ 1: [1, 2, 3]
// กลุ่มที่ 2: [4, 5, 6]
// Output:
// กลุ่มที่ 1 ในฐาน 2: 1, 10, 11
// กลุ่มที่ 2 ในฐาน 2: 100, 101, 110
// ผลรวมของกลุ่มที่ 1: 6
// ผลรวมของกลุ่มที่ 2: 15

function swapElements(array, index1, index2) {
    if (index1 < 0 || index2 < 0 || index1 >= array.length || index2 >= array.length) {
        console.error("Invalid indices");
        return array; 
    }

    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;

    return array;
}

// ตัวอย่างการใช้งาน
let student = ['Bomgay', 'Ohm', 'Smart'];
student = swapElements(student, 0, 2);

console.log(student); // ผลลัพธ์: ['Bomgay', 'Smart', 'Ohm']

function MaxPlusMin(input){
    return Math.max(...input)+Math.min(...input)
}

array = [3, 4, 5, 1, 2];
console.log(MaxPlusMin(array))

function BinaryToInt(binary) {
  // Remove spaces from the binary string
  const sanitizedBinary = binary.replace(/\s/g, '');
  
  // Check if the sanitized input is a valid binary string
  if (!/^[01]+$/.test(sanitizedBinary)) {
    throw new Error('Input must be a valid binary string');
  }
  
  // Convert from binary to integer
  return parseInt(sanitizedBinary, 2);
}

// Example usage
console.log(BinaryToInt('1110 0011 1101 0101')); // Output: 57005


  function IntToBinary(int) {
    // ตรวจสอบว่าข้อมูลที่ป้อนเข้ามาเป็นเลขจำนวนเต็มหรือไม่
    if (typeof int !== 'number' || !Number.isInteger(int)) {
      throw new Error('Input must be an integer');
    }
    
    // แปลงจากเลขฐาน 10 เป็นเลขฐาน 2 โดยใช้ toString(2)
    return int.toString(2);
  }
  
  // ตัวอย่างการใช้งาน
  console.log(IntToBinary(13)); // ผลลัพธ์: '1101'
  