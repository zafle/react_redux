import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

const notesAdapter = createEntityAdapter({
  selectId: (note) => note.noteId,
})

export const notesSlice = createSlice({
  name: 'notes',
  initialState: notesAdapter.getInitialState(),
  reducers: {
    addNote: notesAdapter.addOne,
    removeNote: notesAdapter.removeOne,
    updateNote: notesAdapter.updateOne,
  },
})
export const { addNote, removeNote, updateNote } = notesSlice.actions
export const notesSelector = notesAdapter.getSelectors((state) => state.notes)
export const getAllNotes = (state) => notesSelector.selectAll(state)
