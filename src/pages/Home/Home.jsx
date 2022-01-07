import { ContainerHome, ContentHome, Images } from "./styles"

//* Import Images
import Logo from "../../components/Assets/Logo.svg"
import Twitter from "../../components/Assets/Twitter.svg"
import Img1 from "../../components/Assets/User-1.svg"
import Img2 from "../../components/Assets/User-2.svg"
import Img3 from "../../components/Assets/User-3.svg"
import Img4 from "../../components/Assets/User-4.svg"
import Img5 from "../../components/Assets/User-5.svg"

const Home = () => (
  <ContainerHome>
    <ContentHome>
      <img src={Logo} alt="Logo" />
      <h1>
        Meet New entrepre<span>neurs</span>
      </h1>
      <p>
        Meet is a new media platform for entrepreneus to connect and socialize
      </p>
      <button>Get notified at launch</button>

      <div>
        <img src={Twitter} alt="Twitter" />
        <p>Follow us on Twitter</p>
      </div>
    </ContentHome>
    <Images>
      <div>
        <img src={Img3} alt="Img3" />
      </div>
      <div>
        <img src={Img1} alt="Img1" />
        <img src={Img2} alt="Img2" />
        <img src={Img4} alt="Img4" />
        <img src={Img5} alt="Img5" />
      </div>
    </Images>
  </ContainerHome>
)

export default Home
