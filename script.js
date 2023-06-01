// Math: Exercise 1
// Write a JavaScript function to find the highest value in an array.
const postivNumbers = [12,34,56,1];
const negativNumbers = [-12,-34,0,-56,-1];

function checkWhoIsBigger(arr){
    return Math.max(...arr) //ES6
    //return Math.max.apply(null, arr) //ES5
    //Math.max(...postivNumbers);
};

function tester(){
    document.getElementById("ex_1a").innerHTML = checkWhoIsBigger(postivNumbers)
    document.getElementById("ex_1b").innerHTML = checkWhoIsBigger(negativNumbers)
    document.getElementById("input_array_result").innerHTML = "Is '[1, 2, 4, 0]' an array ? " + checkIfInputIsAnArray(myArray);
    document.getElementById("input_string_result").innerHTML = "Is 'w3resource' an array ? " + checkIfInputIsAnArray(myText);
    document.getElementById("trn_tostring_result").innerHTML = arrayToString(myColor);
    document.getElementById("sort_items_result").innerHTML = sortItemsInArray(arr1);
    document.getElementById("remove_items_result").innerHTML = removeElementFromArray(arr2,5);
}

// Math: Exercise 2
// Write a JavaScript function to find the lowest value in an array.

function checkWhoIssmaller(){
    document.getElementById("ex_2a").innerHTML = Math.min(...postivNumbers);
    document.getElementById("ex_2b").innerHTML = Math.min(...negativNumbers);
};

// Math: Exercise 3
// Write a JavaScript function to round a number to decimal place.

function roundANumberToDecimal(){
    document.getElementById("ex_3a").innerHTML = Math.round(12.375 * 100)/100;
    document.getElementById("ex_3b").innerHTML = Math.round(-10.3079499 * 100)/100;
    document.getElementById("ex_3c").innerHTML = Math.round(10.49999 * 100)/100;
    document.getElementById("ex_3d").innerHTML = Math.round(10.49999 * 100)/100;

}

// Math: Exercise 4
// Write a JavaScript function to calculate the sum of values in an array.

function calculateTheSumOfValues(total, num){
    return total + num;
}
let numOr0 = n => isNaN(n) ? 0 : n
const numbers1 = [1, 2, 3];
const numbers2 = [100, -200, 3];
const numbers3 = [1, 2,'a',3];
document.getElementById("ex_4a").innerHTML = numbers1.reduce(calculateTheSumOfValues);
document.getElementById("ex_4b").innerHTML = numbers2.reduce(calculateTheSumOfValues);
document.getElementById("ex_4c").innerHTML = numbers3.reduce((a, b) => numOr0(a) + numOr0(b));

// Math: Exercise 5
// Write a JavaScript function to round up an integer value to the next multiple of 5.

function roundUpANumber(num){
    return Math.ceil(num/5)*5;
}

document.getElementById("ex_5a").innerHTML = roundUpANumber(32);
document.getElementById("ex_5b").innerHTML = roundUpANumber(137);

// String/Text: Exercise 1
// Write a JavaScript function to check whether an 'input' is a string or not.

function checkIfStringOrNot(){
    let myInput = document.getElementById("value_input").value;
    if (isNaN(myInput)){
        document.getElementById("ex_string_1").innerHTML = "true";
    }else {document.getElementById("ex_string_1").innerHTML = "false";}
}

// String/Text: Exercise 2
// Write a JavaScript function to capitalize the first letter of a string.


function capitalizeTheFirstLetter(){
    let string = document.getElementById("ex_string_2").innerText;
    document.getElementById("ex_string_2").innerHTML = string.charAt(0).toUpperCase() + string.slice(1);
}

// String/Text: Exercise 3
// Write a JavaScript function to repeat a string for a specified time.

let textToRepeat = document.getElementById("ex_string_3").innerText;
let result = textToRepeat.repeat(4);
function repeatText(){
    document.getElementById("ex_string_3").innerHTML = result;
}

// String/Text: Exercise 4
// Write a JavaScript function to capitalize each word in the string.

