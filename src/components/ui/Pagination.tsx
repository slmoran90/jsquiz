import { useQuestionsStore } from '@/components/store/questions'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { Button } from './Button'

export const Pagination = ({ index }: { index: number }) => {
  const { questions, goToNextQuestion, goToPreviousQuestion } =
    useQuestionsStore()

  return (
    <div className='flex items-center gap-2 grow justify-center'>
      <Button
        onClick={goToPreviousQuestion}
        disabled={index === 0}
      >
        <ArrowLeft className='mr-2' />
      </Button>
      <span className='text-lg'>
        {index + 1} / {questions.length}
      </span>
      <Button
        onClick={goToNextQuestion}
        disabled={index >= questions.length - 1}
      >
        <ArrowRight className='ml-2' />
      </Button>
    </div>
  )
}
