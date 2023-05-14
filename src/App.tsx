import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import Header from '@/components/Header'
import Logo from '@/components/Logo'
import HeaderRight from '@/components/HeaderRight'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header left={<Logo />} center={<SearchBar />} right={<HeaderRight />}></Header>
      {useRoutes(routes)}
      <Footer />
    </>
  )
}

export default App
