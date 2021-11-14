import {fetch} from 'react-fetch';
import * as db from './db.server';
import Note from './Note';


export default function NoteList({searchText}) {
  const notes = db.searchNotes(searchText);

  // const notes = fetch('http://localhost:4000/notes').json();
  // Now let's see how the Suspense boundary above lets us not block on this.
  // fetch('http://localhost:4000/sleep/3000');

  return notes.length > 0 ? (
    <ul className="notes-list">
      {notes.map((note) => (
        <li key={note.id}>
          <Note note={note} />
        </li>
      ))}
    </ul>
  ) : (
    <div className="notes-empty">
      {searchText
        ? `Couldn't find any notes titled "${searchText}".`
        : 'No notes created yet!'}{' '}
    </div>
  );
}
