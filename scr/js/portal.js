const taskMain = document.getElementById("taskMain")
const addJ = document.getElementById("add1")

addJ.addEventListener("click",function(){
   const taskS = taskMain.value
   const ptask = document.createElement("p")

   const divHijo = document.createElement("div")
   const btnDelete= document.createElement("button")
   const btnEdit= document.createElement("button")

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

  