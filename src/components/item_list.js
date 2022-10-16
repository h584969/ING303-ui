import ITEM_ENTRIES from "../util/item_entries";

/**
 * 
 * @param {any[]} arr 
 */
 function shuffle(arr){
    for (let i = arr.length-1; i >= 0; i--){
        let j = ~~(Math.random()*i);
        const t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }
    return arr;
}


const MOCK_ITEMS = shuffle(new Array(10).fill(ITEM_ENTRIES).flat());

const ItemList = ({items = MOCK_ITEMS, setPage = () => {}, entry_redirect} = {}) => <div className="item_menu_grid">
    {
        items.map((value,i) => <div 
        className="item_menu_entry" 
        key={i}
        onClick={() => entry_redirect(value,i,setPage)}
    >
        <img className="item_menu_entry_image" src={value[0]}/>
        <div className="item_menu_entry_name">{value[1]}</div>
        <div className="item_menu_entry_price">{value[2]} per kg.</div>
    </div>)
    }
</div>

export default ItemList;