
import {ReactComponent as Return} from "../../assets/arrow_back.svg";
import Header from "../header";
import InfoPanel from "../info_panel";

const MenuPageSkeleton = ({header_button_icon = Return, header_button_logic = () => {}, Content = () => <div></div>} = {}) => {
    return(
        <div className="container">
            <Header button_icon={header_button_icon} button_logic={header_button_logic}/>
            <InfoPanel Content={Content}/>
        </div>
    );
};

export default MenuPageSkeleton;