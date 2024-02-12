<template>
  <div>
    <h2>{{ question }}</h2>
    <Alternative
      v-for="(alternative, index) in alternatives"
      :key="index"
      :index="index"
      :correct="correctIndex"
    >
      {{ alternative }}
    </Alternative>
  </div>
</template>

<script setup>
import Alternative from './Alternative.vue'

const props = defineProps({
  question: String,
  alternatives: Array,
  correctIndex: Number
})
</script>

<style scoped></style>
