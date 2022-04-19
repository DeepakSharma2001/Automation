const fs = require("fs");

let File1kaPromise = fs.promises.readFile("f1.txt");
let File2kaPromise = fs.promises.readFile("f2.txt");
console.log(File1kaPromise);

File1kaPromise.then(function(data){
    console.log(data+"");
})

File1kaPromise.catch(function(error){
    console.log(error);
})
File2kaPromise.then(function(data){
    console.log(""+data);
})

File2kaPromise.catch(function(error){
    console.log(error);
})