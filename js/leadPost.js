function getPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => displayPost(data))
}

getPosts();

function displayPost(data){

    const postContainer = document.getElementById("blog-container");

    for (const post of data) {

        const div = document.createElement("div");
        div.classList.add("blogs");
        div.innerHTML = `
            <h2 class="blog-title"> ${post.title} </h2>
            <p class="blog-description">
               ${post.body}
            </p>
            <p class="blog-author">Uploaded By User ID: ${post.userId}</p>
            <p class="blog-author">Blog Serial Number: ${post.id}</p>
        `;

        postContainer.appendChild(div);

    }


}

