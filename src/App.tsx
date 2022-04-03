import Routes from "./routes/Routes"
import GlobalStyles from "./styles/GlobalStyles"
import { UserContextProvider } from './context/UserContext'

function App() {

  return (
    <div className="App">
      <UserContextProvider>
        <Routes />
        <GlobalStyles />
      </UserContextProvider>
    </div>
  )
}

export default App
