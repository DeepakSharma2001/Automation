// let fs = require("fs");

// let f1KaPromise = fs.promises.readFile("f1.txt");

// f1KaPromise.then(function(data){
//     console.log(data+"");
//     let f2KaPromise = fs.promises.readFile("f2.txt");
//     return f2KaPromise;
// }).then(function(data){
//     console.log(data+"");
// }).catch(function(error){
//     console.log(error);
// })

let fs = require("fs");

let arr = ['./f1.txt','./f2.txt','./f3.txt']

let filePromise = fs.promises.readFile(arr[0]);

for(let i=1;i<arr.length;i++){
    filePromise = filePromise.then(function(data){
        console.log(data+"");
        let nextFilePromise = fs.promises.readFile(arr[i]);
        return nextFilePromise;
    })
}

filePromise.then(function(data){
    console.log(data+"");
})