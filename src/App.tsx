import { Start } from '@/components/Start'
import { useQuestionsStore } from '@/components/store/questions'
import { Header } from '@/components/common/Header'
import { Footer } from '@/components/common/Footer'
import { Game } from '@/components/Game'
import './App.css'

const App = () => {
  const { questions } = useQuestionsStore()

  return (
    <main className='flex justify-center'>
      <section className='max-w-md flex flex-col items-center gap-8'>
        <Header />

        {questions.length === 0 && <Start />}
        {questions.length > 0 && <Game />}

        <Footer length={questions.length} />
      </section>
    </main>
  )
}

export default App
