const students = ["Sam", "Cihan", "Ariana", "Yaslin", "Kevin"]

console.log(students[2]); // Ariana
console.log(students.length); // 5

students.push("Lorenzo");
students.unshift("Andrew");

console.log(students); // Andrew, Cihan, Ariana, Yaslin, Kevin, Lorenzo
