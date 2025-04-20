import { useQuestionsStore } from '@/components/store/questions'

export const useFilterAnswers = () => {
  const { questions } = useQuestionsStore()

  let correctAnswers = 0,
    incorrectAnswers = 0,
    unanswered = 0

  questions.map((q) => {
    const { userSelectedAnswer, isCorrectUserAnswer } = q
    if (isCorrectUserAnswer) correctAnswers++
    else if (userSelectedAnswer == null) unanswered++
    else incorrectAnswers++
  })

  return {
    correctAnswers,
    incorrectAnswers,
    unanswered
  }
}
