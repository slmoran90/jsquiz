import { Footer } from '@/components/common/Footer'
import { Header } from '@/components/common/Header'
import { Game } from '@/components/Game'
import { Start } from '@/components/Start'
import { useQuestionsStore } from '@/components/store/questions'
import './App.css'

const App = () => {
  const { questions } = useQuestionsStore()

  return (
    <main>
      <div className='doc-stars doc-stars--sm'></div>
      <div className='doc-stars doc-stars--md'></div>
      <div className='doc-stars doc-stars--lg'></div>

      <section className='max-w-md flex flex-col items-center gap-8 mx-auto z-10 bg-[#121212]/80 rounded-2xl p-8 justify-center'>
        <Header />

        {questions.length === 0 && <Start />}
        {questions.length > 0 && <Game />}

        <Footer length={questions.length} />
      </section>
    </main>
  )
}

export default App
