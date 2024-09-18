let button = document.getElementById("button");
let h1 = document.getElementById("h1");
let baap = document.getElementById("baap");
button.addEventListener("click",function(){

    if(baap.getAttribute("class")=="main_white"){
        baap.classList.replace("main_white","main_black");
        h1.classList.add("dark_h1");
        let num = 1;
        localStorage.setItem("num",num);
        console.log(baap);

    }
    else if(baap.getAttribute("class")=="main_black"){       
        baap.classList.replace("main_black","main_white");
        h1.classList.remove("dark_h1");
        localStorage.removeItem("num");
        console.log(baap);
    }
})
window.addEventListener("load",function(){
    let num = localStorage.getItem("num");

    if(num==1){
        baap.classList.remove("main_white");
        baap.classList.add("main_black");
        h1.classList.add("dark_h1");
        localStorage.removeItem("num");
    }
    else if(num == null){
        baap.classList.remove("main.black");

        baap.classList.add("main_white");
        h1.classList.remove("h1");

    }
})
