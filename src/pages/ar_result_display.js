import mockArDisplay from "../assets/ArImage.png";
import Header from "../components/header";
import HeaderButton from "../components/header-button";
import {ReactComponent as Return  } from "../assets/arrow_back.svg";
import InfoPanel from "../components/info_panel";
import WaitForItem from "./wait_for_item";
import PageObject from "../util/page_object";

const ArResultDisplay = ({setPage} = {}) =>{
    return (
        <div className={"container blurred"} style={{backgroundImage: `url(${mockArDisplay})`}}>
            <Header buttons={[
                <HeaderButton
                    Icon={Return}
                    key={0}
                    onClick={() => {
                        setPage(new PageObject(() => <WaitForItem setPage={setPage}/>));
                    }}
                />
            ]}/>
        </div>
    );
}

export default ArResultDisplay;