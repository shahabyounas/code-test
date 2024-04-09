
import { BookSearch } from "./bookSearchClient/index.js";


requestIdleCallback(start)

async function start(){

    updatePageFromURL()

    $filters.addEventListener('input', inputListener)

    window.addEventListener('popstate', updatePageFromURL)
}


let tbody = document.querySelector('tbody')
let $filters = document.getElementById('filters')
let filters = { author: '', publisher: ''}
let filterTypes = { author: String, publisher: String }
let data = []


// Input Listener to update filter on input change
function inputListener(ev) {

    clearTimeout(ev.target.debounceTimer)

    ev.target.debounceTimer = setTimeout(setFilter, 300, ev.target.name, ev.target.value)
}

// Set the updated filters on input change
function setFilter(name, value){
    filters[name] = filterTypes[name](value)
    updateURL()
}

// Apply match filters on each child author and publisher
function applyFilters() {
	for (let tr of tbody.children) {
        tr.hidden = !matchesFilters(tr)
    }
}

// Match filters 
function matchesFilters($row) {
	let author = getAuthor($row)
	let publisher = getPublisher($row)
	let matchesAuthor = !filters.author || author.toLowerCase().includes(filters.author.toLowerCase())
	let matchesPublisher = !filters.publisher || publisher.toLowerCase().includes(filters.publisher.toLowerCase())
	return matchesAuthor && matchesPublisher
}

// Get author text
function getAuthor($row) {
	return $row.querySelector('td:nth-child(2)').textContent
}

// Get publisher text
function getPublisher($row) {
	return $row.querySelector('td:last-child').textContent
}

function getStringParam(params, name) {
	return params.get(name) || ''
}


// Update the table with page data
function updateTable(){

	let pageData = data

	 // Populate the UI with page data
	pageData.forEach((rowData, index) => {

	
		let $row = tbody.children[index]

		//  update the row with the data.
		$row.querySelector('td:first-child').textContent = rowData.bookId.slice(0, 3)
		$row.querySelector('td:nth-child(2)').textContent = rowData.author
		$row.querySelector('td:last-child').textContent = rowData.email

		// Remove the `hidden` attribute, after populating the data
		$row.hidden = false
	})

    applyFilters()
}

// fetch the books
function getBooks(){
    const bookSeller = new BookSearch();
    return bookSeller.getBooksByAuthor({ author: 'ali' })
    .then((resp) => {
       data = resp
    })
    .catch((err) => {
        throw err
    })

}

function updatePageFromURL(){
    let params = new URLSearchParams(location.search)

    filters.author = getStringParam(params, 'author')
    filters.publisher = getStringParam(params, 'publisher')

    getBooks().then(() => {
        updateTable()
    })
}


function updateURL(){
    let url = new URL(location)
    let params = url.searchParams

 
    if(filters.author){
        params.set('author', filters.author)
    }else {
        params.delete('author')
    }

    if(filters.publisher){
        params.set('publisher', filters.publisher)
    }else {
        params.delete('publisher')
    }

    history.pushState(null, '', url)

    window.dispatchEvent(new Event('popstate'))
}


