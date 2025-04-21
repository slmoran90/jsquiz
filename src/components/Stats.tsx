import { useFilterAnswers } from '@/hooks/useFilterAnswers'

export const Stats = () => {
  const { correctAnswers, incorrectAnswers, unanswered } = useFilterAnswers()

  return (
    <div className='stats shadow text-white'>
      <div className='stat place-items-center'>
        <div className='stat-title text-emerald-500'>Correctas</div>
        <div className='stat-value text-emerald-500'>{correctAnswers}</div>
      </div>

      <div className='stat place-items-center'>
        <div className='stat-title text-red-500'>Incorrectas</div>
        <div className='stat-value text-red-500'>{incorrectAnswers}</div>
      </div>

      <div className='stat place-items-center'>
        <div className='stat-title'>Sin responder</div>
        <div className='stat-value'>{unanswered}</div>
      </div>
    </div>
  )
}
