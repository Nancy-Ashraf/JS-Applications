//get elements
let myImg= document.getElementById("slideShow");
let imgs=["image/1.jpg","image/2.jpg","image/3.jpg"];
let i=0;

function slideShow(){
    
    myImg.setAttribute("src", imgs[i]);

    if(i == imgs.length-1){
        i=0;
        
    }else{
        i++;
    }

    setTimeout(function() { slideShow(); }, 2000);   

};

slideShow();

