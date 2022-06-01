//get the element
inputEle= document.getElementById('i/p');
btnEle= document.getElementById('btn');
pragEle=document.getElementById('prag');

btnEle.onclick =function(){

    if(inputEle.value !=""){
        pragEle.innerHTML= inputEle.value;
        inputEle.value="";
    }else{
        alert('Please inter your message first!');
    }

}