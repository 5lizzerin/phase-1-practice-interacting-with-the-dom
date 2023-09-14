document.addEventListener("DOMContentLoaded", () => {
    manualCounter();
    commenter();
    heartCounter();
});

function manualCounter() {
const countUp = document.getElementById("plus");
countUp.addEventListener("click", () => {
    const counter = document.getElementById("counter");
    counter.innerText++;
})

const countDown = document.getElementById("minus");
countDown.addEventListener("click", () => {
    const counter = document.getElementById("counter");
    counter.innerText--;
})
}

function commenter() {
    const form = document.getElementById('comment-form');
    form.addEventListener('submit', (submitEvent) => {
        submitEvent.preventDefault();
        const userText = submitEvent.target.comment.value;
        const comments = document.getElementById('list');
        const commentList = document.createElement('ul');
        comments.append(commentList);
        commentList.append(userText);
        submitEvent.target.reset();
    })
}


function heartCounter() {
    const heartButton = document.getElementById("heart");
    heartButton.addEventListener("click", () => {
        const counter = document.getElementById("counter");
        const likeList = document.getElementsByClassName("likes")[0];
        // let likes = 0;
        // // const numberOfLikes = likes++;
        let counterValue = counter.innerText;
        const likeComment = `${counterValue} has been liked ${clickCounter()} times`;
        const likeItem = document.createElement("li");
        likeItem.innerText = likeComment;
        likeList.append(likeItem);
        console.log(likeComment);
    })

    const clickCounter = function () {
        heartButton.addEventListener("click", () => {
            let likes = 0;
            likes++
            return likes
        })} 
}

