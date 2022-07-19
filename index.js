function like() {
    document.getElementById("like-demo").innerHTML = "<i class='bx bxs-like' ></i>";
    document.getElementById("like-demo").style.color = "#18A2F3";
    document.getElementById("un-like-demo").innerHTML = "<i class='bx bx-dislike' ></i>";
    document.getElementById("un-like-demo").style.color = "#000";
    document.getElementById("like-text").innerHTML = "Liked";
    document.getElementById("un-like-text").innerHTML = "Unliked";
}

function unlike() {
    document.getElementById("un-like-demo").innerHTML = "<i class='bx bxs-dislike' ></i>";
    document.getElementById("un-like-demo").style.color = "#18A2F3";
    document.getElementById("like-demo").innerHTML = "<i class='bx bx-like' ></i>";
    document.getElementById("like-demo").style.color = "#000";
    document.getElementById("like-text").innerHTML = "Like";
    document.getElementById("unlike-text").innerHTML = "Unliked";
}