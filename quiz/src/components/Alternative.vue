<template>
  <button
    @click="handleClick"
    :class="{
      clicked: clicked,
      correct: correct
    }"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { ref } from 'vue'

const clicked = ref(false)
const props = defineProps({
  clicked: Boolean,
  correct: Boolean
})

const handleClick = () => {
  clicked.value = true
}
</script>

<style>
.clicked {
  background: hotpink;
}
.clicked.correct {
  background: turquoise;
}
</style>
