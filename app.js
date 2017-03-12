
let myNodelist = document.getElementsByTagName("LI");
let close = document.getElementsByClassName("close");
let list = document.querySelector('ol');


let myArr=[];




// addscloseboxtoeachli

for ( let i = 0; i < myNodelist.length; i++) {
   let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}



// clickclosebuttonremovesli

for (let i = 0; i < close.length; i++) {
    close[i].onclick= function() {
     let li=this.parentElement;
      list.removeChild(li);
      
      myArr.splice([i], 1);
store();


    };
}



// turnonstrikethru

list.addEventListener('click', function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked');
    }
}, false);



// clickaddtoappendnewlitolist.(spanonclick)

function newElement() {
let li = document.createElement("li");
let inputValue = document.getElementById("myInput").value;
let t = document.createTextNode(inputValue);
li.appendChild(t);
if (inputValue === '') {
    alert("You must enter a list item.");
} else {
    list.appendChild(li);
 
    
 myArr.push(inputValue);
   store();

}
document.getElementById("myInput").value= "";



// foreverynewli,addclosebtn

let span = document.createElement("SPAN");
let txt = document.createTextNode("\u00D7");
span.className="close";
span.appendChild(txt);
li.appendChild(span);

for ( let i=0;i < close.length; i++){
   close[i].onclick=function(){
       let li=this.parentElement;
       list.removeChild(li);
       
myArr.splice([i], 1);
store();
   

   } ;
}

}




function store() {
    localStorage.setItem('todos', JSON.stringify(myArr));
}



function printStorage() {
    let getData= localStorage.getItem('todos');
    let itemlist= JSON.parse(getData);
    
    for (let i=0; i<itemlist.length;i++) {
        
        let li=document.createElement('li');
        myArr.push(itemlist[i]);
        
        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className="close";
        span.appendChild(txt);
        li.appendChild(span);
        
        
        li.appendChild(document.createTextNode(itemlist[i]));
        (document.getElementById("myOL")).appendChild(li);
        
        
        
        
        
        for ( let i=0;i < close.length; i++){
   close[i].onclick=function(){
        let li=this.parentElement;
       list.removeChild(li);
       
       myArr.splice([i], 1);
store();
         

   } ;
}

         
          
    }
   
}

window.onload=printStorage();


