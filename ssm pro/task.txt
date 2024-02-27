//Task 1
let nr=9;
switch(nr){
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    case 3:
        console.log("three");
        break;
    case 4:
        console.log("four");
        break;
    case 5:
        console.log("five");
        break;
     case 6:
        console.log("six");
        break;
     case 7:
        console.log("seven");
        break;
     case 8:
        console.log("eight");
        break;
     case 9:
        console.log("nine");
        break;  
    default:
        console.log(" ati introdus o cifra diferita de 1-9 ");
}

//Task 2
let a=1;
let b=5;
let s=0;

for(let i=a; i<=b; i++){

    if(i%2===0){
        s=s+i;
    }
}
console.log(s);

//Task 3
let a1=15;
let b1=35;
let c1=77;

if(a1>b1&&a1>c1){
    console.log(" numarul maxim este "+ a1);
}
else if(b1>a1&&b1>c1){
    console.log("numarul maxim este  "+ b1);
}
else{
    console.log("numarul maxim este "+ c1);
}

//Task 4
function ucFirst(name) {
    return name[0].toUpperCase() + name.slice(1);
}

console.log(ucFirst("vasile"));

//Task 5
function extractCurrencyValue(str) {
    return parseInt(str.slice(1), 10);
  }

  console.log(extractCurrencyValue('$120'));

//Task 6
let userInput = prompt("Introduceti numarul:");

if (!isNaN(userInput)) {
  let number = parseFloat(userInput);
  
  if (number > 0) {
    alert(1);
  } else if (number < 0) {
    alert(-1);
  } else {
    alert(0);
  }
} else {
  alert("Eroare: nu ati introdus un numar");
}

//Task 7
if (!(age >= 14 && age <= 90)) {
  }

//Task 8
let correctUsername = "user";
let correctPassword = "password";

let username = prompt("Introduceti username:");
let password = prompt("Introduceti password:");

if (!username || !password) {
  alert("Eraorea validarii datelor");
} else if (username === correctUsername && password === correctPassword) {
  alert("Привет");
} else if (username === correctUsername && password !== correctPassword) {
  alert("Parola incorecta");
} else {
  alert("Username incorect");
}

//Task 9
let name = prompt("Introduceti numele dumneavoastra:");

if (name) {
  alert(`Salut, ${name}!`);

  let isFamiliarWithJavaScript = confirm("Cunoasteti JavaScript?");

  if (isFamiliarWithJavaScript) {
    alert("Bravo!");
  } else {
    alert("Putem incepe cursul acum.");
  }
} else {
  alert("Nu ati introdus numele dumneavoastra!");
}

//Task 10
const dividers = (number) => {
    if (number > 0 && Number.isInteger(number)) {
      console.log(`impartitorul ${number}:`);
      for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
          console.log(i);
        }
      }
    } else {
      console.log("Introduceti un numar intreg pozitiv.");
    }
  };

//Task 1 - array
const n = 5;
const array = Array.from({ length: n }, (_, index) => index + 1);

// metoda 1: for
console.log("metoda 1: for");
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// metoda 2: while
console.log("metoda 2: while");
let j = 0;
while (j < array.length) {
  console.log(array[j]);
  j++;
}

// metoda 3: do ... while
console.log("metoda 3: do ... while");
let k = 0;
do {
  console.log(array[k]);
  k++;
} while (k < array.length);

// metoda 4: for in
console.log("metoda 4: for in");
for (const index in array) {
  console.log(array[index]);
}

// metoda 5: for of
console.log("metoda 5: for of");
for (const element of array) {
  console.log(element);
}

// metoda 6: forEach
console.log("metoda 6: forEach");
array.forEach((element) => {
  console.log(element);
});

// metoda 7: map
console.log("metoda 7: map");
array.map((element) => {
  console.log(element);
});

//Task 2 - array
const numbers = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55];

function printNumbersLessThanFive(arr) {
  console.log("cifra < 5:");
  arr.forEach(num => {
    if (num < 5) {
      console.log(num);
    }
  });
}

printNumbersLessThanFive(numbers);

function findMinMaxPositions(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const maxPositions = [];
  const minPositions = [];
  
  arr.forEach((num, index) => {
    if (num === max) {
      maxPositions.push(index);
    }
    if (num === min) {
      minPositions.push(index);
    }
  });
  
  console.log("pozitia elementului cu valoarea maxima:", maxPositions);
  console.log("pozitia elementului cu valoarea minima:", minPositions);
}

findMinMaxPositions(numbers);

function sortDescending(arr) {
  const sortedArray = arr.slice().sort((a, b) => b - a);
  console.log("matrice sortata in ordine descrescatoare:", sortedArray);
}

sortDescending(numbers);

