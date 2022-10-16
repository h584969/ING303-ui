import {ReactComponent as Return} from "../assets/arrow_back.svg";
import HeaderButton from "./header-button";
import Logo from "./logo";


const Header = ({buttons = []} = {}) => {
    return (
        <div className="app-header">
            <Logo />
            <div className="app-header-button-group">
                {buttons}
            </div>
        </div>
    );
}

export default Header;