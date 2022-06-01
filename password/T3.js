//get element
inputEle= document.getElementById('i/p');
btnEle= document.getElementById('btn');

//events
btnEle.addEventListener("click",togglePasswordType);

//function
function togglePasswordType(){
    if(btnEle.getAttribute("data-text")=='show'){

        this.setAttribute("data-text",'hide');
        this.innerHTML="HIDE";
        inputEle.setAttribute("type","text");
        
    }else{
        this.setAttribute("data-text",'show');
        this.innerHTML="SHOW";
        inputEle.setAttribute("type","password");
    }
}