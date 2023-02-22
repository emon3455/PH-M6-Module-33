function displayUserName(){

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(rev => rev.json())
        .then(data => display(data))
}

// function to display user name
function display(data){
    const ul = document.getElementById("list-container");

    for (const user of data) {
        const li = document.createElement("li");
        li.innerText =  user.name;
        ul.appendChild(li);
    }

}