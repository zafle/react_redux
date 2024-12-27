import { useDispatch, useSelector } from 'react-redux'
import { addNote, removeNote, notesSelector } from './notesSlice'
// import { getAllNotes } from '../../app/selectors'
import { nanoid } from '@reduxjs/toolkit'

export function Notes() {
  const dispatch = useDispatch()
  const notes = useSelector(notesSelector.selectAll)
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      addNote({
        noteId: nanoid(),
        content: e.currentTarget.newNote.value,
      })
    )
  }
  return (
    <div className="Notes">
      <h1>Mes notes</h1>
      <form action="#" onSubmit={handleSubmit}>
        <label>
          Ajouter une note :<textarea name="newNote"></textarea>
        </label>
        <button type="submit">Ajouter</button>
      </form>
      <div>
        <h2>Mes notes ajoutées :</h2>
        <ul>
          {notes.length > 0 ? (
            notes.map((note) => {
              return (
                <li key={note.noteId}>
                  <span>{note.content}</span>
                  <button onClick={() => dispatch(removeNote(note.noteId))}>
                    Supprimer
                  </button>
                </li>
              )
            })
          ) : (
            <span>Aucune note</span>
          )}
        </ul>
      </div>
    </div>
  )
}
