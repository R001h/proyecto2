const username = document.getElementById("username")
const psw = document.getElementById("psw")
const email= document.getElementById("email")
const sign_up=document.getElementById("sign_up")
  ///guardar en el storage(Json para entrada y salida string-entero)///
const listusername= JSON.parse(localStorage.getItem("listusername")||[])

sign_up.addEventListener("click",function () {

    console.log(2);
    const  userDatabase = username.value;
    const  pswDatabase = psw.value;
   
    let userknow = false

    for (let index = 0; index < listusername.length; index++) {
        const user = listusername[index]
            //consulta lo guardado con ingresado////
        if (user.username === userDatabase && user.psw === pswDatabase) {
            userknow = true;
            break; ///sale de ciclo//  
        }
        }
        if (userknow){
            window.location="portaljob.html";
        } else{
            alert("User name or password incorrect")
        }

       
})




