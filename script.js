let input= document.getElementById("taskInput");
let addBtn= document.getElementById("addBtn");
let taskList= document.getElementById("taskList");

addBtn.onclick= function(){
    let taskText= input.value;

    if(taskText !== ""){
        let li= document.createElement("li");

        li.textContent = taskText;
        
        let deleteBtn= document.createElement("button");
        deleteBtn.textContent = "حذف";

       deleteBtn.onclick= function(){
         li.remove();

       }
       li.appendChild(deleteBtn);

       taskList.appendChild(li);

       input.value= "";
    }
}