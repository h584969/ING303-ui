import Header from "../components/header";
import InfoPanel from "../components/info_panel";
import {ReactComponent as Plus} from "../assets/plus.svg";
import {ReactComponent as Return} from "../assets/arrow_back.svg";
import MenuPageSkeleton from "../components/skeletons/menu_page_skeleton";
import HeaderButton from "../components/header-button";
import PageObject from "../util/page_object";
import EditItem from "./edit_item";
import AddItem from "./add_item";
import ITEM_ENTRIES from "../util/item_entries";
import WaitForItem from "./wait_for_item";
import ItemList from "../components/item_list";


const ItemMenu = ({setPage = () => {}, entry_redirect = default_redirect, back_button=null} = {}) => {
    return (
        <MenuPageSkeleton 
            header_buttons={[
                <HeaderButton 
                    Icon={Plus}
                    key={0}
                    onClick={() => setPage(new PageObject(() => <AddItem setPage={setPage}/>))}  
                />, 
                <HeaderButton 
                    Icon={Return}
                    key={1}
                    onClick={() => setPage(new PageObject(back_button ?? (() => <WaitForItem setPage={setPage} />)))}  
                />
            ]}

            Content={() => <ItemList setPage={setPage} entry_redirect={entry_redirect}/>}
        />
    );
};

const default_redirect = (value,_i,setPage) => setPage(new PageObject(() => <EditItem 
            setPage={setPage}
            itemImage={value[0]}
            itemName={value[1]}
            itemPrice={value[2]}
            />));


export default ItemMenu;