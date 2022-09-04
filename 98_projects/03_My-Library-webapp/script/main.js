//// arr to store book objects
let bookArr = [];

//// check if local storage is null or not
function check() {
    if (localStorage.getItem('books') === null) {
        bookArr = []
    }
    else {
        bookArr = JSON.parse(localStorage.getItem('books'));
    }
}
check();

//// run display to add books from local storage
Display()

//// book object constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
    this.count = 0;
}

//// submit to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    //prevent default on form submit
    e.preventDefault();

    check();
    let name = document.getElementById('inputBookName').value.trim();
    if (name.length > 30) {
        name = name.slice(0, 30);
    }
    let author = document.getElementById('inputBookAuthor').value.trim();
    if (author.length > 30) {
        author = author.slice(0, 30);
    }
    let _type = Array.from(document.getElementsByClassName('form-check-input'));
    let type;
    for (const x of _type) {
        if (x.checked === true) {
            type = x.value.trim();
            break;
        }
    }

    // empty field will not get input
    if (!(name.match(/^\s*$/gi)) && !(author.match(/^\s*$/gi)) && !(type === undefined)) {
        let book = new Book(name, author, type);

        //check for similar books in library
        if (bookArr.length === 0) {
            bookArr.push(book);
        }
        else {
            let i = 0;
            let check_match = false;
            for (const x of bookArr) {
                if (book.name.toLowerCase() === x.name.toLowerCase() && book.author.toLowerCase() === x.author.toLowerCase()) {
                    check_match = true;
                    break;
                }
                i++;
            }
            if (check_match === false) {
                bookArr.push(book);
            }
            else {
                bookArr[i].count++;
                bookArr[i].type = type;
            }
        }

        localStorage.setItem('books', JSON.stringify(bookArr))

        libraryForm.reset();
    }

    Display()
}

//// clear input field inputs
let btn_clear_input = document.getElementById('btn-clear-input');
btn_clear_input.addEventListener('click', function () {
    libraryForm.children[0].children[1].children[0].value = ''
    libraryForm.children[1].children[1].children[0].value = ''
    for (let i = 0; i < 5; i++) {
        libraryForm.children[2].children[1].children[i].children[0].checked = false;
    }
})


//// display books
function Display() {
    check();

    let html = '';

    if (bookArr.length !== 0) {
        let i = 1;
        for (const x of bookArr) {
            html += `
                <tr class="r-book" id="book-${i}">
                    <td>
                        <div class="d-flex flex-column flex-md-row justify-content-center align-items-center">
                            <button onclick="deleteBook(${i})" class="btn btn-secondary btn-sm d-flex justify-content-center align-items-center" id="btn-trash"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                                </svg>
                            </button>
                            <button class="btn btn-secondary btn-sm d-flex justify-content-center align-items-center" id="btn-count">${x.count + 1}</button>
                            <button onclick="icrBook(${i})" class="btn btn-secondary btn-sm d-flex justify-content-center align-items-center" id="btn-icr"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                </svg>
                            </button>
                        </div>
                    </td>
                    <th scope="row">${i}</th>
                    <td>${x.name}</td>
                    <td>${x.author}</td>
                    <td>${x.type}</td>
                </tr>
                `
            i++;
        }
    }
    else {
        html += `
                <tr>
                    <td class="text-center" colspan="5">...its quite empty in here. Add a book !</td>
                </tr>
                `
    }
    let t_body = document.getElementById('t-body');
    t_body.innerHTML = html;
}

//// delete book
function deleteBook(i) {
    let index = i - 1;
    if (bookArr[index].count === 0) {
        bookArr.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(bookArr));
    }
    else {
        bookArr[index].count--;
        console.log(bookArr[index].count);
        localStorage.setItem('books', JSON.stringify(bookArr));
    }
    Display();
}

//// delete all books
const clear_all_btn = document.getElementById('clear-all-btn');
clear_all_btn.addEventListener('click', function () {
    check();
    bookArr.splice(0, bookArr.length);           // best performance to empty array
    localStorage.setItem('books', JSON.stringify(bookArr))
    Display();
})

//// increment book
function icrBook(i) {
    let index = i - 1;
    check();
    bookArr[index].count++;
    localStorage.setItem('books', JSON.stringify(bookArr));
    Display();
}

//// search
const search_box = document.getElementById('search-box');
search_box.addEventListener('input', function () {
    check();
    const r_book = document.getElementsByClassName('r-book');

    const search_input_value = search_box.value.toLowerCase();

    for (const x of Array.from(r_book)) {
        const num = x.getElementsByTagName('th')[0].innerText.toLowerCase();
        const name = x.getElementsByTagName('td')[1].innerText.toLowerCase();
        const author = x.getElementsByTagName('td')[2].innerText.toLowerCase();
        const type = x.getElementsByTagName('td')[3].innerText.toLowerCase();

        if (num.includes(search_input_value) || name.includes(search_input_value) || author.includes(search_input_value) || type.includes(search_input_value)) {
            x.style.display = 'table-row';
        }
        else {
            x.style.display = 'none';
        }
    }
})

