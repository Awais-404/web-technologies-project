const book_arrays = Array.from(document.querySelectorAll('.book-array'));
const book_template = document.getElementById("book-template")
var banner_scroller = document.querySelector(".banner-scroller")
var banner_count = 4
var current_banner = 1

window.onload = function(){
  fill_book_arrays()
  setTimeout(() => {
    set_scroll_btn_visibility()
  }, 100);
}
window.addEventListener("resize", set_scroll_btn_visibility);


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
setInterval(scroll_banner, 6000);

function fill_book_arrays(){
  book_arrays.forEach(book_array => {
    for (let i = 0; i < 10; i++) {
      let book = book_template.content.cloneNode(true);
      book.querySelector(".book-cover").setAttribute('src',"Books/"+(book_array.parentElement.querySelector("h1").textContent)+"/"+(i+1)+".jpg")
      book_array.appendChild(book);
    }
  });
}

function set_scroll_btn_visibility(){
  let over= false;
  book_arrays.forEach(element => {
    if (element.scrollWidth > element.clientWidth) {
      over = true;
    }
    else{
      over = false;
    }
    if (over) {
      element.querySelector('.scroll-left-button').style.visibility = 'visible';
      element.querySelector('.scroll-right-button').style.visibility = 'visible';
      if (element.scrollLeft == '0') {
        element.querySelector('.scroll-left-button').style.visibility = 'hidden';
      }
      var scroll_max = element.scrollWidth - element.clientWidth;
      if (element.scrollLeft/scroll_max >= 1) {
        element.querySelector('.scroll-right-button').style.visibility = 'hidden';
      };
    }
    else{
        element.querySelector('.scroll-left-button').style.visibility = 'hidden';
        element.querySelector('.scroll-right-button').style.visibility = 'hidden';
    }
  })
}

function scroll_left(elem) {
  let scroll_elem = elem.parentElement;
  scroll_elem.scrollLeft -=300;
  scroll_elem.querySelector('.scroll-right-button').style.visibility = 'visible';
  if (scroll_elem.scrollLeft == '0') {
    elem.style.visibility = 'hidden';
  }
}

function scroll_right(elem) {
  let scroll_elem = elem.parentElement;
  scroll_elem.scrollLeft +=300;
  scroll_elem.querySelector('.scroll-left-button').style.visibility = 'visible';
  var scroll_max = scroll_elem.scrollWidth -Math.max(scroll_elem.clientWidth) ;
  if (scroll_elem.scrollLeft/scroll_max >= 0.99) {
    elem.style.visibility = 'hidden';
  }
}