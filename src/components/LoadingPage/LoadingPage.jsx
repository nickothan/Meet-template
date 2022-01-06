//* Import styles
import { ContainerLoading } from "./styles"

window.onload = function () {
  const contenedor = document.getElementById("ContenedorLoading")

  setTimeout(() => {
    contenedor.style.visibility = "hiden"
    contenedor.style.opacity = "0"
    setTimeout(() => {
      contenedor.style.display = "none"
    }, 1000)
  }, 3000)
}

const LoadingPage = () => (
  <ContainerLoading id="ContenedorLoading">
    <div>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <p>Loading...</p>
  </ContainerLoading>
)

export default LoadingPage