function printElementsGreaterThanAverage(arr) {
  const average = arr.reduce((acc, val) => acc + val, 0) / arr.length;
  console.log("Elemente de matrice care sunt mai mari decât valoarea medie:", arr.filter(num => num > average));
}

printElementsGreaterThanAverage(numbers);

// Task 3 - array
let styles = ["Джаз", "Блюз"];

console.log(styles);

styles.push("Рок-н-ролл");

console.log(styles);

const middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Классика";

console.log(styles);

const firstElement = styles.shift();
console.log("Удаленный элемент:", firstElement);
console.log(styles);

styles.unshift("Рэп", "Регги");

console.log(styles);

//Task 4 - array
function sumInputNumbers() {
  const numbers = [];
  
  while (true) {
      let input = prompt("introduceti numarul:");
      
      if (input === null || input === "" || isNaN(input)) {
          break;
      }
      
      numbers.push(Number(input));
  }
  
  let sum = 0;
  for (let number of numbers) {
      sum += number;
  }
  
  return sum;
}

const result = sumInputNumbers();
console.log("suma numerelor introduse:", result);

// Task 5 - array
function convert(fn, array) {
  const newArray = [];
  
  for (let i = 0; i < array.length; i++) {
      newArray.push(fn(array[i]));
  }
  
  return newArray;
}

function square(x) { 
  return x * x; 
}

