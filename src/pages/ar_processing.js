import blurImage from "../assets/blur.png";
import {ReactComponent as Return  } from "../assets/arrow_back.svg";
import Header from "../components/header";
import HeaderButton from "../components/header-button";
import InfoPanel from "../components/info_panel";
import Loader from "../components/loader";
import PageObject from "../util/page_object";
import SliceKind from "./slice_kind";
import ArResultDisplay from "./ar_result_display";

const ArProcessing = ({setPage} = {}) => {

    const timer = setTimeout(() =>{
        setPage(new PageObject(() => <ArResultDisplay setPage={setPage}/>))
    },3000 + Math.random()*2000);

    return( <div className="container blurred" style={{ backgroundImage: `url(${blurImage})` }}>
    <Header buttons={[
            <HeaderButton
                Icon={Return}
                key={0}
                onClick={() => {
                    clearTimeout(timer);
                    setPage(new PageObject(() => <SliceKind setPage={setPage}/>));
                }}
            />
        ]}/>
    <div className="info_panel transparent">
        <div className="info_message_container">
            <span className="info_message">Ar Processing</span>
            <div className="cut_parameter_input">
                <div className="loader_container">
                    <Loader/>
                </div>
        </div>;
        </div>
    </div>
</div>
);
}

export default ArProcessing;