import { useEffect } from 'react';
import { useState } from 'react';

function App() {

  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return "dark"
    }
    return "ligth"
  })

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector('html')?.classList.add('dark')
    } else {
      document.querySelector('html')?.classList.remove('dark')
    }
  },[theme])

  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme === "ligth" ? "dark": "ligth")
  }

  return (
    <div className='h-screen flex justify-center items-center dark:bg-neutral-900'>
      <button className="bg-slate-200 px-4 py-2 hover:bg-slate-300 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"
       onClick={handleChangeTheme}>
        Change Theme
      </button>
    </div>
  )
}

export default App      