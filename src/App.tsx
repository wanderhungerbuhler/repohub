import { BrowserRouter } from 'react-router-dom'

import { Router } from './routes/app.routes'

import CreateGlobalStyle from './styles/global'

export default function App() {

  return (
    <BrowserRouter>
      <Router />
      <CreateGlobalStyle />
    </BrowserRouter>
  )
}
