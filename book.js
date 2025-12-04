import { get_book, get_category } from "./fuse_search.js";

var title = sessionStorage.getItem("title")
var book = get_book(title)
var type = sessionStorage.getItem("type")

window.onload = function(){
    display_book_info()
    fill_recommendations()
} 

function display_book_info(){
    console.log(book)
    document.querySelector(".left-section .book-cover").setAttribute('src', book.item.cover_path)
    document.querySelector(".left-section .title").innerHTML = book.item.title
    document.querySelector(".left-section .author").innerHTML = book.item.author
    document.querySelector(".left-section .published-on").innerHTML = book.item.release_date
    document.querySelector(".left-section .category").innerHTML = book.item.category
    document.querySelector(".right-section .title").innerHTML = book.item.title
    document.querySelector(".right-section .author").innerHTML = "By "+book.item.author
    document.querySelector(".right-section .synopsis").innerHTML = book.item.synopsis
}

function fill_recommendations(){
    console.log(book.item.category)
    const book_template = document.getElementById("book-template")
    var book_array = document.querySelector(".book-array")
    var books = get_category(type, book.item.category[0])
    console.log(books)
    for (let i = 0; i < 10; i++) {
        let book = book_template.content.cloneNode(true);
        book.querySelector(".book-cover").setAttribute('src', books[i].item.cover_path)
        book.querySelector(".title").innerHTML = books[i].item.title
        book.querySelector(".author").innerHTML = books[i].item.author
        book_array.append(book)
    }
}