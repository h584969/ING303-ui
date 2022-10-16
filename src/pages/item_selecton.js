import HeaderButton from "../components/header-button";
import ItemList from "../components/item_list";
import MenuPageSkeleton from "../components/skeletons/menu_page_skeleton"
import ITEM_ENTRIES from "../util/item_entries";
import PageObject from "../util/page_object";
import EditItem from "./edit_item";
import {ReactComponent as Return} from "../assets/arrow_back.svg";
import ItemMenu from "./item_menu";
import AbortOperation from "./abort_operation";
import SliceKind from "./slice_kind";

const PREDICTED = ITEM_ENTRIES.slice(0,4);

const ItemSelectionMenu = ({setPage} = {}) => {
    return(
        <MenuPageSkeleton 
            header_buttons={[
                <HeaderButton 
                    Icon={Return}
                    key={0}
                    onClick={() => setPage(new PageObject(() => <ItemSelection setPage={setPage} />))}  
                />
            ]}

            Content={() => <ItemList setPage={setPage} entry_redirect={selection_entry_redirect}/>}
        />
    );
}

const ItemselectionContent = ({setPage} = {}) => {
    return (
    <div className="item_viewer">
        <div className="item_menu_grid">
            {
                PREDICTED.map((value,i) => 
                    <div 
                        className="item_menu_entry"
                        key={i}
                        onClick={() => setPage(new PageObject(() => <SliceKind setPage={setPage}/>))}
                        >
                        <img className="item_menu_entry_image" src={value[0]}/>
                        <p className="item_menu_entry_name">{value[1]}</p>
                    </div>
                )
            }
            <div className="item_menu_button">
                <button className="cheat_button" onClick={() => setPage(new PageObject(() => <ItemSelectionMenu setPage={setPage}/>))}>Annet</button>
            </div>
        </div>
        
    </div>
    );
}

const ItemSelection = ({setPage} = {}) => {
    return (
        <MenuPageSkeleton 
            Content={() => <ItemselectionContent setPage={setPage}/>} 
            header_buttons={[
                <HeaderButton Icon={Return} key={0} onClick={() => setPage(new PageObject(() => <AbortOperation setPage={setPage}/>))}/>
            ]} 
            useBlur={true}/>
    );
}
/**
 * 
 * @param {[string,string,number]} value 
 * @param {number} i 
 * @param {(PageObject) => void} setPage 
 */
const selection_entry_redirect = (value, i, setPage) => setPage(new PageObject(() => <SliceKind setPage={setPage}/>))

export default ItemSelection;