import blurImage from "../assets/blur.png";

import Header from "../components/header";

const WaitForItem = ({setPage} = {}) => {
    return (
        <div className="container blurred" style={{ backgroundImage: `url(${blurImage})` }}>
            <Header/>
            <div className="info_panel transparent">
                <div className="info_message_container">
                    <span className="info_message">Legg på vare</span>
                </div>
            </div>
        </div>
    );
};

export default WaitForItem;