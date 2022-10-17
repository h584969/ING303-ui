import HeaderButton from "../components/header-button";
import MenuPageSkeleton from "../components/skeletons/menu_page_skeleton";
import {ReactComponent as Return  } from "../assets/arrow_back.svg";
import {ReactComponent as SaveIcon} from "../assets/save_icon.svg";
import PageObject from "../util/page_object";
import ItemMenu from "./item_menu";
import React, { useState } from "react";

const AddItemContent = ({setPage} = {}) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);

    const [image, setImage] = useState(null);

    /**
     * 
     * @param {React.ChangeEvent<HTMLInputElement>} e 
     */
    const load_image = (e) => {
        const fr = new FileReader();

        fr.onload = () => {
            setImage(fr.result);
        }

        fr.readAsDataURL(e.target.files[0]);
    }

    const imageDom = image ?
        <img className="item_viewer_image" src= {image}/> :
        <div className="item_viewer_image_input_container">
            <input className="item_viewer_image_input" accept="image/*" type="file" onChange={load_image}/>
            <div className="item_viewer_image_input_visual">
                <span>Trykk for å legge til bilde</span>
            </div>
        </div>
    return (
        <div className="item_viewer">
            {imageDom}
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

                </div>
            </div>
        </div>
    );
}


const AddItem = ({setPage} = {}) => {
    return(
        <MenuPageSkeleton
            header_buttons={[
                <HeaderButton 
                    Icon={Return}
                    key={0}
                    onClick={() => setPage(new PageObject(() => <ItemMenu setPage={setPage}/>))}
                />
            ]}
            Content={() => <AddItemContent setPage={setPage}/>}
        />
    );
};

export default AddItem;