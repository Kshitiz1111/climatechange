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

const hashtag_container = document.querySelector('.hashtag_box');
const hashtags = document.querySelectorAll('.hashtag > h2');
const guide_tocopy = document.querySelector('.copy');

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

// hashtags functions
function show(){
    guide_tocopy.textContent ='copied';
    let text=[];
    hashtags.forEach(function(item){
    text.push(item.innerText);
    });
    text.select();
    document.execCommand('copy');
}
function hide(){
    guide_tocopy.textContent ='click to copy';
}
function hold(){
    guide_tocopy.classList.remove('hide_copied_text');
    guide_tocopy.classList.add('show_copied_text');
}
//  close hashtags functions

window.onload = default_theme();

change_mode_btn.addEventListener('click',function(){
    if(change_mode_btn.getAttribute('data') === 'night'){
        dark_theme();
    }else if(change_mode_btn.getAttribute('data') === 'day' ){
        default_theme();
    }
});

// hashtags events
window.onload = function(){
    guide_tocopy.classList.add('hide_copied_text');
    subscribe_form.classList.add('hide_form');
}

hashtag_container.addEventListener('click',function(){
    if(guide_tocopy.textContent == 'click to copy'){
        show();
    
    }else if(guide_tocopy.textContent == 'copied'){
        hide();
    
    }
});

hashtag_container.addEventListener('mouseover',function(){
    guide_tocopy.classList.remove('hide_copied_text');
    guide_tocopy.classList.add('show_copied_text');
});

hashtag_container.addEventListener('mouseout',function(){
    guide_tocopy.classList.remove('show_copied_text');
    guide_tocopy.classList.add('hide_copied_text');

    if(guide_tocopy.textContent == 'copied'){
        hold();
    }
});
//close hashtag events
subscribe_btn.addEventListener('click',function(){
    subscribe_form.classList.remove('hide_form');
    subscribe_form.classList.add('show_form');
});
subscribe_close_btn.addEventListener('click',function(){
    subscribe_form.classList.remove('show_form');
    subscribe_form.classList.add('hide_form');
});
       
