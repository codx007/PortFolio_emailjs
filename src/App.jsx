import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LoadingScreen } from './Components/LoadingScreen'
import { Navbar } from './Components/Sections/NavBar'
import { MobileMenu } from './Components/Sections/Mobilemenu'
import { Home } from './Components/Sections/Home'
import { About } from './Components/Sections/About'
import { Project } from './Components/Sections/Project'
import { Contact } from './Components/Sections/Contact'
function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{""}
      <div
        className="">
 
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
         <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home/>
      <Contact/>
      <About/>
      <Project/>
      

      </div>

    </>
  );
}

export default App
