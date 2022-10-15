import MenuPageSkeleton from "../components/skeletons/menu_page_skeleton";
import PageObject from "../util/page_object";
import EditItem from "./edit_item";
import ItemMenu from "./item_menu";

const DeleteItemContent = ({setPage = () => console.warn("'setPage' not provided"), item = ""} = {}) => {
    return (
        <div className="delete_item_container">
            <h4>Er du sikker på at du ønsker å slette</h4>
            <h4 className="item_display_name">"{item}"</h4>
            <div className="delete_item_input">
                <button onClick={() => setPage(new PageObject(() => <ItemMenu setPage={setPage}/>))}>Ja</button>
                <button onClick={() => setPage(new PageObject(() => <EditItem setPage={setPage}/>))}>Nei</button>
            </div>
        </div>
    );
};

const DeleteItem = ({setPage = () => console.warn("'setPage' not provided")} = {}) => {
    return (
        <MenuPageSkeleton Content={() => <DeleteItemContent setPage={setPage} item="T Bone"/>} header_button_logic={() => setPage(new PageObject(() => <EditItem setPage={setPage}/>))}/>
    );
}


export default DeleteItem;