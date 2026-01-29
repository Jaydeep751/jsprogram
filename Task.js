let student = {
    name: "  first name  ",
    email: "User@123.com",
    course: "javascript,React,Node",
    marks: [45, 78, 60, 90, 41, 33],
    hobbies: ["music", "cricket", "reading"],
    address: ["india", "gujrat", "ahmedabad"]
};

// -------- String operations --------
console.log(student.name.trim(), student.name.toUpperCase());
console.log(student.email.toLowerCase());
console.log(student.course.includes("React"));
console.log(student.course.indexOf("Node"));

student.course = student.course.replace("javascript", "js");
console.log(student.course);

console.log(student.course.split(","));  // convert string to array
console.log(student.name.length);

// -------- Array operations --------
student.hobbies.push("swimming");
console.log(student.hobbies);

student.hobbies.pop();  // remove last hobby
console.log(student.hobbies);

student.hobbies.unshift("drawing");  // add at beginning
console.log(student.hobbies);

let courseArray = student.course.split(",");  // string → array
let mergedArray = student.hobbies.concat(courseArray);
console.log(mergedArray);

let isReactPresent = courseArray.includes("React");
console.log(isReactPresent);

console.log(student.course.indexOf("js"));

let firstTwoMarks = student.marks.slice(0, 2);
console.log(firstTwoMarks);

// Remove marks less than 40
for (let i = student.marks.length - 1; i >= 0; i--) {
    if (student.marks[i] < 40) {
        student.marks.splice(i, 1);
    }
}
console.log(student.marks);

// Join hobbies as string
let hobbyStr = student.hobbies.join(",");
console.log(hobbyStr);

// Add 5 to each mark
console.log(student.marks.map(mark => mark + 5));

// Filter marks greater than 40
console.log("filter:", student.marks.filter(mark => mark > 40));

// Find first mark above 80
let firstAbove80 = student.marks.find(mark => mark > 80);
console.log(firstAbove80);

// Print each hobby
student.hobbies.forEach(hobby => console.log(hobby));

// Sort marks numerically
student.marks.sort((a, b) => a - b);
console.log(student.marks);

// Reverse marks
console.log(student.marks.reverse());

// Flatten address array (not needed here, but kept for example)
let flatAddress = student.address.flat();
console.log(flatAddress);

// Add result based on marks
student.result = student.marks.every(mark => mark >= 40) ? "pass" : "fail";
console.log("result:", student.result);

// Final student object
console.log(student);
