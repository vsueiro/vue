import { defineStore } from 'pinia'

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    score: 0,
    answered: 0,
    total: 0
  })
  // actions: {
  //   incrementScore() {
  //     this.score++
  //   }
  // }
})
