import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Main from './components/Main'
import { ConfigureStore } from './redux/config'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap-social/bootstrap-social.css'
import './index.scss'

const store = ConfigureStore()
const App = () => {
  return(
    <Provider store={store} >
      <BrowserRouter>
        <React.StrictMode>
          <Main />
        </React.StrictMode>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))