
function leadUsers(){
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
        .then(res=> res.json())
        .then(data => console.log(data))
}

function leadUsers1(){
    fetch( "https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data=> displayData(data) )
}

function displayData(data){
    console.log(data[0]);
}