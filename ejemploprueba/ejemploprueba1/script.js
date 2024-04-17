function noNegative(arr){
    for(let i = 0; i< arr.length; i++){
        if(arr[i]< 0){
            srr[i]= 0;
        }
    }
    return arr; 
};

let array = [-2,-5,4,-6,]
alert(noNegative(array));
         