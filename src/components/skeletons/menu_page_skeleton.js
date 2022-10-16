
import Header from "../header";
import InfoPanel from "../info_panel";

const MenuPageSkeleton = ({header_buttons = [], Content = () => <div></div>} = {}) => {
    return(
        <div className="container">
            <Header buttons={header_buttons}/>
            <InfoPanel Content={Content}/>
        </div>
    );
};

export default MenuPageSkeleton;