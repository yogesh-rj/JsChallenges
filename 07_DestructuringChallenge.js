/*
  Given an object, classroom, return an array of student names

  - The classroom object is structured with two values: hasTeachingAssistant (boolean) and classList (array of strings)
  
  WRITE YOUR SOLUTION HERE
*/
const classroom = {
  hasTeachingAssistant: true,
  classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"],
};

const getStudents = (classR) => {
  const { hasTeachingAssistant, classList } = classR;
  let teacher, teachingAssitant, students;

  if (hasTeachingAssistant) {
    [teacher, teachingAssitant, ...students] = classList;
  } else {
    [teacher, ...students] = classList;
  }

  return students;
};

console.log(getStudents(classroom));