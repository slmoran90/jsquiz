import Logo from '@/components/JavaScriptLogo.tsx'

export const Header = () => {
  return (
    <div className='flex gap-2 items-center justify-center'>
      <Logo />
      <h1 className='text-4xl'>JavaScript Quiz</h1>
    </div>
  )
}
