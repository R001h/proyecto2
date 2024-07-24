
function login()
{

    let username=document.getElementById("username").value;
    let password=document.getElementById("psw").value;

    if (username=="arbol"&&password=="1234")
    { 
     window.location="portaljob.html";
    }
    else{
        alert("try again");
    }

}
