<template>
  <div class="relative z-10">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center w-full sm:mt-0 sm:text-left">
                 <h2 class="font-bold text-2xl text-red-500">DELETE</h2>
                 <p>Are you sure to delete this note?</p>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button type="button"
              class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
              @click.prevent="deleteNote(id)"
              >Delete</button>
              <button type="button"
              @click.prevent="$emit('cancelDelete')"
              class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { appStore } from '../stores/store'

const store = appStore()

const props = defineProps([
  'id',
  'isDeleteModalOpened'
])

const emit = defineEmits([
  'deleteNote'
])

function deleteNote(id) {
  store.deleteNote(id)
  emit('deleteNote')
}
</script>