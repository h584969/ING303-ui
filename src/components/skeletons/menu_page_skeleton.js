import blurImage from "../../assets/blur.png";
import Header from "../header";
import InfoPanel from "../info_panel";

const MenuPageSkeleton = ({header_buttons = [], Content = () => <div></div>, useBlur=false} = {}) => {

    /**
     * @type{import("react").CSSProperties}
     */
    const style = useBlur ?
        {
            backgroundImage: `url(${blurImage})`
        } : 
        {};

    return(
        <div className={useBlur ? "container blurred" : "container"} style={style}>
            <Header buttons={header_buttons}/>
            <InfoPanel Content={Content}/>
        </div>
    );
};

export default MenuPageSkeleton;