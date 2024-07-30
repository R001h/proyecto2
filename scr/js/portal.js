const taskMain = document.getElementById("taskMain")
const addJ = document.getElementById("add1")

addJ.addEventListener("click",function(){
    let taskS = taskMain.value
    let ptask = document.createElement("p")

    let divHijo = document.createElement("div")
    let btnDelete= document.createElement("button")
    let btnEdit= document.createElement("button")


        ptask.innerHTML=taskS
        btnDelete.innerHTML="delete"
        btnEdit.innerHTML="edit"

        divHijo.appendChild(ptask)
        divHijo.appendChild(btnEdit)
        divHijo.appendChild(btnDelete)

        containerTask.appendChild(divHijo)
        
    

})