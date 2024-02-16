let createbutton = document.querySelector(".container button");
let textbox = document.querySelector(".addnote");
let notes = document.querySelectorAll(".input");

createbutton.addEventListener("click" , ()=>{
    let inputbox = document.createElement("p");
    let delbtn = document.createElement("img");
    inputbox.className = "input";
    inputbox.setAttribute("contenteditable","true");
    delbtn.src = "images/delete.png";
    textbox.appendChild(inputbox).appendChild(delbtn);

})
function shownotes(){
    textbox.innerHTML = localStorage.getItem("notes");
}
shownotes();
function save(){
    localStorage.setItem("notes",textbox.innerHTML);

}

textbox.addEventListener("click" , function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        save();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input");
        notes.forEach(note =>{
        note.onkeyup = function(){
        save();
        }
        })
    }


})







