import blurImage from "../../assets/blur.png";

import Header from "../../components/header";

const InfoMessageSkeleton = ({setPage, title="", buttons=[], text="", Extra= null} = {}) => {
    
    const extra = Extra ?
        <Extra /> :
        null;

    return (
        <div className="container blurred" style={{ backgroundImage: `url(${blurImage})` }}>
            <Header buttons={buttons}/>
            <div className="info_panel transparent">
                <div className="info_message_container">
                    <span className="info_message">{text}</span>
                    {extra}
                </div>
            </div>
        </div>
    );
};

export default InfoMessageSkeleton;