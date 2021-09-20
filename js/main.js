let start=document.querySelector('.start')
let model=document.querySelector('.modal')
let modalClose=document.querySelector('.modal .close')
let add=document.querySelector('.add')
let input=document.querySelector('input')
let notasks=document.getElementById ('notasks')
let tasks=document.getElementById('tasks')

console.log(notasks)
console.log(tasks)
let view=()=>{
    model.classList.toggle('display')
}

let addingTasks=()=>{
    let dataenterd= input.value
    input.value=''
if (dataenterd.trim()== ''){
    alert("please enter a valid option")
    
}else
{ 
   notasks.classList.add('none')
   tasks.classList.remove('none')
   tasks.innerHTML +=  `<div class="mb-3 pb-3 alert alert-primary col-sm-9"> ${dataenterd} <button class=" delete float-right btn btn-danger "> Delete </button>  </div>`
   model.classList.remove ('display')
   
  

}

}




start .addEventListener ('click',view)
modalClose .addEventListener('click', view)
 add .addEventListener ('click', addingTasks)
 document .addEventListener ('click', (e)=>{
     if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
      if(tasks.childElementCount==0){
        notasks.classList.remove('none')
        tasks.classList.add('none')

      }
     }
 }
 )
