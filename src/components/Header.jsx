import { Container, Image } from "react-bootstrap"
import WLogo from "../assets/W-logo.png"


const Header = () => {
    return(

        <Container>
            <Image src={WLogo} width={400}  ></Image>
            <h1 className="my-4 display-4"  >Wolswagen Golf Series</h1>
        </Container>

    )
}

export default Header;