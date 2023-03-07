const courseList = [
    { code: "ACIT 1620", name: "Web Fundamental Technologies" },
    { code: "ACIT 1630", name: "Database Systems" },
    { code: "ACIT 1420", name: "Introduction to System Administration" },
  ];
  
  let course_code = prompt("Please enter a 4-digit course code:");
  while (isNaN(course_code) || course_code.toString().length !== 4) {
    courseCode = prompt("Please enter a valid 4-digit course code:");
  }
  let course_new = false;
  for (let i = 0; i < courseList.length; i++) {
    if (courseList[i].code.includes(course_code)) {
      console.log(`Yes, I am taking course: ${courseList[i].code} - ${courseList[i].name}`);
      course_new = true;
      break;
    }
  }
  
  if (!course_new) {
    const add_course = {
      code: "ACIT " + course_code,
      name: null,
    };
    courseList.push(add_course);
    console.log(`Add new course code: ACIT ${course_code}`);
  }
  
  console.log(courseList);