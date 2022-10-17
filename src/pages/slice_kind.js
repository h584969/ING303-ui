import MenuPageSkeleton from "../components/skeletons/menu_page_skeleton"
import {ReactComponent as Return} from "../assets/arrow_back.svg";
import HeaderButton from "../components/header-button";
import PageObject from "../util/page_object";
import ItemSelection from "./item_selecton";
import SpecifyCutParameters from "./specify_cut_parameters";

const OPERATIONS = [
    ["Antall"],
    ["Vekt"],
    ["Pris"],
    ["Størrelse"],
];

const SliceKindContent = ({setPage} = {}) =>{
    return (
        <div className="item_menu_grid">
            {
                OPERATIONS.map((v,i) => <div key={i} className="item_menu_entry">
                    <div
                        className="item_menu_entry_title"
                        onClick={() => setPage(new PageObject(() => <SpecifyCutParameters kind={v[0]} setPage={setPage} />))}>
                        <span>{v[0]}</span>
                    </div>
                </div>)
            }
        </div>
    );
}

const SliceKind = ({setPage} = {}) => {
    return (
        <MenuPageSkeleton
            useBlur={true}
            header_buttons={[
                <HeaderButton 
                    Icon={Return}
                    key={0}
                    onClick = {() => setPage(new PageObject(() => <ItemSelection setPage={setPage}/>))}
                />
            ]}
            Content={() => <SliceKindContent setPage={setPage}/>}
        />
    )
}

export default SliceKind;