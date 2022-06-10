const night_mode = document.querySelector('.fa-moon');
const day_mode = document.querySelector('.fa-sun');
const change_mode_btn = document.querySelector('.theme_btn');
// for shades .dark_theme , .dark_theme1 , .dark_theme2
const page_divs = document.querySelectorAll(".dark_theme");
const page_divs_shade1 = document.querySelectorAll(".dark_theme1");
const page_divs_shade2 = document.querySelectorAll(".dark_theme2");
const page_heading = document.querySelectorAll('div > h1,h2,summary,fieldset > legend,p > b')
const page_paragraph = document.querySelectorAll('div > p,li,a,i,fieldset > p,details > p,legend > a');
const active_link = document.querySelector('#active');

const subscribe_btn = document.querySelector('.subs_open');
const subscribe_close_btn = document.querySelector('.subs_close');
const subscribe_form = document.querySelector('.subs_form');


function dark_theme(){
    // change_mode_btn.textContent = 'Light';

    // 
        change_mode_btn.setAttribute('data','day');
        change_mode_btn.style.backgroundColor = 'white';
        day_mode.setAttribute('id','sunrise');
        night_mode.setAttribute('id','moonset');
    // 
    page_divs.forEach(function(item){
        item.classList.add("dark_theme_body");
    });
    page_heading.forEach(function(item){
        item.classList.add('dark_theme_head');
    });
    page_paragraph.forEach(function(item){
        item.classList.add('dark_theme_para');
    });
    
    active_link.classList.add('dark_theme_activelink');

    page_divs_shade1.forEach(function(item){
        item.classList.add('dark_theme_shade1');
    });
    page_divs_shade2.forEach(function(item){
        item.classList.add('dark_theme_shade2');
    });
}
function default_theme(){
    // change_mode_btn.textContent = 'Dark';
    // 
    change_mode_btn.setAttribute('data','night');
    change_mode_btn.style.backgroundColor = '#1F1F1F';
    day_mode.setAttribute('id','sunset');
    night_mode.setAttribute('id','moonrise');
    // 

    page_divs.forEach(function(item){
        item.classList.remove("dark_theme_body");
    });
    page_heading.forEach(function(item){
        item.classList.remove('dark_theme_head');
    });
    page_paragraph.forEach(function(item){
        item.classList.remove('dark_theme_para');
    });
    
    active_link.classList.remove('dark_theme_activelink');

    page_divs_shade1.forEach(function(item){
        item.classList.remove('dark_theme_shade1');
    });
    page_divs_shade2.forEach(function(item){
        item.classList.remove('dark_theme_shade2');
    });

}

// play audio on click
function play() {
    var audio = new Audio("../audio/clickuiaudio.mp3");
    audio.play();
  }

window.onload = default_theme();

change_mode_btn.addEventListener('click',function(){
    if(change_mode_btn.getAttribute('data') === 'night'){
        dark_theme();
        play();
    }else if(change_mode_btn.getAttribute('data') === 'day' ){
        default_theme();
        play();
    }
});

//subscribe form
window.onload = ()=>{subscribe_form.classList.add('hide_form');}
subscribe_btn.addEventListener('click',function(){
    subscribe_form.classList.remove('hide_form');
    subscribe_form.classList.add('show_form');
});
subscribe_close_btn.addEventListener('click',function(){
    subscribe_form.classList.remove('show_form');
    subscribe_form.classList.add('hide_form');
});
       
