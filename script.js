let inputUsuario = document.getElementById("correo")
let inputPassword = document.getElementById("password")
let boton= document.getElementById("boton")




boton.addEventListener("click",(e)=>{
    e.preventDefault()
    
if(inputUsuario.value==="" || inputPassword.value===""){
    Swal.fire({
        title: '¡Atención!',
        text: '¡Por favor complete todos los campos!',
        icon: 'warning',
        confirmButtonText: 'OK'
      })
