import { useState } from 'react'
import { ThemeProvider } from './context/theme'
import { useEffect } from 'react'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import Dashboard from './components/Dashboard'

function App() {
  const [themeMode, setThemeMode] = useState('light')
  const lightTheme = () => setThemeMode('light')
  const darkTheme = () => setThemeMode('dark')

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex min-h-screen">
        {/* Dashboard on the left */}
        <div className="w-1/5 bg-gray-200">
          <Dashboard />
        </div>

        {/* Content on the right */}
        <div className="w-4/5 flex flex-col items-center">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          {/* <div className="w-full max-w-sm mx-auto">
            <Card />
          </div> */}
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
