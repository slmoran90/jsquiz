import { useQuestionsStore } from '@/components/store/questions'
import { Button } from '@/components/ui/Button'
import { Stats } from '@/components/Stats'

export const Footer = ({ length }: { length: number }) => {
  const { resetGame } = useQuestionsStore()

  const Score = () => {
    return (
      <div className='flex flex-col gap-5 items-center w-full'>
        <Stats />

        <Button
          onClick={resetGame}
          className='bg-[#f7df1e] text-black hover:scale-105 transition'
        >
          Resetear juego
        </Button>
      </div>
    )
  }

  return (
    <footer className='w-full flex flex-col gap-4 items-center'>
      {length > 0 && <Score />}
      <p className='text-center text-lg mt-8'>
        Made with <span className='animate-bounce inline-block'>❤️</span> by{' '}
        <a
          href='https://sergiomoran.dev'
          target='_blank'
          rel='noopener noreferrer'
          className='link link-accent'
        >
          Sergio Morán
        </a>
      </p>
    </footer>
  )
}
