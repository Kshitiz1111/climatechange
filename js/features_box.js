const features_box = document.querySelector(".features_box");
const features_icon = document.querySelector(".features_icon");
const open = document.querySelector(".open");
const close = document.querySelector(".close");

let closing_width ;
window.onload = ()=>{
    closing_width = features_box.clientWidth - features_icon.clientWidth + "px";   
    features_box.style.right = "-"+closing_width;
    open.style.display = "block";
    close.style.display = "none";
};

features_icon.onclick = ()=>{

    open.style.display == "block" ? 
        (features_box.style.right = "0px",
        open.style.display = "none",
        close.style.display = "block") :

        (features_box.style.right =  "-" + closing_width,
        open.style.display = "block",
        close.style.display = "none");
                       
};