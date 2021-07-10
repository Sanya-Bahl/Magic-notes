let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', add)

function add() {
    let note = localStorage.getItem("notes");

    if (note == null) {
        noteobj = [];
    }
    else {
        noteobj = JSON.parse(note);
    }
    let txt = document.getElementById('txt');
    noteobj.push(txt.value);
    localStorage.setItem('notes', JSON.stringify(noteobj));
    txt.value = "";

    show();
}
function show() {
    let note = localStorage.getItem("notes");
    if (note == null) {
        noteobj = [];
    }
    else {
        noteobj = JSON.parse(note);
    }
    let html = "";
    noteobj.forEach(function (element, index) {
        html += ` <div class="notecard card my-2 mx-2" style="width: 18rem;">
        
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <a href="#" id="${index}" class="btn btn-primary" onclick="deleten(this.id)">Delete note</a>
        </div>
        
      </div>`;
    });
    let ans = document.getElementById('notes');
    if (noteobj.length != 0) {
        ans.innerHTML = html;
    }
    else {
        ans.innerHTML = `Nothing to show. "Add a note".`
    }


}



function deleten(index) {
    let note = localStorage.getItem('notes');
    if (note == null) {
        noteobj = [];
    }
    else {
        noteobj = JSON.parse(note);
    }

    noteobj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(noteobj));
    show();
}



var search = document.getElementById('search');
search.addEventListener('input', searchn);

function searchn() {
    let inputxt = search.value;

    let card = document.getElementsByClassName('notecard');
    Array.from(card).forEach(function (element) {
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if (cardtxt.includes(inputxt)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    });
}