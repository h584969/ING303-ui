import logoImg from "../assets/Cura-opus-transparent.png";
const Logo = () => {
    return(
        <svg viewBox="0 0 900 100" className="app-logo-container">
            <image y={"25%"} href={logoImg} width={"50%"} height={"50%"}/>
        </svg>
    )
}

export default Logo;