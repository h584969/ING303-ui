import MenuPageSkeleton from "../components/skeletons/menu_page_skeleton";
import {ReactComponent as SaveIcon} from "../assets/save_icon.svg";
import {ReactComponent as TrashCan} from "../assets/trash_can.svg";
import {ReactComponent as Return  } from "../assets/arrow_back.svg";
import { useState } from "react";
import DeleteItem from "./delete_item";
import PageObject from "../util/page_object";
import ItemMenu from "./item_menu";
import HeaderButton from "../components/header-button";

const EditItemContent = ({
    setPage = () => {},
    itemImage,
    itemName,
    itemPrice
} = {}) => {

    const [name, setName] = useState(itemName);
    const [price, setPrice] = useState(itemPrice);

    return (
        <div className="item_viewer">
            <img className="item_viewer_image" src= {itemImage}/>
            <div className="item_viewer_input_container">
                <div className="item_viewer_input_row">
                    <label>Navn på vare</label>
                </div>
                <div className="item_viewer_input_row">
                    <input value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="item_viewer_input_row">
                    <label>Pris per kg</label>
                </div>
                <div className="item_viewer_input_row">
                    <input type={"text"} inputMode={"decimal"} value={price} onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className="item_viewer_input_row item_viewer_input_row_left">
                    <SaveIcon className="item_viewer_input_icon icon_secondary" onClick={() => setPage(new PageObject(() => <ItemMenu setPage={setPage}/>))}/>
                    <TrashCan  className="item_viewer_input_icon icon_danger" onClick={() => setPage(new PageObject(() => <DeleteItem setPage={setPage} item={itemName}/>))}/>
                </div>
            </div>
        </div>
    );
}

const EditItem = ({
        setPage = () => {},
        itemImage = "https://embed.widencdn.net/img/beef/ct62lm01nw/800x600px/T-Bone%20Steak.psd?keep=c&u=7fueml",
        itemName = "T bone",
        itemPrice = 0
    } = {}) => {
    return(
        <MenuPageSkeleton 
            header_buttons={[
                <HeaderButton Icon={Return} key={0} onClick={() => setPage(new PageObject(() => <ItemMenu setPage={setPage}/>))}/>
            ]}
            Content={() => <EditItemContent setPage={setPage} itemImage={itemImage} itemName={itemName} itemPrice={itemPrice}/>}
        />
    )
};
export default EditItem;