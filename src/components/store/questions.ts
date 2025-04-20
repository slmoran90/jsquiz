import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type Question } from '@/tpyes'
import { getQuestions } from '@/services/questions'

interface State {
  questions: Question[]
  currentQuestionIndex: number
  fetchQuestions: (limit: number) => Promise<void>
  selectAnswer: (id: number, index: number) => void
  goToNextQuestion: () => void
  goToPreviousQuestion: () => void
  resetGame: () => void
}

const API_URL = import.meta.env ?? 'http://localhost:5173'

export const useQuestionsStore = create<State>()(
  persist(
    (set, get) => ({
      questions: [],
      currentQuestionIndex: 0, // Initialize the current question index to 0

      // Function to fetch questions from the API and set them in the store
      fetchQuestions: async (limit: number) => {
        const questions = await getQuestions(limit, `${API_URL}/data.json`)
        set({ questions })
      },

      // Function to select an answer for a question
      selectAnswer: (id: number, index: number) => {
        const { questions } = get()
        const cloneQuestions = structuredClone(questions)

        // Find index of the question
        const questionIndex = cloneQuestions.findIndex((q) => q.id === id)

        // Recover the question info and update the selected answer
        const questionInfo = cloneQuestions[questionIndex]

        const isCorrect = questionInfo.correctAnswer === index

        cloneQuestions[questionIndex] = {
          ...questionInfo,
          userSelectedAnswer: index,
          isCorrectUserAnswer: isCorrect
        }
        // Update the state

        set({ questions: cloneQuestions })
      },

      // Function to go to the next question
      goToNextQuestion: () => {
        const { currentQuestionIndex, questions } = get()
        const nextIndex = currentQuestionIndex + 1

        if (nextIndex < questions.length)
          set({ currentQuestionIndex: nextIndex })
      },

      // Function to go to the previous question
      goToPreviousQuestion: () => {
        const { currentQuestionIndex } = get()
        const previousIndex = currentQuestionIndex - 1

        if (previousIndex >= 0) set({ currentQuestionIndex: previousIndex })
      },

      // Function to reset the game state
      resetGame: () => {
        set({ currentQuestionIndex: 0, questions: [] })
      }
    }),
    {
      name: 'questions-storage' // Name of the storage key in localStorage
    }
  )
)
