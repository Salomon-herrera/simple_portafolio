<template>
  <div class="flex flex-col h-auto w-full fonts-sans lg:flex-row lg:h-screen">
      <div class="flex h-screen bg-dark-600 w-full relative items-center justify-center lg:w-1/2">
        <div class="flex w-full px-4 top-4 left-0 gap-4 absolute items-center justify-between lg:px-8">
          <img src="/logo.svg" alt="logo">
        </div>
        <template v-for="_d in data" :key="_d.index">
          <Info v-if="seleccion === _d.index" v-motion-slide-bottom>
            <template #title >
              {{ _d.title}}
            </template>
            <template #subtitle >
              {{ _d.subtitle}}
            </template>
            <template #description >
              {{ _d.description}}
            </template>
          </Info>
        </template>
      </div>
      <div class="h-screen w-full lg:w-1/2">
        <img :src="`Archivo_${seleccion}.jpg`" class="h-full object-cover object-center w-full animate-fade-in" width="300" height="600" lt="imagen-proyeto" loading="lazy">
          <div class="flex w-full absolute bottom-4 left-0 gap-4 px-4 items-center justify-center">
            <template v-for="n in 3">
              <button @click="setImage(n)" class="rounded-lg font-semibold bg-green-600/50 h-10 p-2 w-10">
                {{ n }}
              </button>
            </template>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
const seleccion = ref(1)
const data = ref([
  {
    index:1,
    title: 'Proyecto Uno',
    subtitle: 'Front End Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    index:2,
    title: 'Proyecto Dos',
    subtitle: 'Back End Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    index:3,
    title: 'Proyecto Tres',
    subtitle: 'Designer UI/UX',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  }
])
function setImage(indeex: number) {
  seleccion.value = indeex
}
</script>