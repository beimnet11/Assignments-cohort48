'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.

// 1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
//    `hometown`) with your own information.

const nickname = document.getElementById('nickname');
const myData = ['beni', 'chicken', 'istanbul'];
const li = document.querySelectorAll('li');

const spans= document.querySelectorAll('span');
spans.forEach((span , index) =>{
    span.textContent = myData[index];
})
// 2. In JavaScript, iterate through each `<li>` and change the class to 
//    `list-item`.

const listItems = document.querySelectorAll('li');
listItems.forEach((item) => {
    item.className = 'list-item';
});