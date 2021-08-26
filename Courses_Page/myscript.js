let aCourse = document.getElementById("aCourse");
let pCourse = document.getElementById("pCourse");
let lCourse = document.getElementById("lCourse");
let content = document.getElementById("course-content");

function backgroundChange() {
    aCourse.style.background = "none";
    aCourse.style.color = "#e6e6e6a2";
    content.style.display = "none";

}

function allCourse() {
    aCourse.style.background = "rgb(" + 10 + "," + "87" + "," + 163 + ")";
    aCourse.style.color = "white";
    content.style.display = "grid";
}


pCourse.addEventListener("click", backgroundChange);
lCourse.addEventListener("click", backgroundChange);
aCourse.addEventListener("click", allCourse);