import {Create, InjectHere,GetFirstName,GetFirstRev} from "./fetch.js"

// let GetId = document.getElementById('GetId');
// let First = document.getElementById('First');
// let Last = document.getElementById('Last');
// let GetEmail = document.getElementById('GetEmail');
// let GetHeight = document.getElementById('GetHeight');
// let GetAge = document.getElementById('GetAge');
let Btn1 = document.getElementById('Btn1');
let Btn2 = document.getElementById('Btn2');
let Btn3 = document.getElementById('Btn3');
let Btn4 = document.getElementById('Btn4');
let Btn5 = document.getElementById('Btn5');
let Btn6 = document.getElementById('Btn6');
let Btn7 = document.getElementById('Btn7');
let Btn8 = document.getElementById('Btn8');
let Btn9 = document.getElementById('Btn9');
let Btn10 = document.getElementById('Btn10');
let Btn11 = document.getElementById('Btn11');
let Btn12 = document.getElementById('Btn12');

 function getPeople(){
    fetch("../data/data.json")
    .then (response => response.json())
    .then ( data => {
        //console.log(data.People)
        People = data.People;

        for(let i = 0; i<People.length; i++){
            Create(People[i]);
        }
    })
}
//getPeople()

function PeopleRev (){ 
        fetch("../data/data.json")
        .then((resp) => resp.json())
        .then((data) =>{
            People = data.People.reverse();
           console.log(People)
           for(let i = 0; i<People.length; i++){
            Create(People[i]);
        }
       })
    }
    

Btn1.addEventListener('click', () =>{
    getPeople();
    // console.log("Hi")
})

Btn2.addEventListener('click', () =>{
    PeopleRev();
});

Btn3.addEventListener('click', () =>{
    GetFirstName();
    console.log("Hit")
})
Btn4.addEventListener('click', () =>{
    GetFirstRev();
})