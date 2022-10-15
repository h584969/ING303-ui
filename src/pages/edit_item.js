import MenuPageSkeleton from "../components/skeletons/menu_page_skeleton";
import {ReactComponent as SaveIcon} from "../assets/save_icon.svg";
import {ReactComponent as TrashCan} from "../assets/trash_can.svg";
import { useState } from "react";
import DeleteItem from "./delete_item";
import PageObject from "../util/page_object";
import ItemMenu from "./item_menu";

const EditItemContent = ({setPage = () => console.warn("'setPage' not provided")} = {}) => {

    const [name, setName] = useState("T bone");
    const [price, setPrice] = useState("359.90");

    return (
        <div className="item_viewer">
            <img className="item_viewer_image" src="https://embed.widencdn.net/img/beef/ct62lm01nw/800x600px/T-Bone%20Steak.psd?keep=c&u=7fueml" />
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
                    <input type={"number"} value={price} onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className="item_viewer_input_row item_viewer_input_row_left">
                    <SaveIcon className="item_viewer_input_icon icon_secondary"/>
                    <TrashCan  className="item_viewer_input_icon icon_danger" onClick={() => setPage(new PageObject(() => <DeleteItem setPage={setPage}/>))}/>
                </div>
            </div>
        </div>
    )
}

const EditItem = ({setPage = () => console.warn("'setPage' not provided")} = {}) => {
    return(
        <MenuPageSkeleton header_button_logic={() => setPage(new PageObject(() => <ItemMenu setPage={setPage}/>))} Content={() => <EditItemContent setPage={setPage}/>}/>
    )
};
export default EditItem;