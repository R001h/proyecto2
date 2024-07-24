let username = document.getElementById("username");
let psw = document.getElementById("psw");
let email= document.getElementById("email");

/*  get info  */
function sign_up(){
    username=document.getElementById("username").value;
    psw=document.getElementById("psw").value;
    email=document.getElementById("email").value;

    alert (username+psw+email);



    /////CREAR UN OBJETO QUE ALMANCENE LOS DATOS D UN USUARIO OSEA DE UNA PERSONA
    /// ESTOS DATOS QUE SON UN OBJETO SE DEBEN DE ALMACENAR EN UNA LISTA QUE VOY
    // A ENVIAR A MI LOCALSTORAGE

   /* save in tha storage  */
   username=localStorage.setItem("username",JSON.stringify(username));
   psw=localStorage.setItem("psw",JSON.stringify(psw));
   email=localStorage.setItem("email",JSON.stringify(email));

  /* get from storage  */
   username= JSON.parse(localStorage.getItem("username",username));
   psw=JSON.parse(localStorage.getItem("psw",psw));
   email=JSON.parse(localStorage.getItem("email",email));

  
}
