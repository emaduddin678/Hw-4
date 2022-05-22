// select from html

// document.getElementById("heading1").innerHTML = "We change by js code";
// // we can do same by using a variable
// var select = document.getElementById("heading1");
// select.innerHTML = "new change by variable in js";

// document.getElementById("para").innerHTML= "This is change paragraph";
// document.getElementById("heading2").innerHTML = "goodbye goodbye";
// document.getElementsByTagName("h1")[0].innerHTML = "select by tag name";

// var trr = [1,2,3,4]
// const clone = (arr) => arr.map((x) => x*x);
// console.log(clone(trr))

// From 5-21

// document.getElementById("para").innerHTML = "I change the value of p tag by using js";
// let select = document.getElementById("para");
// select.innerHTML = "I change the Text using variable in js";
// document.getElementsByTagName("p");
// document.getElementById("anchor2").innerHTML = "New Link change by js";
// document.querySelector(".canchor");


// let HW = "start from here";

document.getElementById("heading1").innerHTML = "Change 1 by using js with id";
// document.getElementsByClassName("head").innerHTML = "Change 2 by using js with class name";
// document.getElementsByClassName("head").innerTEXT = "Change 2 by using js with class name";
// document.getElementsByTagName("p").innerHTML = "Change 3 using Tag name in js";
// document.getElementsByTagName("p").innerTEXT = "Change 3 using Tag name in js";
document.querySelector(".canchor").innerHTML = "Change 4 by query selector in css class, which is change only first class, not multiple class";
document.querySelectorAll(".canchor").innerHTML = "it's not working";
// document.getElementsByTagName("p").innerHTML = "change tha p";
document.getElementById("para").innerText = "change by id with innerText"
// so therefor, we have to put Array number in [0] or [1]; 

document.querySelectorAll(".canchor")[1].innerHTML = "now its working";
document.getElementsByClassName("head")[1].innerHTML = "change by class name.";
let x = document.getElementsByTagName("h1");
x.innerHTML = "both change, it's not workin."
x[0].innerHTML = "but now it's workinh, using variable and index number";
// console.log(x[0]);

let linkvar = document.getElementsByClassName("canchor")[0];
linkvar.innerHTML = "hello world!";
linkvar.style.textDecoration = "none";
linkvar.style.color = "green";
linkvar.style.fontWeight = "bold";
linkvar.style.fontSize = "26px";
linkvar.href = "http://school of skills.com";


// Creating 5 html element by js 


        // This is 1st create of tag

let divTag = document.getElementsByClassName("my-div")[0];
divTag.style.backgroundColor = "Blue";
divTag.style.color = "white";

let heading3 = document.createElement("h2");
let textForHeading3 = document.createTextNode("This is heading 3 (h2), which is create by js");
heading3.appendChild(textForHeading3);
// we create a tag h2 tag wits some text 
divTag.appendChild(heading3);

        // This is 2nd create of Tag 
let pTag = document.createElement("p");
let textForP = document.createTextNode("I am p tag created in js");
pTag.appendChild(textForP);
divTag.appendChild(pTag);
pTag.style.fontSize= "28px";

        // This is 3rd creation of Tag
let newDivTag = document.createElement("div").appendChild(document.createTextNode("This is anothe div"));
let bodytag = document.getElementsByTagName("body")[0];
bodytag.appendChild(newDivTag);

        // This is 4th creation of p tag with easiest way  
const para = document.createElement("p");
para.innerText = "This is a paragraph";
document.body.appendChild(para);

        // This is 5th creation of p tag with easiest way  
const divTag5 = document.createElement("div");
const pTag5 = document.createElement("h1");

pTag5.innerText = "New div with text";
divTag5.appendChild(pTag5)
document.body.appendChild(divTag5);


const btn = document.createElement("button");
btn.innerText =  "Click me";
divTag5.appendChild(btn);


// const att = document.createAttribute("on");
// // Set a value of the class attribute
// // att.value = "democlass";
// // Add the class attribute to the first h1;
// document.getElementsByTagName("h1")[0].setAttributeNode(att);





























