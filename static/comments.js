// All the functions for comments
let comments = [];

function saveComment() {
    const commentInput = document.getElementById("comment-button");
    const comment = {
        displayName: getDisplayName(),
        text: commentInput.value
    };
    comments.push(comment);
    commentInput.value = "";
}

function getComments() {
    return comments;
}

document.getElementById("comment-submit-button").addEventListener("click", saveComment);