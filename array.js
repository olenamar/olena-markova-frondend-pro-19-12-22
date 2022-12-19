const students = ['Olenka', 'Mykhailo', 'Artem', 'Pavel', 'Vladliena', 'Alla', 'Ganna', 'Inna', 'Kostiantyn', 'Alena']; 
console.log(students);

students.unshift('Vadym', 'Denis'); 
console.log(students);

students.push('Maksym', 'Alexander'); 
console.log(students);

students.pop(); 
console.log(students);

students.shift(); 
console.log(students);

const nameStudent = prompt('Enter your name'); 
const list = students.includes(nameStudent);
console.log(`${nameStudent} is have on the ${list}`);

const newStudents = students.slice(3, 7); 
console.log(newStudents);

const studentsTwo = ['Igor', 'Veronika', 'Nadiya', 'Nataliya', 'Maksim']; 
const unitedStutents = students.concat(studentsTwo);
console.log(unitedStutents);

unitedStutents.splice(3, 1); 
console.log(unitedStutents);

unitedStutents.splice(5, 1, 'Ivan'); 
console.log(unitedStutents);

console.log(unitedStutents.join(' + '));