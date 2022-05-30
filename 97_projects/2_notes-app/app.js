let notesArr = [];
showNotes();

// add notes

const add_note_btn = document.getElementById('add-note-btn');
add_note_btn.addEventListener('click', function (e) {
    const input_note_textarea = document.getElementById('input-note-textarea');

    let notes = localStorage.getItem('notes');
    if (notes === null) {
        notesArr = [];
    }
    else {
        notesArr = JSON.parse(notes);
    }

    if (!((input_note_textarea.value).match(/^\s*$/gi))) {
        notesArr.push(input_note_textarea.value);
        localStorage.setItem('notes', JSON.stringify(notesArr));
    }

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
        html += `
                <div class="card text-bg-dark m-1 note-card" id="note-${i}" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${i + 1}</h5>
                        <p class="card-text">${e}</p>
                        <button onclick="deleteNote(${i})" class="btn btn-light">Delete Note</button>
                    </div>
                </div>
                `
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
    Array.from(note_card).forEach((e,i,arr) => {
        const para = e.getElementsByTagName('p')[0];
        if(para.innerText.toLowerCase().includes(input_search_value)){
            e.style.display = 'block';
        }
        else{
            e.style.display = 'none';
        }
    })
})
