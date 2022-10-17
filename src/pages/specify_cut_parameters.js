import blurImage from "../assets/blur.png";
import HeaderButton from "../components/header-button"
import MenuPageSkeleton from "../components/skeletons/menu_page_skeleton"
import {ReactComponent as Return} from "../assets/arrow_back.svg";
import PageObject from "../util/page_object";
import SliceKind from "./slice_kind";
import InfoMessageSkeleton from "../components/skeletons/info_message_skeleton";
import { useState } from "react";
import Header from "../components/header";
import ArProcessing from "./ar_processing";

const SpecifyCutParameters = ({setPage, kind=""} = {}) => {

    const [amount, setAmount] = useState("");


    return ( <div className="container blurred" style={{ backgroundImage: `url(${blurImage})` }}>
        <Header buttons={[
                <HeaderButton
                    Icon={Return}
                    key={0}
                    onClick={() => setPage(new PageObject(() => <SliceKind setPage={setPage}/>))}
                />
            ]}/>
        <div className="info_panel transparent">
            <div className="info_message_container">
                <span className="info_message">{`Angi ${kind}`}</span>
                <div className="cut_parameter_input">
                <input type={"text"} inputMode={"decimal"} pattern={"\\d+\\(.\\d+)?"} value={amount} onChange={(e) => setAmount(e.target.value)}/>
                <button onClick={() => setPage(new PageObject(() => <ArProcessing setPage={setPage}/>))}>Beregn</button>
            </div>;
            </div>
        </div>
    </div>
    );
}

export default SpecifyCutParameters