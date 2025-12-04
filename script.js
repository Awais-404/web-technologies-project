import {get_category} from "./fuse_search.js";
import fiction from "./Books/fiction_books.json" with { type: 'json' }

const book_arrays = Array.from(document.querySelectorAll('.book-array'));
const book_template = document.getElementById("book-template")
var banner_scroller = document.querySelector(".banner-scroller")
var banner_count = 4
var current_banner = 1


window.onload = fill_book_arrays()


function scroll_banner(){
  if (current_banner == banner_count) {
    banner_scroller.style.transitionDuration = '0s';
    banner_scroller.style.transform = "translateX(0px)"
    current_banner = 1
  }
  var scroll_width = banner_scroller.offsetWidth;
  banner_scroller.style.transitionDuration = '1.5s';
  banner_scroller.style.transform = `translateX(${-scroll_width*current_banner}px)`
  current_banner ++
}
setInterval(scroll_banner, 5000);

function fill_book_arrays(){
  book_arrays.forEach(book_array => {
    var category = book_array.parentElement.querySelector("h1").textContent
    if (category == "Trending") {
      for (let i = 0; i < 10; i++) {
      let book = book_template.content.cloneNode(true);
      let random_fiction_book = fiction[Math.floor(Math.random() * fiction.length)]
      book.querySelector(".book-cover").setAttribute('src',random_fiction_book.cover_path)
      book.querySelector(".title").innerHTML = random_fiction_book.title
      book.querySelector(".author").innerHTML = random_fiction_book.author
      book_array.appendChild(book);
      }
    }
    else{
      var books = get_category("fiction",category)
      books.push(...get_category("non-fiction",category))
      for (let i = 0; i < 10; i++) {
        let book = book_template.content.cloneNode(true);
        book.querySelector(".book-cover").setAttribute('src',books[i].item.cover_path)
        book.querySelector(".title").innerHTML = books[i].item.title
        book.querySelector(".author").innerHTML = books[i].item.author
        book_array.appendChild(book);
      }
    }
  });
}
