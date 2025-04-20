import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export const CodeSyntaxHighlighter = ({ code }: { code: string }) => {
  return (
    <div className='px-0 mockup-code w-full bg-[#282c34] rounded-lg'>
      <SyntaxHighlighter
        language='javascript'
        style={atomOneDark}
        className='!flex'
        codeTagProps={
          code ? { className: 'w-full inline-block text-left' } : {}
        }
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
