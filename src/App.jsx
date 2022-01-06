//* Import styles
import { Fondo, ContainerApp, ContentApp } from "./styles"

//* Import components
import LoadingPage from "./components/LoadingPage"

const App = () => (
  <ContainerApp>
    <LoadingPage />
    <ContentApp>
      <h1>Meet New entrepreneurs</h1>
      <p>
        Meet is a new media platform for entrepreneus to connect and socialize
      </p>
      <button>Get notified at launch</button>

      <div>
        <span></span> <p>Follow us on Twitter</p>
      </div>
    </ContentApp>
  </ContainerApp>
)

export default App
