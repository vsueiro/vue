import { defineStore } from 'pinia'

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    score: 0
  }),
  actions: {
    incrementScore() {
      console.log('yooo')
      console.log(this.score)
      this.score++
      console.log(this.score)
    }
  }
})
