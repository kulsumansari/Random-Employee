
let generateEmployee =document.getElementById("generateEmp")

const randomEmployee = () => {
    let employee = team[Math.floor(Math.random()*team.length)];
    displayOnDOM(createDiv(employee));
  };

generateEmployee.addEventListener("click", randomEmployee);

const createDiv=(e) =>{
    const card=
        `<div class="card" style="width: 18rem;" id="${e.empId}">
            <div class="card-body">
                <h5 class="card-title">${e.name}</h5>
                <h6>${e.company}</h6>
                <a href="#" class="btn btn-primary">View Profile</a>
                <button class="btn btn-danger deleteEmp" onclick="deleteEmployee(event,'${e.empId}')">
                    X
                </button>
            </div>
        </div>`;
    
    return card;
}

const displayOnDOM =(markup) =>{
    teamDiv.innerHTML =markup;
}

const deleteEmployee = (event, cardId) =>{
    // console.log("Delete this Employee" , cardId);
    document.getElementById(cardId).remove();
}