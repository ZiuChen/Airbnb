import { useRoutes } from 'react-router-dom'
import routes from '@/router'

function App() {
  return (
    <div className="app">
      <div className="header">Header</div>
      <div className="page">{useRoutes(routes)}</div>
      <div className="footer">Footer</div>
    </div>
  )
}

export default App