console.log(convert(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(convert(square, [])); // []

let arr = [1, 2, 3];
console.log(convert(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]

// Task 6 - array
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const modifiedArray = array.map((element, index) => {
    if (index >= 4 && index <= 6) {
        return 0;
    } else {
        return element;
    }
});

console.log(modifiedArray); // [1, 2, 3, 4, 0, 0, 0, 8, 9]

// Task 7 - array
function extract(start, end) {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  if (start < 0 || end >= array.length || start > end) {
      return "eroare";
  }

  return array.slice(start, end + 1);
}

console.log(extract(2, 4)); // [3, 4, 5]

// Task 8 - array
const colors = ["red", "green", "blue"];

function checkColor(color) {
    return colors.indexOf(color);
}

console.log(checkColor("red")); // 0
console.log(checkColor("green")); // 1
console.log(checkColor("blue")); // 2
console.log(checkColor("yellow")); // -1

// Task 9 - array
const array = [1, "a", 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100];

function filter(arr) {
    return arr.filter(item => typeof item === 'number' && !isNaN(item));
}

const filteredArray = filter(array);
console.log(filteredArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


// Task 10 - array
const array = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1];

function uniqueSorted(arr) {
    const uniqueArray = Array.from(new Set(arr));
    
    uniqueArray.sort((a, b) => a - b);
    
    return uniqueArray;
}

const result = uniqueSorted(array);
console.log(result); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Task 11 - array
let colors = ["white", "blue", "yellow", "black", "red", "green"];

let [firstColor, secondColor, ...otherColors] = colors;

console.log(firstColor); // white
console.log(secondColor); // blue
console.log(otherColors); // ["yellow", "black", "red", "green"]

// Task 1 - object
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Task 2 - object
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum);

// Task 3 - object
function multiplyNumeric(obj) {
  for (let key in obj) {
      if (typeof obj[key] === 'number') {
          obj[key] *= 2;
      }
  }
}

let menu = {
width: 200,
height: 300,
title: "My menu"
};

multiplyNumeric(menu);

console.log(menu); // { width: 400, height: 600, title: "My menu" }

// Task 4 - object
let user1 = {
  name: "User 1",
  age: 123
};

let user2 = {};

for (let key in user1) {
  user2[key] = user1[key];
}

user2.name = "User 2";
user2.age = 321;

console.log(user1);
console.log(user2);

// Task 5 - object
let person = {
  name: "Person",
  age: 123,
  salary: 1542.33,
  contacts: {
    phone: "112",
    email: 'email@domain.com'
  },
  address: "Moldova"
};

person.contacts.phone = "+37312345678";

delete person.address;

console.log(person);

//Task 6 - object
let points = [{x: 1, y: 2}, {x: 3, y: 4}, {x: null, y: 4}, {x: 3, y: undefined}];

function filterValidPoints(array) {
    return array.filter(point => typeof point.x === 'number' && typeof point.y === 'number');
}

let validPoints = filterValidPoints(points);
console.log(validPoints); // [{x: 1, y: 2}, {x: 3, y: 4}]

//Task 7 - object
let person = {
  name: "Person",
  age: 123,
  salary: 1542.33,
  contacts: {
    phone: "112",
    email: "email@domain.com"
  },
  address: "Moldova",
  
  getName: function() {
    return this.name;
  },

  getAge: function() {
    return this.age;
  },

  getSalary: function() {
    return this.salary;
  },

  getContacts: function() {
    return this.contacts;
  },

  getAddress: function() {
    return this.address;
  }
};

console.log(person.getName());
console.log(person.getAge());
console.log(person.getSalary());
console.log(person.getContacts());
console.log(person.getAddress());

//Task 8 - object
const weekDays = {
  "Mo": "luni",
  "Tu": "marti",
  "We": "miercuri",
  "Th": "joi",
  "Fr": "vineri",
  "Sa": "sambata",
  "Su": "duminica",
};

function translate(days) {
  const translations = {
    "Mo": "Luni",
    "Tu": "Marti",
    "We": "Miercuri",
    "Th": "Joi",
    "Fr": "Vineri",
    "Sa": "Simbata",
    "Su": "Duminica",
  };

  const translatedDays = {};
  for (let key in days) {
    translatedDays[key] = translations[key];
  }
  
  return translatedDays;
}

const translatedWeekDays = translate(weekDays);
console.log(translatedWeekDays);

//Task 9 - object
const weekDays = {
  "Luni": "Mo",
  "Marti": "Tu",
  "Miercuri": "We",
  "Joi": "Th",
  "Vineri": "Fr",
  "Simbata": "Sa",
  "Duminica": "Su"
};

function invertObject(obj) {
  const inverted = {};
  for (let key in obj) {
    inverted[obj[key]] = key;
  }
  return inverted;
}

const invertedWeekDays = invertObject(weekDays);
console.log(invertedWeekDays);

//Task 10 - object
let person1 = {
  name: "Person",
  age: 123,
  salary: 1542.33,
  contacts: {
    phone: "112",
    email: "email@domain.com"
  },
  address: "Moldova"
};

let person2 = {
  name: "Person",
  age: 123,
  salary: 1542.33,
  contacts: {
    phone: "112",
    email: "email@domain.com"
  },
  address: "Moldova"
};

function Intersection(obj1, obj2) {
  const intersected = {};
  for (let key in obj1) {
    if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
      intersected[key] = obj1[key];
    }
  }
  return intersected;
}

const result = Intersection(person1, person2);
console.log(result);

//Task 11 - object
let students = [
  {
    name: "First",
    marks: [8, 10, 7, 5, 4]
  },
  {
    name: "Second",
    marks: [6, 9, 8, 7, 5]
  },
  {
    name: "Third",
    marks: [7, 7, 6, 5, 4]
  },
  {
    name: "Fourth",
    marks: [9, 8, 7, 6, 5]
  },
  {
    name: "Fifth",
    marks: [5, 6, 4, 7, 8]
  }
];

function calculateAverage(marks) {
  return marks.reduce((acc, curr) => acc + curr, 0) / marks.length;
}

function printNameAndAverage(students) {
  students.forEach(student => {
    const average = calculateAverage(student.marks);
    console.log(`${student.name}: ${average}`);
  });
}

function printStudentsBelowAverage(students) {
  students.forEach(student => {
    const average = calculateAverage(student.marks);
    if (average < 5) {
      console.log(`${student.name}: ${average}`);
    }
  });
}

function findMinMaxAverageStudents(students) {
  let min = Infinity;
  let max = -Infinity;
  let minStudent, maxStudent;

  students.forEach(student => {
    const average = calculateAverage(student.marks);
    if (average < min) {
      min = average;
      minStudent = student;
    }
    if (average > max) {
      max = average;
      maxStudent = student;
    }
  });

  console.log(`valoarea medie maximala: ${maxStudent.name}: ${max}`);
  console.log(`valoarea medie minimala: ${minStudent.name}: ${min}`);
}

function sortStudentsByAverageDescending(students) {
  return students.sort((a, b) => calculateAverage(b.marks) - calculateAverage(a.marks));
}

function printStudentsAboveClassAverage(students) {
  const classAverage = calculateAverage(students.flatMap(student => student.marks));
  students.forEach(student => {
    const average = calculateAverage(student.marks);
    if (average > classAverage) {
      console.log(`${student.name}: ${average}`);
    }
  });
}

console.log("Средняя оценка каждого ученика:");
printNameAndAverage(students);
console.log("\elevi cu media < 5:");
printStudentsBelowAverage(students);
console.log("\elevi cu media cea mai mare si cea mai mica:");
findMinMaxAverageStudents(students);
console.log("\elevi cu nota media in ordine descrescaatoare:");
console.log(sortStudentsByAverageDescending(students));
console.log("\elevi cu nota medie mai mare decat valoarea minima:");
printStudentsAboveClassAverage(students);

//Task 12 - object
function displayName({ first, last, company }) {
  console.log(`Name: ${first} ${last}, Company: ${company}`);
}

const person = {
  first: 'Ion',
  last: 'Creanga',
  company: 'Amintiri din copilarie SRL'
};

displayName(person);