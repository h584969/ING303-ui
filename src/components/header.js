import {ReactComponent as Return} from "../assets/arrow_back.svg";
import HeaderButton from "./header-button";
import Logo from "./logo";


const Header = ({button_icon = Return, button_logic = () => {}} = {}) => {
    return (
        <div className="app-header">
            <Logo />
            <HeaderButton Icon={button_icon} onClick={button_logic}/>
        </div>
    );
}

export default Header;