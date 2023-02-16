<template>
  <div class="h-screen bg-gray-100">
    <Modal
    v-if="isModalOpened" />
    <div class="py-10">
      <div class="max-w-md m-auto">
        <div class="flex justify-between">
          <h1 class="font-bold text-4xl">NOTES</h1>
          <button @click.prevent="modalFunction()"
          class="bg-neutral-800 text-gray-100 rounded-full w-10 h-10 transition ease-in-out duration-300 hover:bg-neutral-900">
            +
          </button>
        </div>
        <p class="flex items-center">
          * Done with
          <img class="w-4 ml-2" src="./assets/pinia.svg" alt="pinia" />
          <span class="font-semibold text-neutral-700 text-lg">Pinia</span>
        </p>
      </div>
      <div class="max-w-6xl m-auto py-10 flex flex-wrap justify-around">
      <div v-for="(note, id) in notes" :key="id">
        <Card
        :note="note"
        :id="id" />
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import Card from './components/Card.vue'
import Modal from './components/Modal.vue'

import { appStore } from './stores/store'
import { storeToRefs } from 'pinia'

const store = appStore()
const isModalOpened = storeToRefs(store).isModalOpened
const notes = storeToRefs(store).notes

function modalFunction() {
  store.modalFunction()
}

</script>