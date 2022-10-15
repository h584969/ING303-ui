import Header from "../components/header";
import InfoPanel from "../components/info_panel";

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

const ItemList = () => MOCK_ITEMS.map((value,i) => <div className="item_menu_entry" key={i}>
        <img className="item_menu_entry_image" src={value[0]}/>
        <p className="item_menu_entry_name">{value[1]}</p>
        <p className="item_menu_entry_price">{value[2]} per kg.</p>
    </div>)


const ItemMenu = ({setPage = () => {}} = {}) => {
    return (
        <div className="container">
            <Header button_logic={() => {}}/>
            <InfoPanel Content={() => <div className="item_menu_grid">
                <ItemList />
            </div>}/>
        </div>
    );
};

export default ItemMenu;