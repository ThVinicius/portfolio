import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ResetCSS from './assets/css/Reset'
import GlobalCSS from './assets/css/Global'
import Header from './components/header/Header'
import Home from './pages/home/Home'

function App() {
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalCSS />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
