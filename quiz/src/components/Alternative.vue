<template>
  <button
    @click="handleClick"
    :class="{
      clicked: clicked,
      correct: isCorrect
    }"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  index: Number,
  correct: Number
})

const clicked = ref(false)
const isCorrect = props.index === props.correct

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
