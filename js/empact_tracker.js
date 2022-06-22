const title = document.querySelector("#title_box");
const p_empact = document.querySelector("#sus");
const n_empact = document.querySelector("#unsus");
const point = document.querySelector("#points");
const display_area = document.querySelector(".display_box");
const p_point = document.querySelector(".p_point");
const n_point = document.querySelector(".n_point");
const p_bar = document.querySelector(".positive");
const n_bar = document.querySelector(".negative");
const form = document.querySelector("form");
const submit_btn = document.querySelector('input[type="submit"]');
const module = document.querySelector('.module_container');


let positive_empact = 0;
let negative_empact = 0;


let db;
//create a request object to open version 1 of a database called empact_db
const openRequest = window.indexedDB.open('empact_db',2);

openRequest.addEventListener('error',()=>{
    console.error("Database failed to open");
});
openRequest.addEventListener('success', () => {
console.log('Database opened successfully');

//assigning database object into db variabel;
db = openRequest.result;
display();
});

openRequest.addEventListener("upgradeneeded", e =>{
    db = e.target.result;

    const objectStore = db.createObjectStore('empact_os',{keyPath: "id", autoIncrement:true});
    objectStore.createIndex('title','title',{unique: false});
    objectStore.createIndex('point','point',{unique: false});
    objectStore.createIndex('time_stamp','time_stamp',{unique: false});
    objectStore.createIndex('sus','sus',{unique: false});

    console.log("database setup complete");
});

function add(){
    
    t_value = title.value;
    p_value = point.value;

    if(t_value != '' && (p_empact.checked || n_empact.checked) && p_value != ''){
    
    const d = new Date();
    let date_str = `${d.getFullYear()}:${d.getMonth()}:${d.getDate()}`;

    const newList = {title: t_value, point: p_value, time_stamp: date_str, sus: p_empact.checked};
    
    //opening readwrite transaction which allows to acces the object store
    const transaction = db.transaction(['empact_os'],'readwrite');
    //accessing database table empact_os
    const objectStore = transaction.objectStore('empact_os');
    //requesting to add newList into the objectstore empact_os
    const addRequest = objectStore.add(newList);

    addRequest.addEventListener('success', ()=>{
        //clear the input form after for next entry

    });

    //check if the database is modified or not 
    transaction.addEventListener('complete', ()=>{
        console.log("transaction completed and data has been modified");

        display();
        positive_empact = 0;
        negative_empact = 0;

    });
    transaction.addEventListener('error', () => console.log('Transaction not opened due to error'));

    }else{
    console.log("bye");
    }

}

function display(){
    while(display_area.firstChild){
        display_area.removeChild(display_area.firstChild);
        }

        // Open our object store and then get a cursor - which iterates through all the
        // different data items in the store
        const objectStore = db.transaction('empact_os').objectStore('empact_os');
        objectStore.openCursor().addEventListener('success', e => {
        // Get a reference to the cursor
        const cursor = e.target.result;

        // If there is still another data item to iterate through, keep running this code
        if(cursor) {
            const li = document.createElement("li");
            const span = document.createElement("span");
            const date = document.createElement("span");
            
            li.innerHTML = cursor.value.title;
            span.textContent = cursor.value.point;
            date.textContent = cursor.value.time_stamp;
            
            console.log(cursor);
            cursor.value.sus  == true ?
            (span.style.backgroundColor = "rgb(31, 83, 255)",
            span.style.color = "white",
            positive_empact += Number(cursor.value.point),
            p_point.textContent = positive_empact,
            console.log(positive_empact),
            p_bar.style.height = (positive_empact/10)+'px') 
            :
            (span.style.backgroundColor = "rgb(255, 31, 31)",
            span.style.color = "white",
            negative_empact += Number(cursor.value.point),
            n_point.textContent = negative_empact,
            console.log(negative_empact),
            n_bar.style.height = (negative_empact/10)+'px');

            span.style.padding = "1px 4px";
            span.style.margin = "5px";
            span.style.borderRadius = "5px";

            // date.textContent = date_str;
            date.style.backgroundColor = "#a5a5a5";
            date.style.color = "white";
            date.style.padding = "1px 4px";
            date.style.borderRadius = "5px";

            // li.innerHTML = t_value;
            li.style.padding = "5px";
            li.style.wordBreak = "break-word";
            li.appendChild(span);
            li.append(date);
            display_area.append(li);

            li.setAttribute('data-note-id', cursor.value.id);
            cursor.continue();
            
        }else {
            // Again, if list item is empty, display a 'No notes stored' message
            if(!display_area.firstChild) {
            const newList = document.createElement('li');
            newList.textContent = 'list is empty'
            display_area.appendChild(newList);
            }
            // if there are no more cursor items to iterate through, say so
            console.log('all data is iterated');
        }

        });
    }
    
form.onsubmit = (e)=>{
    e.preventDefault();
    add();
}

submit_btn.onclick = ()=>{
let a = (module.clientHeight)-100;
let b = p_bar.clientHeight;
let c = n_bar.clientHeight;
    if(b>a || c>a){
        let confirm = prompt("your have reached your limit. enter 'yes' to reload 'no' to stay","yes");
        if(confirm == "yes"){
        form.submit();
        }else if(confirm == "no"){
            console.log("stay mode on");
        }
    }else{
        console.log("not yet");
    }
}