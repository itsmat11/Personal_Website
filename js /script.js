
const courseList = [
    { code: "ACIT 1620", name: "Web Fundamental Technologies" },
    { code: "ACIT 1630", name: "Database Systems" },
    { code: "ACIT 1420", name: "Introduction to System Administration" }
  ];
  

  let courseCode = prompt("Please enter a 4-digit course code:");
  while (isNaN(courseCode) || courseCode.toString().length !== 4) {
    courseCode = prompt("Please enter a valid 4-digit course code:");
  }
  

  console.log(courseList);
  
