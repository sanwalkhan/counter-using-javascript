let count = 0;

const value = document.querySelector(".value");

const btns = document.querySelectorAll(".btn")



btns.forEach(function(btn){
    btn.addEventListener("click" , function(e){
        const classes = e.currentTarget.classList
        // console.log(classes)
        if(classes.contains("inc")){
        count++;
        }
        else if(classes.contains("dec")){
        count--;
        }
        else {
            count = 0;
        }
        if (count < 0){
            value.style.color = "red"
            
        }
        if (count > 0) {
            value.style.color = "green"
        }
        value.textContent = count
    }) 
})