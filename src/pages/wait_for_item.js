import blurImage from "../assets/blur.png";
import {ReactComponent as Gear} from "../assets/gear.svg";
import Header from "../components/header";
import HeaderButton from "../components/header-button";
import InfoMessageSkeleton from "../components/skeletons/info_message_skeleton";
import PageObject from "../util/page_object";
import ItemMenu from "./item_menu";
import ItemSelection from "./item_selecton";

const WaitForItem = ({setPage} = {}) => {
    return <InfoMessageSkeleton
        buttons={[
            <HeaderButton 
                Icon={Gear}
                key={0}
                onClick={() => setPage(new PageObject(() => <ItemMenu setPage={setPage}/>))}
            />
        ]}
        setPage={setPage}
        text="Legg på Vare"
        Extra={() => <button 
            className="cheat_button"
            onClick={() => setPage(new PageObject(() => <ItemSelection setPage={setPage}/>))}
        >{"Trykk for å gå videre"}</button>}
    />
};

export default WaitForItem;