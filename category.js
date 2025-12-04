import {get_category} from "./fuse_search.js";
var type = sessionStorage.getItem("type")
var category = sessionStorage.getItem("category")
const book_template = document.getElementById("book-template")

var books = get_category(type, category)

window.onload = ()=>{
    document.querySelector(".category").innerHTML = category
    display_books()
} 

function display_books() {
    let book_section = document.querySelector(".books")
    let i = 0
    books.forEach(element => {
        let book = book_template.content.cloneNode(true);
        book.querySelector(".book-cover").setAttribute('src', element.item.cover_path)
        book.querySelector(".title").innerHTML = element.item.title
        book.querySelector(".author").innerHTML = element.item.author
        book_section.append(book)
    });
}
