document.getElementById("buttonPopUp").addEventListener("click", function(){
    document.querySelector(".container-popup").style.display = "block";
})

document.getElementById("navPopUp").addEventListener("click", function(){
    document.querySelector(".container-popup").style.display = "block";
})

document.getElementById("closePopUp").addEventListener("click", function(){
    document.querySelector(".container-popup").style.display = "none";
})

let infoDesplegada = false;

document.getElementById("arrowOpenInfo").addEventListener("click", function(){
        infoDesplegada = !infoDesplegada
        if(infoDesplegada){
            document.querySelector(".slot-text").style.display = "block"
            document.getElementById("arrowOpenInfo").style.transform = "rotate(180deg)"
            document.getElementById("arrowOpenInfo").src = "images/up-arrow.png"
        }else{
            document.querySelector(".slot-text").style.display = "none"
            document.getElementById("arrowOpenInfo").style.transform = "rotate(0deg)"
            document.getElementById("arrowOpenInfo").src = "images/down-arrow.png"

        }
        // infoDesplegada ? document.querySelector(".slot-text").style.display = "block" : document.querySelector(".slot-text").style.display = "none"
        // infoDesplegada ? document.getElementById("arrowOpenInfo").style.transform = "rotate(180deg)" : document.getElementById("arrowOpenInfo").style.transform = "rotate(0deg)"
        // infoDesplegada ? document.getElementById("arrowOpenInfo").src = "images/up-arrow.png" : document.getElementById("arrowOpenInfo").src = "images/down-arrow.png" 
})


