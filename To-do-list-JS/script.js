const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
const ClearCompleted=document.getElementById("clear_completed");
const SaveList=document.getElementById("save_list");
const ClearList=document.getElementById("clear_list");

 function AddTask(){
    if(inputBox.value===""){
        alert('write any task')
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
    }
 }
 listContainer.addEventListener('dblclick',(e)=>{
      if(e.target.tagName==='LI'){
        e.target.classList.toggle("completed")
      }
 })
 
 ClearCompleted.addEventListener('click',()=>{
    const completedItems=listContainer.querySelectorAll('.completed');
    completedItems.forEach(item=>item.remove());
    }
 )
 SaveList.addEventListener('click',()=>{
    localStorage.setItem("data",listContainer.innerHTML);
 })
function showData(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showData();
 ClearList.addEventListener('click',()=>{
    listContainer.innerHTML=''
 })