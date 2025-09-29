"use client"

import { useState, useEffect } from "react"
import { Button } from "../ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Check system preference and local storage
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    }

    // Add scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)

    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div>
      <header className={`
        fixed left-0 right-0 bg-background/80 backdrop-blur-sm border-b border-border z-50 transition-all duration-300
        md:top-[30px] md:mx-[70px] md:rounded-[40px]
        ${isScrolled ? 'md:mx-[150px]' : 'md:mx-[40px]'}
        top-[15px] mx-[20px] rounded-[40px]
      `}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-black w-10 h-10 rounded-full flex items-center justify-center">
                <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
              </div>
              <span className="srisakdi-regular text-xl font-sans">ปูนปั้น ภู่กันทอง</span>
            </div>

            <nav className="hidden md:flex items-center justify-between space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors font-sans">
                เกี่ยวกับเรา
              </a>
              <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors font-sans">
                ผลงาน
              </a>
              <a href="#owners" className="text-muted-foreground hover:text-foreground transition-colors font-sans">
                เจ้าของกิจการ
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors font-sans">
                ติดต่อเรา
              </a>
              <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </nav>

            <div className="flex items-center space-x-2 md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 overflow-hidden rounded-[40px]">
              <div className="flex flex-col space-y-4 items-center justify-center py-4 rounded-[40px]">
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-foreground transition-colors font-sans"
                  onClick={() => setIsMenuOpen(false)}
                >
                  เกี่ยวกับเรา
                </a>
                <a
                  href="#portfolio"
                  className="text-muted-foreground hover:text-foreground transition-colors font-sans"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ผลงาน
                </a>
                <a
                  href="#owners"
                  className="text-muted-foreground hover:text-foreground transition-colors font-sans"
                  onClick={() => setIsMenuOpen(false)}
                >
                  เจ้าของกิจการ
                </a>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-foreground transition-colors font-sans"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ติดต่อเรา
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>
    </div>
  )
}