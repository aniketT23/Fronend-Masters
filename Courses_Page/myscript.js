let aCourse = document.getElementById("aCourse");
let pCourse = document.getElementById("pCourse");
let lCourse = document.getElementById("lCourse");
let content = document.getElementById("course-content");
let pop = document.getElementById("popular-main");
let val = document.getElementById("search");


function backgroundChange() {
    aCourse.style.background = "none";
    aCourse.style.color = "#e6e6e6a2";
    content.style.display = "none";

}

function allCourse() {
    aCourse.style.background = "rgb(" + 10 + "," + "87" + "," + 163 + ")";
    aCourse.style.color = "white";
    content.style.display = "grid";
    pop.style.display = "none";
}


pCourse.addEventListener("click", backgroundChange);
lCourse.addEventListener("click", backgroundChange);
aCourse.addEventListener("click", allCourse);


function popularCourse() {

    pop.style.display = "grid";

}
pCourse.addEventListener("click", popularCourse);


let a = [{
    id: "html",
    image: "https://static.frontendmasters.com/assets/courses/2021-05-04-complete-react-v6/thumb.webp",
    heading: "Complete Intro to React, v6",
    profile: "https://static.frontendmasters.com/assets/teachers/holt/thumb.webp",
    name: "Brain Holt <span><br> Stripe</span>",
    info: "Much more than an intro, you’ll build with the latest features in React, including hooks, effects, context, and portals. Learn to build real-world apps from the ground up using the latest tools in the React ecosystem, like Parcel, ESLint, Prettier,and React Router",
    time: "9 hours,4 minutes <Strong> CC </Strong>",
    btn1: "Watch Free Preview",
    btn2: "Get Full Access"


}];

let store = localStorage.setItem("content", JSON.stringify(a));
let get_store = JSON.parse(localStorage.getItem("content"));


function search() {
    let popdiv = document.createElement("div");
    let indiv = document.createElement("div");
    let img = document.createElement("img");
    let contdiv = document.createElement("div");
    let heading = document.createElement("h2")
    let profile_div = document.createElement("div");
    let profile_img = document.createElement("img");
    let trainer = document.createElement("div");
    let content_info = document.createElement("p");
    let duration = document.createElement("div");
    let button_div = document.createElement("div");
    let button1 = document.createElement("a");
    let button2 = document.createElement("a");


    get_store.forEach(function(p) {

        if (val.value == p.id) {
            // hoisting
            img.src = p.image;
            heading.innerHTML = p.heading;
            profile_img.src = p.profile;
            trainer.innerHTML = p.name;
            content_info.innerHTML = p.info;
            duration.innerHTML = p.time;
            button1.innerHTML = p.btn1;
            button2.innerHTML = p.btn2;

            button1.src = "particularCourse.html";

            // execution

            button_div.append(button1, button2);
            button_div.setAttribute("class", "course-btn");

            profile_div.append(profile_img, trainer);
            profile_div.setAttribute("class", "author-name");

            contdiv.append(heading, profile_div, content_info, duration, button_div)
            indiv.append(img, contdiv);
            pop.append(indiv);


        }


    });


}

val.addEventListener("change", search);