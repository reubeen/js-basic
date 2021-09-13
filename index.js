//document.getElementById("count").innerText =5
//let firstBatch=5
//let secondBatch=7

//let count=firstBatch+secondBatch

//console .log(count)
//create two variables,MyAge and humanDogRatio

/*let MyAge=20
let humanDogRatio=7
let Mydogage=MyAge*humanDogRatio

console.log(Mydogage)*/

//increment and decrement in javascript
/*let count = 50

count=count+50
console.log(count)
count=count-75
console.log(count)
count=count+45
console.log(count)*/

//initialize count as 0
//listen for clicks on increment button
//increment when button is clicked
//change count-el in html to reflect new count

//function increment(){
//console.log("The button was clicked")
//}
// building a race game
/*function countdown (){
   console.log(5) 
   console.log(4) 
   console.log(3) 
   console.log(2) 
   console.log(1) 

}
//setting up race
countdown()
//go
//players are running race
//race is finished
//ready for new race
countdown()*/

//lap for race games
/*let lap1=34
let lap2=33
let lap3=36

function lap(){
  let totaltime=lap1+lap2 +lap3
  console.log(totaltime)
}
lap()*/

//create a function that increments the lapscompletred variable with one
//run it three times
/*let lapscompleted=0
function lap()
{
    lapscompleted= lapscompleted+1
}
lap()
lap()
lap()
    console.log(lapscompleted)*/
//initialize count as 0
//increment the count variable button is clicked(log out)
//change the count-el in html to reflest new count

// camel case
let saveEl = document.getElementById("save-El");
let countEl = document.getElementById("count-l");
let count = 0;

console.log(saveEl);

function iplus() {
  count += 1;
  countEl.innerText = count;
}
//create a function ,save() logs out count when called
function save() {
  let countStr = count + " - ";
  saveEl.innerText += countStr;
  countEl.innerText = 0;
  count = 0;
  console.log(count);
}

/*let username="per"
let message="You have three new notofications"
let messsageToUser=message+", "+username+"!"
console.log(messsageToUser)*/

/*let welcomeEL = document.getElementById("welcome-el")
let meroname = "Rabin"
let greeting = "hello how are you "
welcomeEL.innerText = greeting + meroname+ "✌🤞";
console.log(welcomeEL);*/

let errorParagraph=document.getElementById("error") 
console.log(errorParagraph)

function purchase(){
    console.log("button clicked")
    errorParagraph.textContent="Something went wrong,Please try again."
  }

let num = 100;
let num1 = 50;
document.getElementById("num-el").textContent = num;
document.getElementById("num1-el").textContent = num1;

let sumEl = document.getElementById("sum-el");
function add() {
  console.log("add clicked");
  let result = num + num1;
  sumEl.textContent = "Sum:" + result;
}
function subtract() {
  let result = num - num1;
  sumEl.textContent = "Sum:" +result;
  console.log("subtract clicked");
}
function multiply() {
  console.log("multiply clicked");
  let result = num * num1;
  sumEl.textContent = "Sum:" + result;
}
function divide() {
  console.log("divide clicked");
  let result = num / num1;
  sumEl.textContent = "sum:" + result;
}

function On(){
  console.log("button on")
  let x = document.createElement("IMG");
  x.setAttribute("src", "img_pulpit.jpg");
  x.setAttribute("width", "304");
  x.setAttribute("height", "228");
  x.setAttribute("alt", "Thebulb");
  x.setAttribute("id", "image");
  document.body.appendChild(x);
}
function remove(){
  console.log("remove")
  document.getElementById('image').remove();

}

