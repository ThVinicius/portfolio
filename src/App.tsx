import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ResetCSS from './assets/css/Reset'
import GlobalCSS from './assets/css/Global'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Background from './components/background/Background'

function App() {
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalCSS />
      <Background />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
