// let nombre = "Belen";
// let apellido = "Gabrielli";
// console.log(nombre + " " + apellido);
// let num1 = 120;
// let num2 = 20;
// let suma = num1 + num2;
// console.log("Suma: ", suma);

// let nota = 3;

// if(nota < 4){
//         console.log( "Aplazado");
//     } else if(nota < 7)
//         {
//             console.log("Desaprobado");
//         }else if(nota < 9)
//             {
//                 console.log("Aprobado");
//             }else
//             {
//                 console.log("Sobresaliente");
//             }


// let nombres=["Diego","Anabel","Esteban"];
// console.log(nombres);
// console.log(nombres[0]);
// console.log(nombres[2]);
// console.log("Cantidad de nombres: ",nombres.length);
// for(let i= 0; i<nombres.length; i++)
//     {
//         console.log(nombres[i]);
//     }

let topping = "Oreo";
let precio = 0;
let preciofinal= 0;
let helado = 200;

if(topping == "Oreo")
    {
        precio = 10;
    } else if(topping == "KitKat")
        {
            precio = 15;
        }else if(topping == "Kinder")
            {
                precio = 25;
            }else{
                console.log("No tenemos este topping.");
            }

preciofinal = helado + precio;
console.log("El helado cuesta $ " + preciofinal);

let menu= "Carne";
switch(menu)
{
    case "Carne":
        console.log("Se ofrece como bebida vino.");
        break;
    case "Pescado":
        console.log("Se le ofrece como bebida vino blanco.");
        break;
    case "Verdura":
        console.log("Se le ofrece como bebida agua.");
        break;
    default:
        console.log("Elija Carne, Pescado o Verdura.");
        break;
}

let animales= ["Perros", "Gatos", "Conejos", "Cobayos"];
animales.push("Tortuga");
for(let i = 0; i<animales.length; i++)
    {
        console.log(animales[i]);
    }
