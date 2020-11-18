var req = require('fs'); 


// write the file 
console.log('\n');
console.log('Creating the file ');
let data = "This is a file containing a collection of data."; 
req.writeFile("Demo.txt", data, () => { 
    console.log("File written successfully\n"); 
}); 

//read file
console.log('\n');
console.log('Reading the file');
req.readFile('Demo.txt', 'utf8', function(data){ 
    // Display the file content 
    console.log(data); 
}); 
console.log('readFile called');


// get file information
req.stat("./Demo.txt", (stat) => {
  console.log(stat);
});