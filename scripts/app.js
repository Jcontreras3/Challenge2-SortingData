let GetId = document.getElementById('GetId');
let First = document.getElementById('First');
let Last = document.getElementById('Last');
let GetEmail = document.getElementById('GetEmail');
let GetHeight = document.getElementById('GetHeight');
let GetAge = document.getElementById('GetAge');

let People = [];
 function getPeople(){
    fetch("../data/data.json")
    .then (response => response.json())
    .then ( data => {
        console.log(data.People)
        People = data.People;
    })
}
getPeople()

GetId.addEventListener('click', () =>{
    
});