import Header from "../components/header";
import InfoPanel from "../components/info_panel";
import {ReactComponent as Plus} from "../assets/plus.svg";
import {ReactComponent as Return} from "../assets/arrow_back.svg";
import MenuPageSkeleton from "../components/skeletons/menu_page_skeleton";
import HeaderButton from "../components/header-button";
import PageObject from "../util/page_object";
import EditItem from "./edit_item";
import AddItem from "./add_item";

const MOCK_ITEMS = [
    ["https://embed.widencdn.net/img/beef/ct62lm01nw/800x600px/T-Bone%20Steak.psd?keep=c&u=7fueml","T-bone", 359.90],
    ["https://voresmad.dk/-/media/contenthub/udskaeringer/gris/kotelet-med-fedtkant.jpg?h=503&mw=900&w=900&hash=0BF388FB219DEB9B58378950C32C87E8", "Koteletter", 159.90],
    ["https://media.snl.no/media/28032/standard_Svineribbe-MP-07083_500.jpg", "Svineribbe",219.90],
    ["https://embed.widencdn.net/img/beef/ct62lm01nw/800x600px/T-Bone%20Steak.psd?keep=c&u=7fueml","T-bone", 359.90],
    ["https://voresmad.dk/-/media/contenthub/udskaeringer/gris/kotelet-med-fedtkant.jpg?h=503&mw=900&w=900&hash=0BF388FB219DEB9B58378950C32C87E8", "Koteletter", 159.90],
    ["https://media.snl.no/media/28032/standard_Svineribbe-MP-07083_500.jpg", "Svineribbe",219.90],
    ["https://embed.widencdn.net/img/beef/ct62lm01nw/800x600px/T-Bone%20Steak.psd?keep=c&u=7fueml","T-bone", 359.90],
    ["https://voresmad.dk/-/media/contenthub/udskaeringer/gris/kotelet-med-fedtkant.jpg?h=503&mw=900&w=900&hash=0BF388FB219DEB9B58378950C32C87E8", "Koteletter", 159.90],
    ["https://media.snl.no/media/28032/standard_Svineribbe-MP-07083_500.jpg", "Svineribbe",219.90],
    ["https://embed.widencdn.net/img/beef/ct62lm01nw/800x600px/T-Bone%20Steak.psd?keep=c&u=7fueml","T-bone", 359.90],
    ["https://voresmad.dk/-/media/contenthub/udskaeringer/gris/kotelet-med-fedtkant.jpg?h=503&mw=900&w=900&hash=0BF388FB219DEB9B58378950C32C87E8", "Koteletter", 159.90],
    ["https://media.snl.no/media/28032/standard_Svineribbe-MP-07083_500.jpg", "Svineribbe",219.90],
    ["https://embed.widencdn.net/img/beef/ct62lm01nw/800x600px/T-Bone%20Steak.psd?keep=c&u=7fueml","T-bone", 359.90],
    ["https://voresmad.dk/-/media/contenthub/udskaeringer/gris/kotelet-med-fedtkant.jpg?h=503&mw=900&w=900&hash=0BF388FB219DEB9B58378950C32C87E8", "Koteletter", 159.90],
    ["https://media.snl.no/media/28032/standard_Svineribbe-MP-07083_500.jpg", "Svineribbe",219.90],
    ["https://embed.widencdn.net/img/beef/ct62lm01nw/800x600px/T-Bone%20Steak.psd?keep=c&u=7fueml","T-bone", 359.90],
    ["https://voresmad.dk/-/media/contenthub/udskaeringer/gris/kotelet-med-fedtkant.jpg?h=503&mw=900&w=900&hash=0BF388FB219DEB9B58378950C32C87E8", "Koteletter", 159.90],
    ["https://media.snl.no/media/28032/standard_Svineribbe-MP-07083_500.jpg", "Svineribbe",219.90],
]

const ItemList = ({setPage = () => {}} = {}) => <div className="item_menu_grid">
    {
        MOCK_ITEMS.map((value,i) => 
        <div 
            className="item_menu_entry" 
            key={i}
            onClick={() => setPage(new PageObject(() => <EditItem 
                setPage={setPage}
                itemImage={value[0]}
                itemName={value[1]}
                itemPrice={value[2]}
                />))}
        >
            <img className="item_menu_entry_image" src={value[0]}/>
            <p className="item_menu_entry_name">{value[1]}</p>
            <p className="item_menu_entry_price">{value[2]} per kg.</p>
        </div>)
    }
</div>


const ItemMenu = ({setPage = () => {}} = {}) => {
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
                    onClick={() => {}}  
                />
            ]}

            Content={() => <ItemList setPage={setPage}/>}
        />
    );
};

export default ItemMenu;