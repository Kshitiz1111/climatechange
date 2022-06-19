const main_news_div = document.querySelector(".main_news");
const form = document.querySelector("form");
const search_box = document.querySelector("#search_box");
const search_btn = document.querySelector("#search_btn");
const content_box = document.querySelector(".content");
const close_news = document.querySelector(".main_news>.content_div>.content>.fa-close");
const background = document.querySelector(".background");
const news_btn = document.querySelector(".news");

function getData(e){
    content_box.innerHTML = '';
    e.preventDefault();
    const apikey = '5b11381bc06a49bfa33f7e993b6a8953';
    let search_key = search_box.value;
    let url = `https://newsapi.org/v2/everything?q=${search_key}&apiKey=${apikey}`

    fetch(url).then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data);
      data.articles.forEach(element => {
        const article_card = document.createElement("article");
        const head_title = document.createElement("a");
        const s_paragraph = document.createElement("p");
        const readmore = document.createElement("span");
        const source = document.createElement("span");

        content_box.appendChild(article_card);

        head_title.textContent = element.title;
        head_title.style.fontSize = "20px";
        head_title.style.fontWeight = "600";
        head_title.style.textDecoration = "none";
        head_title.setAttribute("href",element.url)
        head_title.setAttribute("target","blank");
        head_title.style.padding = "5px";
        head_title.style.margin = "0px";

        s_paragraph.textContent = element.description;
        s_paragraph.style.padding = "10px 15px 20px 10px";
        s_paragraph.style.margin = "0px";

        source.textContent = element.source.name;
        source.style.color = "grey";
        source.style.fontSize = "14px";
        source.style.padding = "5px";

        readmore.textContent = "readmore";
        readmore.style.position = "absolute";
        readmore.style.bottom = "5px";
        readmore.style.right = "10px";
        readmore.style.color = "blue";

        readmore.onclick = ()=>{
            if(readmore.textContent == "readmore"){
                readmore.textContent = "readless";
                s_paragraph.textContent = element.content;
            }else if(readmore.textContent == "readless"){
                readmore.textContent = "readmore";
                s_paragraph.textContent = element.description;
            }
        };

        article_card.appendChild(head_title);
        article_card.appendChild(s_paragraph);
        article_card.appendChild(source);
        article_card.appendChild(readmore);
      });
        
    }).catch((error)=>{
        console.log("Error: "+error);
    })
}

close_news.onclick = ()=>{
    background.style.display = "none";
    main_news_div.style.display = "none";
}
news_btn.onclick = ()=>{
    background.style.display = "block";
    main_news_div.style.display = "block";
}
form.addEventListener("submit", getData);
// window.addEventListener("load", getData);