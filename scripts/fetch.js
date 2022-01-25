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
export {getPeople, People};