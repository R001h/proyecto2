const taskMain = document.getElementById("taskMain");
const addJ = document.getElementById("add1");
const containerTask = document.getElementById("containerTask");
const prioritySelect = document.getElementById("prioritySelect");
const typeSelect = document.getElementById("typeSelect");


const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const addEventBtn = document.getElementById("addEventBtn");
const eventsContainer = document.getElementById("eventsContainer");


addJ.addEventListener("click",function(){
   const taskS = taskMain.value.trim; // calor campo text
   const selectedType = typeSelect.value; // Obtiene (tarea o evento)
   const selectedPriority = prioritySelect.value; // Obtieneprioridad seleccionada

    if(taskS ===""){
        alert("please introduce task or event") // No campos vacios
        return;
    }

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
