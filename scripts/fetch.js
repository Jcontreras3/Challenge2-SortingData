let People = [];
 function getPeople(){
    fetch("../data/data.json")
    .then (response => response.json())
    .then ( data => {
        //console.log(data.People)
        People = data.People;
    })
}
getPeople()

function PeopleID (){ 
   fetch("../data/data.json")
   .then((resp) => resp.json())
   .then((data) =>{
       People = data.People.reverse();
       console.log(People)
   })
}
PeopleID();

GetId.addEventListener('click', () =>{

});