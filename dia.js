let boton = document.getElementById("calcular");
let respuesta = document.getElementById("ans")

boton.addEventListener("click",dayOfWeek);

function dayOfWeek() {
    let day =+ document.getElementById("day").value;
    let month =+ document.getElementById("month").value;
    let year =+ document.getElementById("year").value;

    let t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
    //let t = [0, 3, 3, 6, 1, 4, 5, 2, 5, 0, 3, 5];
     if (month < 3)
            year -= 1;           
    let dayOfWeek = Math.round((year + year/4 - year/100 + year/400 + t[month-1] + day) % 7);
    
    
    /* respuesta.innerHTML=`El dia de la semana es ${dayOfWeek}`; */

    switch (dayOfWeek) {
        case 0:
            respuesta.innerHTML=`El dia de la semana es Domingo, no laborable`;
            break;
    
        case 1:
            respuesta.innerHTML=`El dia de la semana es Lunes, laborable`;
            break;
    
        case 2:
            respuesta.innerHTML=`El dia de la semana es Martes, laborable`;
            break;
    
        case 3:
            respuesta.innerHTML=`El dia de la semana es Miercoles, laborable`;
            break;
        
        case 4:
            respuesta.innerHTML=`El dia de la semana es Jueves, laborable`;
            break;
    
        case 5:
            respuesta.innerHTML=`El dia de la semana es Viernes, laborable`;
            break;
    
        case 6:
            respuesta.innerHTML=`El dia de la semana es Sabado, no laborable`;
            break;
    
        default:
            break;
    }
   
    
/*     switch (dayOfWeek) {
        case 6:
        case 0:
            respuesta.innerHTML=`El dia de la semana es no laborable`;
            break;
    
        default:
            respuesta.innerHTML=`El dia de la semana es laborable`;
            break;
    }
 */

}


