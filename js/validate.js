const show_pwd_btn = document.querySelector(".fa-eye-slash");
const hide_pwd_btn = document.querySelector(".fa-eye");


show_pwd_btn.onclick = ()=>{
    // show_pwd_btn.style.display == "block" ? 
    // (show_pwd_btn.style.display = "none",hide_pwd_btn.style.display = "block"):
    // (hide_pwd_btn.style.display = "none",show_pwd_btn.style.display = "block");
    if(hide_pwd_btn.style.display == 'none'){
        hide_pwd_btn.display == 'block';
        show_pwd_btn.display == 'none';
    }else if(show_pwd_btn.style.display == 'block'){
        hide_pwd_btn.display == 'none';
        show_pwd_btn.display == 'block';
    }
};
