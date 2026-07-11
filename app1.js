const ObtenerDatos = ()=>{
    const repuesta = await fetch("http://UrlApi",{
        method:"POST",
        headers:{"Content-Type":aplication/json},
        body:JSON.stringify({username:"anderson",pass:"clave2345"})
    });
const data = repuesta.json();
console.log("Estamos viendo el token",data);

}
