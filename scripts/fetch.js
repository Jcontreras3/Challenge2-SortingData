let People = [];

let InjectHere = document.getElementById('InjectHere');

function Create(Idx){
    let Id1 = document.createElement('li');
    Id1.className = "list-group-item BgGold Maroon";
    Id1.textContent = Idx.Id;
    let col1 = document.createElement('div');
    col1.className = "col-2";
    col1.appendChild(Id1);

    let Id2 = document.createElement('li');
    Id2.className = "list-group-item BgGold Maroon";
    Id2.textContent = Idx.FirstName;
    let col2 = document.createElement('div');
    col2.className = "col-2";
    col2.appendChild(Id2);

    let Id3 = document.createElement('li');
    Id3.className = "list-group-item BgGold Maroon";
    Id3.textContent = Idx.LastName;
    let col3 = document.createElement('div');
    col3.className = "col-2";
    col3.appendChild(Id3);

    let Id4 = document.createElement('li');
    Id4.className = "list-group-item BgGold Maroon";
    Id4.textContent = Idx.Email;
    let col4 = document.createElement('div');
    col4.className = "col-2";
    col4.appendChild(Id4);

    let Id5 = document.createElement('li');
    Id5.className = "list-group-item BgGold Maroon";
    Id5.textContent = Idx.Height;
    let col5 = document.createElement('div');
    col5.className = "col-2";
    col5.appendChild(Id5);

    let Id6 = document.createElement('li');
    Id6.className = "list-group-item BgGold Maroon";
    Id6.textContent = Idx.Age;
    let col6 = document.createElement('div');
    col6.className = "col-2";
    col6.appendChild(Id6);
    let Row = document.createElement('div');
    Row.className = "row";
    Row.appendChild(col1);
    Row.appendChild(col2);
    Row.appendChild(col3);
    Row.appendChild(col4);
    Row.appendChild(col5);
    Row.appendChild(col6);
    InjectHere.appendChild(Row);

    
}

let FirstArr = [];
function GetFirstName(){
    fetch("../data/data.json")
    .then(resp => resp.json())
    .then(data => {
        People = data.People;
        let orderOfList = People.map(obj => obj.FirstName).sort();
        for(let i = 0; i< People.length; i++)
        {
            for(let j = 0; j< orderOfList.length; j++)
            {
               if(People[j].FirstName == orderOfList[i])
               {
                   FirstArr.push(People[j]);
               }
            }
        }
        let newSet = new Set(FirstArr);
        let FArray = Array.from(newSet.values())

        for( let i = 0; i<FArray.length; i++){
            Create(FArray[i]);
        };
    })
}

let FrevArr = [];
function GetFirstRev(){
    fetch("../data/data.json")
    .then(resp => resp.json())
    .then(data => {
        People = data.People.reverse();
        let orderOfList = People.map(obj => obj.FirstName).sort();
        for(let i = 0; i< People.length; i++)
        {
            for(let j = 0; j< orderOfList.length; j++)
            {
               if(People[j].FirstName == orderOfList[i])
               {
                   FrevArr.push(People[j]);
               }
            }
        }
        let newSet = new Set(FrevArr);
        let RArray = Array.from(newSet.values())

        for( let i = 0; i<RArray.length; i++){
            Create(RArray[i]);
        };
    })
}

export{Create, InjectHere,GetFirstName,GetFirstRev}
// GetId.addEventListener('click', () =>{

// });