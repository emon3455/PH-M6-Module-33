function toDo(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => displayToDo(data))
}

function displayToDo(data){
    // step-1: get the parent node
    const parestContainer = document.getElementById("toDoContainer");
    for (const toDos of data) {
        // step-2: create the child node
        const div = document.createElement("div");
        div.classList.add("to-dos");
        // step-3: set innerText or innerHTML
        div.innerHTML=`
            <h3>Title: ${toDos.title}</h3>
            <p>User: ${toDos.userId}</p>
            <p>Current Status: ${toDos.completed===true? "Completed":"Not Completed"}</p>       
        `;
        // step-4: append child
        parestContainer.appendChild(div);
    }
}

toDo();