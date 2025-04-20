import { useQuestionsStore } from '@/components/store/questions'
import { Card } from '@/components/ui/Card'
import { Pagination } from '@/components/ui/Pagination'

export const Game = () => {
  const { questions, currentQuestionIndex } = useQuestionsStore()
  const questionInfo = questions[currentQuestionIndex]

  return (
    <div className='flex flex-col gap-4 items-center'>
      <Pagination index={currentQuestionIndex} />
      <Card info={questionInfo} />
    </div>
  )
}
