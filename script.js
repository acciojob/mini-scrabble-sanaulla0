//your code here

let box = document.getElementById("evaluatedText")
let countElement = document.getElementById("letterCount")
// let count = countElement.innerHTML;

function startcount(){
     let count=box.value;
     countElement.innerHTML=count.length;
     console.log(count.length);
}
  

box.addEventListener("keyup",startcount)

