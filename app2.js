// Q1
function Add(n) {
    return function(x) {
      return x + n;
    }
  }
  
  const addFive = Add(5);
  console.log(addFive(10)); 
  console.log(addFive(20));
//   ================================================================
// Q2
function search(arr, val) {
    if (arr.length === 0) {
      return false; 
    } else if (arr[0] === val) {
      return true; 
    } else {
      return search(arr.slice(1), val);
    }
  }
const arr = [1, 2, 3, 4, 5];
console.log(search(arr, 3)); 
console.log(search(arr, 6)); 

// ===================================================================
// Q3
function addParagraph(text) {
    const newParagraph = document.createElement("p"); 
    newParagraph.textContent = text; 
    document.body.appendChild(newParagraph); 
  }
addParagraph("Hello, world!"); 

// ===================================================================
// Q4
 function addListItem(text) {
    const list = document.querySelector("ul"); 
    const newListItem = document.createElement("li"); 
    newListItem.textContent = text;
    list.appendChild(newListItem); 
  }
addListItem("Item 1");

// ====================================================================
// Q5
function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color; 
  }
const myElement = document.getElementById("myElement"); 
  changeBackgroundColor(myElement, "red"); 
  
//  ===================================================================
// Q6
function saveObjectToLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object)); 
  }
const myObject1 = { name: "John", age: 30, city: "New York" }; 
  saveObjectToLocalStorage("myObjectKey", myObject1); 

//   ===================================================================
// Q7
function getObjectFromLocalStorage(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
 const myObject = getObjectFromLocalStorage("myObjectKey"); 
  console.log(myObject); 

//   ===================================================================
// Q8
function saveObjectPropertiesToLocalStorage(object) {

    for (const [key, value] of Object.entries(object)) {
      localStorage.setItem(key, JSON.stringify(value)); 
    }
  
    const retrievedObject = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      retrievedObject[key] = JSON.parse(localStorage.getItem(key));
    }
    return retrievedObject;
  }
const myObject3 = { name: "John", age: 30, city: "New York" }; 
  const retrievedObject = saveObjectPropertiesToLocalStorage(myObject3); 
  console.log(retrievedObject);