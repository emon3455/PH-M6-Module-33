function comments(){
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res => res.json())
    .then(data => displayComments(data))
}


function displayComments(data){
    const commentContainer = document.getElementById("comment-Container");

    data.forEach(comment => {
        const commentBox = document.createElement("div");
        commentBox.classList.add("comments");
        commentBox.innerHTML=`
            <h3> User: ${comment.id}</h2>
            <h3> Name: ${comment.name}</h3>
            <p> Email: ${comment.email}</p>
            <p>
                Comment: ${comment.body}
            </p>
        `;
        commentContainer.appendChild(commentBox);
    });
}

comments()