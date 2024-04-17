function numeroMayor(){
    let arrayNum =[];
    let numMayor =0;

    for(let 1 = 0; i< 5; i++){
        let num = parseInt(prompt("ingresa un numero para detectar mayor"));
        arrayNum.push(num);
        numMayor = (numMayor < num)? num :numMayor;
    }
    document.getElementById("lista").innerHTML=`De los numeros ingresados:`<h2>${arrayNum.join(",")} :numMayor:</h2> <h1>${numMayor}</h1>;
}