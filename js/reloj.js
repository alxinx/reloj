let intervalo = 1000
function showMeHora(){
    const tiempo = new Date();
    let hora = `${tiempo.getHours()}:${tiempo.getMinutes()}:${tiempo.getSeconds()}`;
    let dia =  getDay(tiempo.getDay());//Convierto el  nro del dia en Lunes,martes.... 
    let mes = month(tiempo.getMonth());//Convierto el  nro del dia en Enero,Febrero.... 
    document.getElementById('contenedor').innerHTML = `${hora}`;
    document.getElementById('fecha').innerHTML = `Hoy es ${dia}  ${tiempo.getDate()} de ${mes} del ${tiempo.getFullYear()}`;
}


function getDay(diaNro){
    let dia = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes', 'Sábado'];
    return dia[diaNro];
}



function month(mesNro){
    console.log(mesNro)
    let mes = {
        0 : 'Enero',
        1 : 'Febrero',
        2 : 'Marzo',
        3 : 'Abril',
        4 : 'Mayo',
        5 : 'Junio',
        6 : 'Julio',
        7 : 'Agosto',
        8 : 'Septiembre',
        9 : 'Octubre',
        10 : 'Noviembre',
        11: 'Diciembre',
    }
    return mes[mesNro];
}
setInterval(() => {
    showMeHora();
}, intervalo);