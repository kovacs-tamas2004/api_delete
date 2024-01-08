function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            const postok = document.getElementById('container');
            
            posts.forEach(post => {
                const elem = document.createElement('div');
                elem.innerHTML = `<p>ID: ${post.id}</p><p>Title: ${post.title}</p><p>Body: ${post.body}</p><hr>`;
                postok.appendChild(elem);
            });
        })
        .catch(error => console.error('Hiba:', error));
}

function torles() {
    const postId = document.getElementById('postId').value;

    if (!postId) {
        alert('Nem megfelelő ID ');
        return;
    }

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE',
    })
        .then(response => {
            if (response.ok) {
                console.log('Sikeres törlés')
            } else {
                console.log('Sikertelen törlés')
            }
        })
        .catch(error => console.error('Hiba:', error));
}

fetchPosts();