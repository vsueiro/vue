<template>
  <div>
    <h2>{{ question }}</h2>
    <Alternative
      v-for="(alternative, index) in alternatives"
      :key="index"
      :correct="index === correctIndex"
      :disabled="alternativeClicked"
      @click="handleClick"
    >
      {{ alternative }}
    </Alternative>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Alternative from './Alternative.vue'

const props = defineProps({
  question: String,
  alternatives: Array,
  correctIndex: Number
})

const alternativeClicked = ref(false)

const handleClick = () => {
  alternativeClicked.value = true
}
</script>

<style scoped></style>