function capitalizeTheText(){
    let string = document.getElementById("ex_string_4").innerText;
    document.getElementById("ex_string_4").innerHTML = string.toUpperCase();
}

// String/Text: Exercise 5
// Write a JavaScript function to uncapitalize each word in the string.

function unCapitalizeTheText(){
    let string = document.getElementById("ex_string_5").innerText;
    document.getElementById("ex_string_5").innerHTML = string.toLowerCase();
}

// Datetime: Exercise 1
// Write a JavaScript function to get the current date.

function currentDate(){
   const currentDate = new Date();
   document.getElementById("ex_date_1a").innerHTML = 
   (currentDate.getMonth()+1) + "/" + currentDate.getDate() + "/" + currentDate.getFullYear();
   document.getElementById("ex_date_1b").innerHTML = 
   (currentDate.getMonth()+1) + "-" + currentDate.getDate() + "-" + currentDate.getFullYear();
}


// Datetime: Exercise 2
// Write a JavaScript function to get the number of days in a month.

function getNumberOfDaysInAMonth(year, month){
    return new Date(year, month, 0).getDate();
}
  
  const daysInJanuary = getNumberOfDaysInAMonth(2012, 1);
  const daysInFabruare = getNumberOfDaysInAMonth(2012, 2);
  const daysInSeptember = getNumberOfDaysInAMonth(2012, 9);
  const daysInDecember = getNumberOfDaysInAMonth(2012, 12);

  function NumberOfDays(){
    document.getElementById("ex_date_2a").innerHTML = daysInJanuary;
    document.getElementById("ex_date_2b").innerHTML = daysInFabruare;
    document.getElementById("ex_date_2c").innerHTML = daysInSeptember;
    document.getElementById("ex_date_2d").innerHTML = daysInDecember;
  }

// Datetime: Exercise 3
//   Write a JavaScript program to calculate age.
const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

console.log(getAge('1982-11-04'))
console.log(getAge('1962-01-01'))


// Datetime: Exercise 4
// Write a JavaScript function to get time differences in hours between two dates.

function differencesInHours(){
 let date1 = new Date(2018, 11, 24, 12, 33, 30, 0).getHours()
 let date2 = new Date(2018, 11, 24, 10, 33, 30, 0).getHours()

 return date1-date2
}

console.log(differencesInHours());

// Test Data :
// dt1 = new Date("October 13, 2014 08:11:00");
// dt2 = new Date("October 13, 2014 11:13:00");
// console.log(diff_hours(dt1, dt2));



// Array: Exercise 1 
// Write a JavaScript function to check whether an `input` is an array or not.

const myArray = [1, 2, 4, 0];
let myText = 'w3resource';

function checkIfInputIsAnArray(check){
    return Array.isArray(check)
}


// Array: Exercise 2 
// Write a simple JavaScript program to join all elements of the following array into a string.

const myColor = ["Red", "Green", "White", "Black"];

function arrayToString(transferToString){
    return transferToString.toString()
}


// Array: Exercise 3 
// Write a JavaScript program to sort the items of an array.

const arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

function sortItemsInArray(sortAnArray){
   return sortAnArray.sort(function(a, b){return a-b}).toString();
}

// Array: Exercise 4
// Write a JavaScript function to remove a specific element from an array.

const arr2 = [2, 5, 9, 6];

function removeElementFromArray(removeEl,n){

   const index = removeEl.indexOf(n);
   if (index > -1) {
    removeEl.splice(index, 1);
}
   return removeEl;
}


// Array: Exercise 5
// Write a JavaScript function to find an array containing a specific element.

function checkElementFromArray(removeEl,n){
    for (var i = 0; i < removeEl.length; i++) {
        if (removeEl[i] === n) {
            return true;
        }
    }
    return false;
}

console.log(checkElementFromArray(arr2,5));


// Array: Exercise 6
// Write a JavaScript function to get random items from an array.

function getRendomItemsFromArray(arrayItems){

        const randomIndex = Math.floor(Math.random() * arrayItems.length);
        const item = arrayItems[randomIndex];
        return item;
    }
        
    console.log(getRendomItemsFromArray(arr2));


