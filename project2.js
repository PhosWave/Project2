document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("#red").onclick= function(){
        document.querySelector("#Score").style.color="red";
    }
    document.querySelector("#blue").onclick= function(){
        document.querySelector("#Score").style.color="blue";
    }
    document.querySelector("#yellow").onclick= function(){
        document.querySelector("#Score").style.color="yellow";
    }
}
)

document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("button").onclick=inc;
}
)
let counter=0;
function inc(){
    
    counter=counter+1;

    document.querySelector("#Score").innerHTML = `Score: ${counter}`;

    if (counter>=10){
        counter=0;
     document.querySelector("#Score").innerHTML = "You Win!";
    }
}
