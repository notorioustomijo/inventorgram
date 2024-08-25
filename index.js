const inventors = [
    {
        name: "Thomas Edison",
        username: "edison4shizzle",
        location: "Ohio, USA",
        avatar: "images/edison-avatar.jpeg",
        post: "images/edison-post.jpeg",
        comment: "Genius is 1% inspiration and 99% perspiration",
        likes: 21
    },
    {
        name: "Steve Jobs",
        username: "steve",
        location: "California, USA",
        avatar: "images/steve-avatar.jpeg",
        post: "images/to the crazy ones.jpeg",
        comment: "Here's to the crazy ones",
        likes: 4
    },
        {
        name: "Elon Musk",
        username: "emusk",
        location: "Texas, USA",
        avatar: "images/emusk-avatar.jpeg",
        post: "images/emusk-post.jpeg",
        comment: "Necessity is the mother of invention",
        likes: 152
    }
]


const main = document.getElementById('main');

let html = '';

for (let i=0; i<inventors.length; i++) {
    html += 
    `
<section class="inventor" id="inventor">
    <div class="inventor-details">
        <img src="${inventors[i].avatar}" alt="" class="inventor-avatar">
        <div class="inventor-details__name">
            <h2>${inventors[i].name}</h2>
            <p>${inventors[i].location}</p>
        </div>
    </div>
    <img src="${inventors[i].post}" alt="" class="inventor-image">
    <div>
        <div>
            <img src="images/like.svg" alt="" class="icon-btn">
            <img src="images/comment.svg" alt="" class="icon-btn">
            <img src="images/share.svg" alt="" class="icon-btn">
        </div>
        <h3>${inventors[i].likes} likes</h3>
        <p><span class="username">${inventors[i].username}</span> ${inventors[i].comment}</p>
    </div>
</section>
    `
}

main.innerHTML += html;

