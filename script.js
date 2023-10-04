let titels = [];
let notizen = [];

load();

function render() {
    let head = document.getElementById('head');
    head.innerHTML = '';
    head.innerHTML += `
        <div class="header">
           <h1 class="headline">Notizblock</h1>
        </div>`;
    head.innerHTML += `
        <div class="writer">
          <textarea class="add" name="titel" id="titel" placeholder="Titel" cols="60" rows="3"></textarea>
          <textarea class="add" name="notiz" id="notiz" cols="60" rows="10" placeholder="Notiz schreiben..."></textarea>
          <button class="add" onclick="addNote()">Speichern</button>
        </div>
    `;

    for (let i = 0; i < titels.length; i++) {
        const titel = titels[i];
        const notiz = notizen[i];

        head.innerHTML += `
            <div class="card">
              <b>Titel: </b> ${titel} <br>
              <b>Meine Notiz: </b> ${notiz} <br>
              <button class="add" onclick= "deleteNote(${i})">Löschen</button>
            </div>
        `;
    }
}

function addNote() {
    let titel = document.getElementById('titel');
    let notiz = document.getElementById('notiz');

    titels.push(titel.value);
    notizen.push(notiz.value);

    render();
    save();
}

function deleteNote(i) {
    titels.splice(i, 1);
    notizen.splice(i, 1);

    render();
    save();
}

function save() {
    let titelText = JSON.stringify(titels); // Array in text (String) umwandeln
    localStorage.setItem('titel', titelText); // Speichern

    let notizText = JSON.stringify(notizen);
    localStorage.setItem('notiz', notizText);
}

function load() {
    let titelText = localStorage.getItem('titel');
    let notizText = localStorage.getItem('notiz');
    if (titelText && notizText) {
        titels = JSON.parse(titelText);
        notizen = JSON.parse(notizText);
    }
}