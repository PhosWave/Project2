document.addEventListener('DOMContentLoaded', function(){
document.querySelector("#new-task").onsubmit = function(){
     const li = document.createElement('li');
    const priorityx =document.querySelector("#priority").value;
     let task_test = document.querySelector("#task").value;
     let new_task_html = `
        <span class="Task"> ${task_test} </span>
        <span class="priority"> ${priorityx} </span>
        <button class="remove">Remove</button>
        <label type="checkbox">Complete</label>
              `;
        li.innerHTML = new_task_html
    document.querySelector("#tasks-list").append(li);
    document.querySelector("#task").value = "";

    li.addEventListener("click",function(){
    li.style.textDecoration="line-through";
    })
    var arr = [];
    arr.push(new_task_html);
    return false;
}
document.addEventListener("click", function(event){
    element=event.target;
    if(element.className === "remove"){
        element.parentElement.remove();
        arr[element].remove();
    }
})
});
