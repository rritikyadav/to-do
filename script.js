let savebtn = document.querySelector("#save");
let inputtask = document.querySelector(".inputtask input");
let tasksbox = document.querySelector(".tasks");
let showbtn = document.querySelector(".showAll input");

// save button function
savebtn.addEventListener("click",()=>{
  if(inputtask.value.trim() === '') {
    alert("Enter Your Task Name Please")
  }else{
  tasksbox.innerHTML = tasksbox.innerHTML + `<div class="task">
                    <p>${inputtask.value}</p>
                    <div class="btns">
                        <button class="edit"><img src="edit.svg" alt=""></button>
                        <button class="delete"><img src="delete.svg" alt=""></button>
                        <button class="complete"><img src="completed.svg" alt=""></button>
                    </div>
                </div>` 
  }
  inputtask.value = "";
  savedata();
})
//enter key function
document.addEventListener("keydown",(e)=>{
    if(e.key === "Enter"){
        if(inputtask.value.trim() === '') {
            alert("Enter Your Task Name Please")
          }else{
          tasksbox.innerHTML = tasksbox.innerHTML + `<div class="task">
                            <p>${inputtask.value}</p>
                            <div class="btns">
                                <button class="edit"><img src="edit.svg" alt=""></button>
                                <button class="delete"><img src="delete.svg" alt=""></button>
                                <button class="complete"><img src="completed.svg" alt=""></button>
                            </div>
                        </div>` 
          }
          inputtask.value ="";
          savedata();
    }
})   

tasksbox.addEventListener("click",(e)=>{
    let target = e.target;
    let a= (target.parentElement).parentElement;
    // delete button function
    if(target.classList.contains("delete")){
        a.remove();
        savedata();
    }
    //complete function
    if(target.classList.contains("complete")){
        a.style.backgroundColor ="green";
        a.children[1].children[2].style.display = "none";
        a.children[1].children[0].style.display = "none";
        a.classList.add("done");
        a.classList.add("comp");
        filtertask();
        savedata();
    }
    // edit function
    if(target.classList.contains("edit")){
        inputtask.value = a.innerText;
        a.remove();
        savedata();
    }
})  

let filtertask = ()=>{
    let alltasks = document.querySelectorAll(".task");
    alltasks.forEach((e)=>{
        if(e.classList.contains("comp")){
        if(showbtn.checked){
            e.classList.remove("done");
        }
        else{
            e.classList.add("done");
        }
    }
    })
}

showbtn.addEventListener("change",filtertask);


// save data
let savedata = ()=>{
    localStorage.setItem("data", tasksbox.innerHTML);
}

// getdata
let getdata = ()=>{
    const savedData = localStorage.getItem("data");
  if (savedData) {
    tasksbox.innerHTML = savedData;
  }
  filtertask();
}  

getdata();

// localStorage.clear()
