import { Button } from '@/components/ui/Button'
import { useQuestionsStore } from '@/components/store/questions'

const LIMIT_QUESTIONS = 10

export const Start = () => {
  const { fetchQuestions } = useQuestionsStore()

  const handleClick = () => {
    fetchQuestions(LIMIT_QUESTIONS)
  }

  return (
    <Button
      className='bg-[#f7df1e] text-black custom-drop-shadow'
      onClick={handleClick}
    >
      ¡Empezar!
    </Button>
  )
}
