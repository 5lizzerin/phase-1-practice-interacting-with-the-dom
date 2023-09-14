document.addEventListener("DOMContentLoaded", () => {
    manualCounter();
    commenter();
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

