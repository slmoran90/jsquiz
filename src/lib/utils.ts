import { Question as QuestionType } from '@/types'

export const bgCorrectAnswer = (info: QuestionType, index: number) => {
  const { userSelectedAnswer, correctAnswer } = info

  // If user has not selected an answer yet, return transparent
  if (userSelectedAnswer == null) return 'transparent'

  // If user selected an answer and it is not the correct one, return neutral color
  if (correctAnswer !== index && userSelectedAnswer !== index)
    return 'text-neutral-500'

  // If user selected the correct answer, return green color
  if (correctAnswer === index) return 'bg-emerald-700 text-emerald-200'

  // If user selected an incorrect answer, return red color
  if (userSelectedAnswer === index) return 'bg-red-800 text-red-200'

  // If none of the above conditions are met, return transparent
  return 'transparent'
}
