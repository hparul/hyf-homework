const notes = [];

function saveNote(content, id) {
  notes.push({ content: content, id: id });
  console.log(notes);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("prepare lunch", 3);
saveNote("go for an evening walk", 4);
saveNote("drink green tea", 5);

// [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

//function to get notes by id

function getNote(id) {
<<<<<<< HEAD
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      const myNote = notes[i];
      break;
    } else if (notes[i].id === " " || notes[i].id !== "number") {
      const myNote = "cant find this id";
=======
  for (i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      myNote = notes[i];
      break;
    } else if (notes[i].id === " " || notes[i].id !== "number") {
      myNote = "cant find this id";
>>>>>>> e7e47aa7a11aa6e75e1d19ae7dcfd0a5b2cf740f
    }
  }
  return myNote;
}

const firstNote = getNote(4);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

//function to logout notes

function logOutNotesFormatted() {
<<<<<<< HEAD
  for (let i = 0; i < notes.length; i++) {
=======
  for (i = 0; i < notes.length; i++) {
>>>>>>> e7e47aa7a11aa6e75e1d19ae7dcfd0a5b2cf740f
    console.log(
      `The note with id:${notes[i].id}, has the following note text:${notes[i].content}`
    );
  }
}

<<<<<<< HEAD
logOutNotesFormatted();
=======
logOutNotesFormatted();
>>>>>>> e7e47aa7a11aa6e75e1d19ae7dcfd0a5b2cf740f
