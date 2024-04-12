function cincoEnCinco(){
    let contador = 2;
    let array = [];

    while (contador <=20){
        array.push(contador);
        contador+= 2;
    }
    document.getElementById("lista").innerHTML = `<p>:primeros 10 numeros pares</p> <br><h2>${array}</h2>`;
}