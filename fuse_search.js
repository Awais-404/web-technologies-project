import Fuse from "./node_modules/fuse.js/dist/fuse.mjs";
import fiction from "./Books/fiction_books.json" with { type: 'json' }
import non_fiction from "./Books/non-fiction_books.json" with { type: 'json' }


function get_category(type,category){
  if (type == "fiction"){
    type = fiction
  }
  else if (type == "non-fiction") {
    type = non_fiction
  }
  const options = {
    threshold: 0,
    keys: ['category']
  }
  const fuse = new Fuse(type, options)
  var result = fuse.search(category)
  return result
}

function get_book(book_name){
  const options = {
    includeScore: true,
    threshold: 0,
    keys: ['title']
  }
  var fuse = new Fuse(fiction, options)
  var result = fuse.search(book_name)
  if (result[0]) {
    sessionStorage.setItem("type","fiction")
    return result[0]
  }
  fuse = new Fuse(non_fiction, options)
  var result = fuse.search(book_name)
  if (result[0]) {
    sessionStorage.setItem("type","non-fiction")
    return result[0]
  }
  return 0
}

function search_books(book_name){
  const options = {
    includeScore: true,
    threshold: 0.4,
    keys: ['title','author']
  }
  var fuse = new Fuse(fiction, options)
  var result = fuse.search(book_name)
  
  fuse = new Fuse(non_fiction, options)
  result.push(...fuse.search(book_name))
  if (result[0]) {
    result.sort((a,b) => a.score - b.score)
    return result
  }
  return 0
}

export {get_book, get_category, search_books}