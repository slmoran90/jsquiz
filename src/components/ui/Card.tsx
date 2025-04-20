import { useQuestionsStore } from '@/components/store/questions'
import { type Question as QuestionType } from '@/tpyes'
import { bgCorrectAnswer } from '@/lib/utils'
import { List, ListItem } from '@/components/ui/List'
import { CodeSyntaxHighlighter } from '@/components/CodeSyntaxHighlighter'

export const Card = ({ info }: { info: QuestionType }) => {
  const { selectAnswer } = useQuestionsStore()
  const { code, answers, id, userSelectedAnswer } = info

  const handleSelectAnswer = (index: number) => () => {
    selectAnswer(id, index)
  }

  return (
    <div className='card bg-neutral-800/50 max-w-full shadow-sm'>
      <div className='card-body p-0'>
        <h2 className='card-title justify-center'>
          ¿Cuál es el resultado de la siguiente expresión?
        </h2>
        <CodeSyntaxHighlighter code={code} />

        <List>
          {answers.map((option, index) => (
            <ListItem
              key={index}
              className={`${bgCorrectAnswer(info, index)}`}
            >
              <button
                onClick={handleSelectAnswer(index)}
                disabled={userSelectedAnswer != null}
                className={`${
                  userSelectedAnswer != null
                    ? 'cursor-not-allowed'
                    : 'cursor-pointer'
                }`}
              >
                {option}
              </button>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  )
}
