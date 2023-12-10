
import Link from 'next/link'

const HomePage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="text-center hero-content"> 
        <div className="max-w-md">
          <h1 className="text-6xl font-bold text-primary">
            GPT-Genius
          </h1> 
          <p className="py-6 text-lg leading-loose">
            Your AI companion. Powered by OpenAI, it enhances your conversations, content creation and more. 
          </p>
          <Link href='/chat' className='btn btn-secondary'>
            Get Started
          </Link>
         
      </div>
    </div>
  </div>
  )
}

export default HomePage
