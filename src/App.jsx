//* React functions
import React, { Suspense } from "react"

//* Import components
import LoadingPage from "./components/LoadingPage"

//* Import Pages
const Home = React.lazy(() => {
  return Promise.all([
    import("./pages/home"),
    new Promise((resolve) => setTimeout(resolve, 3000))
  ]).then(([moduleExports]) => moduleExports)
})

const App = () => (
  <>
    <Suspense fallback={<LoadingPage />}>
      <Home />
    </Suspense>
  </>
)

export default App
