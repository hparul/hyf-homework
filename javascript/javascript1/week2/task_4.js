const class07Students = [];

function addStudentToClass(studentName) {
  if (class07Students.includes(studentName)) {
    console.log("Student" + studentName + " is already in the class");
  } else if ("Queen" == studentName) {
    class07Students.push(studentName);
    console.log("Successfully added student " + studentName + " to class");
  } else if (class07Students.length >= 6) {
    console.log("Cannot add more students to class 07");
  } else {
    class07Students.push(studentName);
    console.log("Successfully added student " + studentName + " to class");
  }
}

function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass("Peter");
addStudentToClass("Benjamin");
addStudentToClass("Oscar");
addStudentToClass("Alex");
addStudentToClass("Stephen");
addStudentToClass("Benjamin");
addStudentToClass("Morten");
addStudentToClass("Harry");
addStudentToClass("Queen");
console.log("No of students: " + getNumberOfStudents());
