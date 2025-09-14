import React, { useState } from 'react'
import Home from './components/Home'
import LoadingScreen from './components/LoadingScreen'
import { ThemeProvider } from './components/ThemeContext'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <ThemeProvider>
      {isLoading ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <Home />
      )}
    </ThemeProvider>
  )
}

export default App