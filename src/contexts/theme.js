import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light')

  useEffect(() => {
    // 检查 localStorage 中是否有主题设置
    const savedTheme = localStorage.getItem('themeName')
    if (savedTheme) {
      setThemeName(savedTheme)
    } else {
      // 如果没有保存的主题，检查系统主题
      const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      setThemeName(darkMediaQuery.matches ? 'dark' : 'light')
      darkMediaQuery.addEventListener('change', (e) => {
        setThemeName(e.matches ? 'dark' : 'light')
      })
    }
  }, [])

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark'
    localStorage.setItem('themeName', name)
    setThemeName(name)
  }

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }