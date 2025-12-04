import { search_books } from "./fuse_search.js";

const book_template = document.querySelector("#result-book-template")
var query = sessionStorage.getItem("query")

var books = search_books(query)

window.onload = ()=>{
    document.querySelector(".query").innerHTML = query
    console.log(books)
    display_results()
}

function display_results(){
    var results = document.querySelector(".results")
    books.forEach(element => {
        let book = book_template.content.cloneNode(true);
        book.querySelector(".book-cover").setAttribute('src', element.item.cover_path)
        book.querySelector(".title").innerHTML = element.item.title
        book.querySelector(".author").innerHTML = element.item.author
        book.querySelector(".synopsis").innerHTML = element.item.synopsis
        results.append(book)
    });
}