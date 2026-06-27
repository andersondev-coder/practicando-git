//Consumiendo API-CGG

const login  = async ()=>{

        const repuesta =  await fetch("http://lxtdnetcor003:10492/api/Auth/login",{

            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                    username:"user",
                    password:"clave"
            })
        });
const data = await repuesta.json();

console.log("Aqui tiene que ir el Token",data);
}
