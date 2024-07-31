const taskMain = document.getElementById("taskMain");
const addJ = document.getElementById("add1");
const containerTask = document.getElementById("containerTask");
const prioritySelect = document.getElementById("prioritySelect");
const typeSelect = document.getElementById("typeSelect");
const eventDate = document.getElementById("eventDate");
const dateLabel = document.getElementById("dateLabel");

typeSelect.addEventListener("change",function(){
    if (typeSelect.value === "event"){
        eventDate.style.display = " inline";
        eventLabel.style.display = " inline";
    } else {
        eventDate.style.display= "none";
        eventLabel.style.display = "none";
    }
});

addJ.addEventListener("click",function(){
    const taskS = taskMain.value; // calor campo text
    const selectedType = typeSelect.value; // Obtiene (tarea o evento)
    const selectedPriority = prioritySelect.value; // Obtieneprioridad seleccionada
    const eventDateValue = eventDate.value;


    if(taskS.trim ===""){
        alert("please introduce task or event");// No campos vacios
        return;
    }

    cons divHijo = document.createElement ("div")

        ptask.innerHTML=taskS
        btnDelete.innerHTML="delete"
        btnEdit.innerHTML="edit"

        divHijo.appendChild(ptask)
        divHijo.appendChild(btnEdit)
        divHijo.appendChild(btnDelete)

        containerTask.appendChild(divHijo)  

})

///seleciona entre tarea y event///
function tSelection() {
    var x = document.getElementById("task").selected;
  document.getElementById("event").innerHTML = x;

  }
