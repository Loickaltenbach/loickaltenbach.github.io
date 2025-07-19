import { useEffect, Suspense, lazy } from 'react'
import Header from './components/Header'
import './App.css'

const Hero = lazy(() => import('./components/Hero'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  useEffect(() => {
    // Tracker l'activité de la souris pour la protection anti-bot
    const handleMouseMove = () => {
      sessionStorage.setItem('mouseActivity', 'true')
    }
    
    document.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="App">
      <Header />
      <main role="main">
        <Suspense fallback={<div>Loading...</div>}>
          <Hero />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
