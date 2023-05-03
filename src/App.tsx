import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import Header from '@/components/Header'
import Logo from '@/components/Logo'
import HeaderRight from '@/components/HeaderRight'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div className="app">
      <div className="header">
        <Header left={<Logo />} center={<SearchBar />} right={<HeaderRight />}></Header>
      </div>
      <div className="page">{useRoutes(routes)}</div>
      <div className="footer">Footer</div>
    </div>
  )
}

export default App
