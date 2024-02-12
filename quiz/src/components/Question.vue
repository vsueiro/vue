<template>
  <div>
    <h2>{{ question }}</h2>
    <Alternative
      v-for="(alternative, index) in alternatives"
      :key="index"
      :correct="index === correctIndex"
      :disabled="alternativeClicked"
      @click="handleClick(index)"
    >
      {{ alternative }}
    </Alternative>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useQuizStore } from '../store'
import Alternative from './Alternative.vue'

const props = defineProps({
  question: String,
  alternatives: Array,
  correctIndex: Number
})

const alternativeClicked = ref(false)
const store = useQuizStore()

const handleClick = (index) => {
  alternativeClicked.value = true
  if (index === props.correctIndex) {
    store.incrementScore()
  }
}
</script>

<style scoped></style>
