import { defineStore } from 'pinia'
export const appStore = defineStore('app', {
  state: () => ({
    notes: [],
    isModalOpened: false,
    title: '',
    newNote: ''
  }),
  actions: {
    modalFunction() {
      this.isModalOpened = !this.isModalOpened
      this.title = ''
      this.newNote = ''
    },
    addNote() {
      const date = new Date()
      const fullDate = date.toLocaleString('en-GB')
      this.notes.push(
        {
          title: this.title,
          msg: this.newNote,
          date: fullDate
        }
      )
      this.isModalOpened = false;
    },
    deleteNote(id) {
      this.notes.splice(id, 1)
    }
  }
})
