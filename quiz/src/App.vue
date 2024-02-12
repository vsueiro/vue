<template>
  <div id="app">
    <Question
      question="What is Vue.js?"
      :alternatives="['JavaScript framework', 'CSS framework', 'HTML template']"
      :correctIndex="0"
    ></Question>
    <Question
      question="Who created Vue.js?"
      :alternatives="['Evan You', 'Dan Abramov', 'Tim Berners-Lee']"
      :correctIndex="0"
    ></Question>
    <Question
      question="What is Pinia?"
      :alternatives="['State management library', 'Database', 'CSS preprocessor']"
      :correctIndex="0"
    ></Question>

    <p>Score: {{ store.score }}</p>
  </div>
</template>

<script setup>
import Question from './components/Question.vue'
import { useQuizStore } from './store'

const store = useQuizStore()
</script>

<style></style>
