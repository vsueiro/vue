<template>
  <div id="app">
    <Question
      v-for="(question, index) in questions"
      :key="index"
      :title="question.title"
      :alternatives="question.alternatives"
      :correctIndex="question.correctIndex"
    ></Question>
    <p>Score: {{ store.score }} out of {{ store.total }}</p>
  </div>
</template>

<script setup>
import Question from '@/components/Question.vue'
import { useQuizStore } from '@/stores/store'
import questions from '@/data/questions.json' // Import your questions from JSON

const store = useQuizStore()
store.total = questions.length
</script>

<style></style>
