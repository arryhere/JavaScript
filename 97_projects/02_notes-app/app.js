let notesArr = [];      // array to store our note objects and keep it in localStorage

showNotes();

// add notes

const add_note_btn = document.getElementById('add-note-btn');
add_note_btn.addEventListener('click', function (e) {
    const input_title_textarea = document.getElementById('input-title-textarea');
    const input_note_textarea = document.getElementById('input-note-textarea');

    let notes = localStorage.getItem('notes');
    if (notes === null) {
        notesArr = [];
    }
    else {
        notesArr = JSON.parse(notes);
    }

    const obj = {
        title: '',
        note: '',
        imp: { background: '', text: '' }
    }

    if(input_title_textarea.value.length > 30){
        obj.title = input_title_textarea.value.slice(0,31);
    }
    else{
        obj.title = input_title_textarea.value;
    }
    obj.note = input_note_textarea.value;

    if (!((input_note_textarea.value).match(/^\s*$/gi))) {
        notesArr.push(obj);
        localStorage.setItem('notes', JSON.stringify(notesArr));
    }

    input_title_textarea.value = '';
    input_note_textarea.value = '';

    showNotes();
})

// show notes

function showNotes() {
    const notes = localStorage.getItem('notes');
    if (notes === null) {
        notesArr = [];
    }
    else {
        notesArr = JSON.parse(notes);
    }

    let html = '';
    notesArr.forEach((e, i, arr) => {
        if(e.title === ''){
            e.title = 'No Title'
            html += `
                    <div class="card text-bg-light m-1 note-card ${e.imp.background} ${e.imp.text}" id="note-${i}" style="width: 18rem;">
                        <div class="card-body">
                                <h5 class="card-title">${e.title}</h5>
                                <p class="card-text">${e.note}</p>
                                <div class="d-flex flex-row justify-content-end align-items-center">
                                    <button onclick="markImp(${i})" type="button" id="imp-note-${i}" class="me-2 btn btn-dark btn-sm d-flex justify-content-center align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" id="svg-imp-${i}" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                    </button>
                                    <button onclick="deleteNote(${i})" class="btn btn-dark btn-sm d-flex justify-content-center align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                                        </svg>
                                    </button>
                                </div>
                            
                        </div>
                    </div>
                    `
        }
        else{
            html += `
                    <div class="card text-bg-light m-1 note-card ${e.imp.background} ${e.imp.text}" id="note-${i}" style="width: 18rem;">
                        <div class="card-body">
                                <h5 class="card-title">${e.title}</h5>
                                <p class="card-text">${e.note}</p>
                                <div class="d-flex flex-row justify-content-end align-items-center">
                                    <button onclick="markImp(${i})" type="button" id="imp-note-${i}" class="me-2 btn btn-dark btn-sm d-flex justify-content-center align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" id="svg-imp-${i}" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                    </button>
                                    <button onclick="deleteNote(${i})" class="btn btn-dark btn-sm d-flex justify-content-center align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                                        </svg>
                                    </button>
                                </div>
                            
                        </div>
                    </div>
                    `
        }
        
    });

    const my_notes_div = document.getElementById('my-notes-div');
    if (notesArr.length !== 0) {
        my_notes_div.innerHTML = html;
    }
    else {
        localStorage.clear();
        my_notes_div.innerHTML = `
                                <div class="text-center my-5">
                                    <p>Its quite empty in here.... Add your first note !</p>
                                </div>
                                `
    }

}

// clear input field

const clear_input_field = document.getElementById('clear-input-field');
clear_input_field.addEventListener('click', function(){
    const input_title_textarea = document.getElementById('input-title-textarea');
    const input_note_textarea = document.getElementById('input-note-textarea');

    input_title_textarea.value = '';
    input_note_textarea.value = '';

})

// clear all notes btn

const clear_all_notes = document.getElementById('clear-all-notes');
clear_all_notes.addEventListener('click', function (e) {
    localStorage.clear();
    showNotes();
})

// delete a note btn

function deleteNote(i) {
    notesArr.splice(i, 1);
    localStorage.setItem('notes', JSON.stringify(notesArr));
    showNotes();
}

// search

const input_search = document.getElementById('input-search');
input_search.addEventListener('input', function () {
    const input_search_value = input_search.value.toLowerCase();

    const note_card = document.getElementsByClassName('note-card');
    Array.from(note_card).forEach((e, i, arr) => {
        const note = e.getElementsByTagName('h5')[0];
        const para = e.getElementsByTagName('p')[0];
        if (para.innerText.toLowerCase().includes(input_search_value) || note.innerText.toLowerCase().includes(input_search_value)) {
            e.style.display = 'block';
        }
        else {
            e.style.display = 'none';
        }
    })
})

// mark imp

function markImp(i) {
    const note_div = document.getElementById('note-' + i);

    let notes = localStorage.getItem('notes');
    if (notes === null) {
        notesArr = [];
    }
    else {
        notesArr = JSON.parse(notes);
    }
    if (notesArr[i].imp.background === '' && notesArr[i].imp.text === '') {
        notesArr[i].imp.background = 'bg-secondary';
        notesArr[i].imp.text = 'text-light';
        localStorage.setItem('notes', JSON.stringify(notesArr));
        showNotes();
    }
    else{
        notesArr[i].imp.background = '';
        notesArr[i].imp.text = '';
        localStorage.setItem('notes', JSON.stringify(notesArr));
        showNotes();
    }


}

