const courseList = [
    { code: "ACIT 1620", name: "Web Fundamental Technologies" },
    { code: "ACIT 1630", name: "Database Systems" },
    { code: "ACIT 1420", name: "Introduction to System Administration" },
  ];
  
  let courseCode = prompt("Please enter a 4-digit course code:");
  while (isNaN(courseCode) || courseCode.toString().length !== 4) {
    courseCode = prompt("Please enter a valid 4-digit course code:");
  }
  let courseFound = false;
  for (let i = 0; i < courseList.length; i++) {
    if (courseList[i].code.includes(courseCode)) {
      console.log("Yes, I am taking course: " +  courseList[i].code + " - " + courseList[i].name);
      courseFound = true;
      break;
    }
  }
  
  if (!courseFound) {
    const newCourse = {
      code: "ACIT " + courseCode,
      name: null,
    };
    courseList.push(newCourse);
    console.log(`Added new course with code: ACIT ${courseCode}`);
  }
  
  console.log(courseList);