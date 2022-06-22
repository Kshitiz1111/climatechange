const u_name = document.querySelector("#u_name");
const u_email = document.querySelector("#u_email");
const pwd = document.querySelector("#pwd");
const c_pwd = document.querySelector("#c_pwd");
const submit_btn = document.querySelector("[type='submit']");
const show_pwd_btn = document.querySelector("#s");
const hide_pwd_btn = document.querySelector("#h");
const error_msg = document.querySelector("#errro_msg");


show_pwd_btn.onclick = ()=>{
    hide_pwd_btn.style.display = 'block';
    show_pwd_btn.style.display = 'none';
    if(c_pwd){
    pwd.type = "text";
    c_pwd.type = "text";
    }else{
        pwd.type = "text";
    }
};

hide_pwd_btn.onclick = ()=>{
    hide_pwd_btn.style.display = 'none';
    show_pwd_btn.style.display = 'block';
    if(c_pwd){
        pwd.type = "password";
        c_pwd.type = "password";
    }else{
        pwd.type = "password";
    }
};


let msg_box;
let uname_err_msg = `<ul>userame must be greater than 2 character                  
                        <ul>valid characters are 
                            <li>1. a-z</li>
                            <li>2. 0-9</li>
                            <li>3. underscore ( _ ) hyphen ( - ) 
                        </ul>                               
                    </ul>`;
let uemail_err_msg = `<ul>invalid email address</ul>`;
let pwd_err_msg =  `<ul>password must be have 6-16 characters long                  
                    <ul>password must include
                        <li>1. atleast one number</li>
                        <li>2. atleast one special charater</li>
                    </ul>                               
                    </ul>`;
let c_pwd_err_msg = `<ul>password didn't match</ul>`;

function checkValidity(ele,error_text,regex_pattern){
    let text = ele.value;
    let valid;
    if(ele != c_pwd ){
         valid = regex_pattern.test(text);
    }else{
         valid = (text == regex_pattern)? true:false;
    }

    let msg;
    if(valid === false && error_msg.innerHTML == ''){
        ele.style.borderColor = "#D42538";
        ele.style.background = "#D4253855";

        msg = document.createElement("p");
        msg_box = document.createElement("div");

        msg.innerHTML = error_text;
       
        error_msg.appendChild(msg_box);
        msg_box.className = "error_msg";
        msg_box.appendChild(msg);
        
        
    }else if(valid === true){
        ele.style.borderColor = "#0095A9";
        ele.style.background = "#0095A955";
       
        msg_box.remove();
    }
}

u_name.oninput = ()=>{
    let error_text =  uname_err_msg;
    checkValidity(u_name,error_text,/^[a-z0-9_-]{3,16}$/im);
};
u_name.onblur = ()=>{
    let error_text =  uname_err_msg;
    checkValidity(u_name,error_text,/^[a-z0-9_-]{3,16}$/im);
};

pwd.oninput = ()=>{
    let error_text =  pwd_err_msg;
    checkValidity(pwd,error_text, /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
}
pwd.onblur = ()=>{
    let error_text =  pwd_err_msg;
   checkValidity(pwd,error_text, /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
};


u_email.oninput = ()=>{
    let error_text =  uemail_err_msg;
    checkValidity(u_email,error_text,/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
}
u_email.onblur = ()=>{
    let error_text =  uemail_err_msg;
   checkValidity(u_email,error_text,/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
};

c_pwd.oninput = ()=>{
    let error_text =  c_pwd_err_msg;
    checkValidity(c_pwd,error_text, pwd.value);
}
c_pwd.onblur = ()=>{
    let error_text =  c_pwd_err_msg;
   checkValidity(c_pwd,error_text, pwd.value);
};


function finalCheck(){
    if(u_name.style.borderColor == 'rgb(0, 149, 169)' && u_email.style.borderColor == 'rgb(0, 149, 169)' && pwd.style.borderColor == 'rgb(0, 149, 169)' && c_pwd.style.borderColor == 'rgb(0, 149, 169)')
    { 
        document.getElementById("form").submit();
        location.href="../html/login.html";       
    }else{
       alert("validations failed");
    } 
};
function finalCheck1(){
    if(u_name.style.borderColor == 'rgb(0, 149, 169)' && pwd.style.borderColor == 'rgb(0, 149, 169)')
    { 
        document.getElementById("form").submit(); 
        location.href="../html/home.html";   
    }else{
       alert("validations failed");
    } 
};




