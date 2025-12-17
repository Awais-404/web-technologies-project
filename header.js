const nav_fiction = document.querySelector(".nav-fiction")
const nav_non_fiction = document.querySelector(".nav-non-fiction")
const fiction_drop_down = document.querySelector(".fiction-drop-down")
const non_fiction_drop_down = document.querySelector(".non-fiction-drop-down")
const nav = document.querySelector("nav")
const main = document.querySelector("main")

const search_form = document.querySelector(".search-form")
search_form.addEventListener('submit',(event)=>{
    event.preventDefault();
    book_searched()
})

// fiction drop down
nav_fiction.addEventListener("mouseover",()=> {
    nav_fiction.classList.add('hovered');
    nav_non_fiction.classList.remove('hovered');
    make_invisible([non_fiction_drop_down])
    make_visible([fiction_drop_down])
})
fiction_drop_down.addEventListener('mouseover',()=> {
    nav_fiction.classList.add('hovered');
    make_visible([fiction_drop_down])})
nav_fiction.addEventListener('mouseleave',()=> {
    nav_fiction.classList.remove('hovered');
    make_invisible([fiction_drop_down])})

// Non-fiction dropdown
nav_non_fiction.addEventListener("mouseover",()=> {
    nav_non_fiction.classList.add('hovered');
    nav_fiction.classList.remove('hovered');
    make_invisible([fiction_drop_down])
    make_visible([non_fiction_drop_down])
})
non_fiction_drop_down.addEventListener('mouseover',()=> {
    nav_non_fiction.classList.add('hovered');
    make_visible([non_fiction_drop_down])})
nav_non_fiction.addEventListener('mouseleave',()=> {
    nav_non_fiction.classList.remove('hovered');
    make_invisible([non_fiction_drop_down])})

// make dropdowns invisible when enter main
main.addEventListener("mouseenter",()=> {
    nav_fiction.classList.remove('hovered');
    nav_non_fiction.classList.remove('hovered');
    make_invisible([fiction_drop_down, non_fiction_drop_down])})


function make_visible(arr){
    arr.forEach(element => {
        element.style.visibility = "visible"
    });
}
function make_invisible(arr){
    arr.forEach(element => {
        element.style.visibility = "hidden"
    });
}


function category_clicked(type,category){
    sessionStorage.setItem("type", type)
    sessionStorage.setItem("category", category)
    window.location.assign("category.html")
}
function book_clicked(book){
    let title = book.querySelector(".title").innerHTML
    sessionStorage.setItem("title", title)
    window.location.href = "book.html"
}
function book_searched(){
    let query = document.querySelector("#search-input").value
    sessionStorage.setItem("query", query)
    window.location.href = "search.html"
}

function go_home(){
    window.location.href = "index.html"
}