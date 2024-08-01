const username = document.getElementById("username")
const psw = document.getElementById("psw")
const email= document.getElementById("email")
const sign_up=document.getElementById("signUp")
const listusername= JSON.parse(localStorage.getItem("listusername"))|| [];

sign_up.addEventListener("click", function(){
   let user ={
      username: username.value,
      psw: psw.value,
      email: email.value
   }
 if (user.username && user.psw && user.email) {
   
listusername.push(user);

console.log(listusername);
  alert(username.value);
     ///guardar en el storage(Json para entrada y salida string-entero)///
  localStorage.setItem("listusername",JSON.stringify(listusername));

  console.log ("congrats  your registration is successfull")
  window.location.href="http://127.0.0.1:5500/proyecto2/scr/index.html"
   
 } else {
   alert ("please fill the form")  
 }
})
