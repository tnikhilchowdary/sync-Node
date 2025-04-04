
console.log("Hello, Nikhil! Welcome to backend development.");

// Path globals
console.log("Current directory:", __dirname);
console.log("Current file:", __filename);

// Using the process object
console.log("Your System Info:");
console.log("Platform:", process.platform);
console.log("Node version:", process.version);

// Custom function
function greet(name) {
  return `👋 Hello, ${name}! Ready to master backend?`;
}

console.log(greet("Nikhil"));

//Create a folder
const fs = require("fs");
const path = require("path");


const folderpath = path.join(__dirname, "myFolder");

if(!fs.existsSync(folderpath)){
    fs.mkdirSync(folderpath);
    console.log("Folder Created", folderpath);
}
else{
    console.log("Folder Already Exists");
}

//Write to a File

const filepath = path.join(folderpath, 'message.txt');
fs.writeFileSync(filepath, "\nThis is day2 of mastering Node.js file system");
console.log(filepath);

//Read file content
const content = fs.readFileSync(filepath, "utf-8");
console.log(content);

fs.appendFileSync(filepath, "\n This is new content appended to the file");
console.log("\n Content appended to file.");



//Read Updated content
const updatedContnet = fs.readFileSync(filepath, "utf-8");
console.log(updatedContnet);


//delete a file
if(fs.existsSync(filepath)){
  fs.unlinkSync(filepath);
  console.log("File Deleted Successfully", filepath);
}
else{
  console.log("File does not exist", filepath);
}