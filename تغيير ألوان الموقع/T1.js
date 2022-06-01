//add DEFULT color on the class of the local storage to the body
document.body.classList.add(localStorage.getItem("pageColor")||"red");


var el =document.querySelectorAll(".color-switcher li");
var classesList=[];

// loop the color attriputes values
for(var i=0 ;i< el.length; i++){
    classesList.push(el[i].getAttribute("data-color"));
    
    
    el[i].addEventListener("click",function(){

        // removing all classes bafore adding a new one
        document.body.classList.remove(...classesList)
        //add a new class of the color to the body
        document.body.classList.add(this.getAttribute("data-color"))

        //add to local storage
        localStorage.setItem("pageColor",this.getAttribute("data-color"))

    },false)
}
