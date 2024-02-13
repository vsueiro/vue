<template>
  <section>
    <h2>{{ title }}</h2>
    <div class="alternatives">
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
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useQuizStore } from '@/stores/store'
import Alternative from '@/components/Alternative.vue'

const props = defineProps({
  title: String,
  alternatives: Array,
  correctIndex: Number
})

const alternativeClicked = ref(false)
const store = useQuizStore()

const handleClick = (index) => {
  alternativeClicked.value = true
  store.answered++
  if (index === props.correctIndex) {
    store.score++
  }
}
</script>

<style scoped>
section {
  border: 1px solid red;
  font-family: sans-serif;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 12px auto;
  width: calc(100% - 48px);
  max-width: 480px;
}
h2 {
  margin: 0;
}
.alternatives {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: start;
}
</style>
