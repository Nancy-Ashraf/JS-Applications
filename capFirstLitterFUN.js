function capitalizeFirstLetter(string){
    var newArray=[];
    var oldArray=string.split(" ");

    for(i=0; i<oldArray.length; i++){

        var a=oldArray[i].charAT(0).toUpperCase();
        var b=oldArray[i].slice(1);

        newArray.push(a+b) 
    }

    return newArray.join(" ");
}

