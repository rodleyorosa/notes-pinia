<template>
  <div class="relative z-10">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center w-full sm:mt-0 sm:text-left space-y-4">
                  <input
                  placeholder="Title"
                  maxlength=20
                  v-model="title"
                  class="w-full p-2 border rounded shadow-md"
                  />
                  <textarea name="text" id="text" rows="4"
                  placeholder="Write something ..."
                  class="w-full p-2 border rounded shadow-md"
                  v-model="newNote"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button type="button"
              class="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
              @click.prevent="addNote"
              :disabled="!newNote || !title"
              :class="{'bg-gray-600 hover:bg-gray-600': !newNote || !title}"
              >Send</button>
              <button type="button"
              @click.prevent="modalFunction()"
              class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >Cancel</button>{{addNote.addNote}}
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { appStore } from '../stores/store'
import { storeToRefs } from 'pinia'

const store = appStore()
const isModalOpened = storeToRefs(store).isModalOpened
const newNote = storeToRefs(store).newNote
const title = storeToRefs(store).title

function modalFunction() {
  store.modalFunction()
}

function addNote() {
  store.addNote()
}

</script>