import { SiOpenaigym } from "react-icons/si"
import ThemeToggle from "./ThemeToggle"

const SidebarHeader = () => {
    return (
      <div className='flex items-center mb-4 gap-4 px-4'>
        <SiOpenaigym className='h-10 w-10 text-primary' />
        <h2 className="text-xl font-extrabold text-primary mr-auto">GPT-Genius</h2>
        <ThemeToggle />
      </div>
    )
  }
  
  export default SidebarHeader
  
